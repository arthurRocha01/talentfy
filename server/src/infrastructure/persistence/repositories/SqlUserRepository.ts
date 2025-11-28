import type { Pool, RowDataPacket } from 'mysql2/promise';
import { User } from '../../../domain/entities/User.js';
import type { IUserRepository } from '../../../domain/repositories/IUserRepository.js';
import { Email } from '../../../domain/value-objects/Email.js';

export class SqlUserRepository implements IUserRepository {
  constructor(private pool: Pool) {}

  save = async (user: User): Promise<void> => {
    const sql = `INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?)`;
    const params = [user.name, user.email.value, user.passwordHash, user.role];

    await this.pool.query(sql, params);
  };

  findByEmail = async (email: Email): Promise<User | null> => {
    const sql =
      'SELECT name, email, password_hash, role FROM users WHERE email = ?';
    console.log(email.value);
    const params = [email.value];

    const [rows] = await this.pool.query<RowDataPacket[]>(sql, params);
    if (rows.length === 0) return null;
    const row = rows[0]!;

    return User.createNew(
      row.name,
      Email.create(row.email),
      row.passwordHash,
      row.role,
    );
  };
}
