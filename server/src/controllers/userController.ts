import pool from '../database/connection.js';
import bcrypt from 'bcrypt';
import { OkPacket, RowDataPacket } from 'mysql2';
import { Request, Response } from 'express';
import { User } from '../types/User';

/* Funções utilitárias */

const generateHashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 10);
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const [rows] = await pool.query<RowDataPacket[]>(
    'SELECT user_id, name, email, password_has, user_type, data_cadastro FROM users WHERE email = ?',
    [email]
  );
  const user = rows as User[];
  return user[0] || null;
};

/* Controladores */

export const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
  const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM users');

  const users = rows as User[];
  return res.json(users);
};

export const createUser = async (req: Request, res: Response): Promise<Response> => {
  const { name, email, password, user_type } = req.body;

  const [existingRows]: [RowDataPacket[], any] = await pool.query(
    'SELECT 1 FROM users WHERE email = ?',
    [email]
  );

  if ((existingRows as any[]).length)
    return res.status(400).json({ error: 'Email já cadastrado' });

  const password_hash = await generateHashPassword(password);
  await pool.query<OkPacket>(
    'INSERT INTO users (name, email, password, user_type) VALUES (?, ?, ?, ?)',
    [name, email, password_hash, user_type]
  );

  return res.status(201).json({ message: 'Usuário criado com sucesso' });
};

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const { name, email, password, user_type } = req.body;

  const fields: { [key: string]: any } = { name, email, user_type };
  const updates = Object.entries(fields)
    .filter(([_, value]) => value !== undefined)
    .map(([key]) => `${key} = ?`);

  const values = Object.values(fields).filter((v) => v !== undefined);

  if (password) {
    updates.push('password_hash = ?');
    values.push(await generateHashPassword(password));
  }

  if (!updates.length)
    return res.status(400).json({ error: 'Nenhum campo para atualizar' });

  const [result] = await pool.query<OkPacket>(
    `UPDATE usuarios SET ${updates.join(', ')} WHERE user_id = ?`,
    [...values, id]
  );
  const info = result as { affectedRows: number }

  if (!info.affectedRows)
    return res.status(404).json({ error: 'Usuário não encontrado' });

  return res.json({ message: 'Usuário atualizado com sucesso' });
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const [result]: [OkPacket, any] = await pool.query<OkPacket>('DELETE FROM users WHERE user_id = ?', [
    id,
  ]);

  if (result.affectedRows === 0)
    return res.status(404).json({ error: 'Usuário não encontrado' });

  return res.json({ message: 'Usuário deletado com sucesso' });
};
