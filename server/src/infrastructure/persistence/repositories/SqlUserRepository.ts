import type { Pool, RowDataPacket } from 'mysql2/promise';
import { User } from '../../../domain/entities/User.js';
import type { IUserRepository } from '../../../domain/repositories/IUserRepository.js';
import { Email } from '../../../domain/value-objects/Email.js';

export class SqlUserRepository implements IUserRepository {
  constructor(private pool: Pool) {}

  save = async (user: User): Promise<User> => {
    const sql = `INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?)`;
    const params = [user.name, user.email.value, user.passwordHash, user.role];

    const [result] = await this.pool.query(sql, params);
    const insertId = (result as any).insertId;

    return User.restore(
      String(insertId),
      user.name,
      user.email,
      user.passwordHash,
      user.role,
    );
  };

  findByEmail = async (email: Email): Promise<User | null> => {
    const sql =
      'SELECT name, email, password_hash, role FROM users WHERE email = ?';
    const params = [email.value];

    const [rows] = await this.pool.query<RowDataPacket[]>(sql, params);
    if (rows.length === 0) return null;
    const row = rows[0]!;

    return User.restore(
      row.id.toString(),
      row.name,
      Email.create(row.email),
      row.passwordHash,
      row.role,
    );
  };

  findById = async (id: string): Promise<User | null> => {
    const sql = `
      SELECT * FROM users WHERE id = ?
    `;
    const params = [id];

    const [rows] = await this.pool.query<RowDataPacket[]>(sql, params);
    if (rows.length === 0) return null;
    const row = rows[0]!;

    return User.restore(
      row.id.toString(),
      row.name,
      Email.create(row.email),
      row.passwordHash,
      row.role,
    );
  };

  update = async (user: User): Promise<User> => {
    const sql = `
    UPDATE users
    SET name = ?, email = ?, password_hash = ?
    WHERE id = ?`;

    const params = [user.name, user.email.value, user.passwordHash, user.id];

    await this.pool.query(sql, params);
    return user;
  };
}
