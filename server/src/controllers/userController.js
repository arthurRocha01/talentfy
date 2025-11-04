import pool from '../database/connection.js';
import bcrypt from 'bcrypt';
import { json } from 'express';

/* Funções utilitárias */

const generateHashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
}

export const findUserByEmail = async (email) => {
  const [user] = await pool.query('SELECT id_usuario, nome, email, senha_hash, tipo_usuario, data_cadastro FROM usuariosf WHERE email = ?', [email]);
  return user[0];
}

/* Controladores */

export const getAllUsers = async (req, res) => {
  const [users] = await pool.query('SELECT * FROM usuarios');
  return res.json(users);
}

export const createUser = async (req, res) => {
  const { nome, email, password, tipo_usuario } = req.body;
  const existing = await pool.query('SELECT 1 FROM usuarios WHERE email = ?', [email]);
  if (existing.length) return res.status(400).json({ error: 'Email já cadastrado' });

  const senha_hash = await generateHashPassword(password);
  await pool.query(
    'INSERT INTO usuarios (nome, email, senha_hash, tipo_usuario) VALUES (?, ?, ?, ?)',
    [nome, email, senha_hash, tipo_usuario]
  );

  res.status(201).json({ message: 'Usuário criado com sucesso' });
}

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha, tipo_usuario } = req.body;

  const fields = { nome, email, tipo_usuario };
  const updates = Object.entries(fields)
    .filter(([_, value]) => value !== undefined)
    .map(([key]) => `${key} = ?`);

  const values = Object.values(fields).filter((v) => v !== undefined);

  if (senha) {
    updates.push('senha_hash = ?');
    values.push(await generateHashPassword(senha));
  }

  if (!updates.length)
    return res.status(400).json({ error: 'Nenhum campo para atualizar' });

  const [result] = await pool.query(
    `UPDATE usuarios SET ${updates.join(', ')} WHERE id_usuario = ?`,
    [...values, id]
  );

  if (!result.affectedRows)
    return res.status(404).json({ error: 'Usuário não encontrado' });

  res.json({ message: 'Usuário atualizado com sucesso' });
}

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('DELETE FROM usuarios WHERE id_usuario = ?', [id]);

  if (result.affectedRows === 0)
    return res.status(404).json({ error: 'Usuário não encontrado' });

  res.json({ message: 'Usuário deletado com sucesso' });
}