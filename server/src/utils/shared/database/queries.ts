import pool from '../../../database/connection.js';
import type { User } from '../types/index.js';

export const findUserByEmail = async (email: string) => {
  const [user] = await pool.query<User[]>(
    'SELECT id, name, email, password_hash, role, created_at FROM users WHERE email = ?',
    [email],
  );
  return user[0] ?? null;
};
