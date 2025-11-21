import pool from '../../../database/connection.js';
import type { User } from '../../../utils/shared/types/index.js';
import { type ResultSetHeader } from 'mysql2/promise';

export const getAllUsers = async (): Promise<User[]> => {
  const [rows] = await pool.query<User[]>('SELECT * FROM users');
  return rows;
};

export const createUser = async (
  name: string,
  email: string,
  password_hash: string,
  role: string,
): Promise<void> => {
  await pool.query<ResultSetHeader>(
    `INSERT INTO users (name, email, password_hash, role)
        VALUES (?, ?, ?, ?)`,
    [name, email, password_hash, role],
  );
};

export const updateUser = async (
  id: number,
  fields: Record<string, unknown>,
): Promise<boolean> => {
  const keys = Object.keys(fields);

  if (keys.length === 0) return false;

  const update = keys.map((key) => `${key} = ?`).join(', ');
  const values = Object.values(fields);

  const [result] = await pool.query<ResultSetHeader>(
    `UPDATE users SET ${update} WHERE id = ?`,
    [...values, id],
  );

  return result.affectedRows > 0;
};

export const deleteUser = async (id: number): Promise<boolean> => {
  const [result] = await pool.query<ResultSetHeader>(
    'DELETE FROM users WHERE id = ?',
    [id],
  );

  return result.affectedRows > 0;
};
