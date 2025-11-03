import pool from '../database/connection.js';
import bcrypt from 'bcrypt';

export async function getAllUsers(req, res) {
  try {
    const [rows] = await pool.query(
      'SELECT id_usuario, nome, email, tipo_usuario, data_cadastro FROM usuarios'
    );
    res.json(rows);
  } catch (err) {
    console.error('Erro ao listar usuários:', err);
    res.status(500).json({ error: err.message });
  }
}

export async function getUserById(req, res) {
  const { id } = req.params;
  try {
    const [rows] = await pool.query(
      'SELECT id_usuario, nome, email, tipo_usuario, data_cadastro FROM usuarios WHERE id_usuario = ?',
      [id]
    );
    if (rows.length === 0)
      return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getUserByEmail(req, res) {
  const { email } = req.params;

  try {
    const [rows] = await pool.query(
      'SELECT id_usuario, nome, email, tipo_usuario, data_cadastro FROM usuarios WHERE email = ?',
      [email]
    );
    if (rows.length === 0)
      return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function createUser(req, res) {
  const { nome, email, senha, tipo_usuario } = req.body;
  try {
    const [existing] = await pool.query(
      'SELECT * FROM usuarios WHERE email = ?',
      [email]
    );
    if (existing.length > 0)
      return res.status(400).json({ error: 'Email já cadastrado' });

    const hash = await bcrypt.hash(senha, 10);
    await pool.query(
      'INSERT INTO usuarios (nome, email, senha_hash, tipo_usuario) VALUES (?, ?, ?, ?)',
      [nome, email, hash, tipo_usuario || 'cliente']
    );
    res.status(201).json({ message: 'Usuário criado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function updateUser(req, res) {
  const { id } = req.params;
  const { nome, email, senha, tipo_usuario } = req.body;
  try {
    const updates = [];
    const values = [];

    if (nome) {
      updates.push('nome = ?');
      values.push(nome);
    }
    if (email) {
      updates.push('email = ?');
      values.push(email);
    }
    if (senha) {
      const hash = await bcrypt.hash(senha, 10);
      updates.push('senha_hash = ?');
      values.push(hash);
    }
    if (tipo_usuario) {
      updates.push('tipo_usuario = ?');
      values.push(tipo_usuario);
    }

    if (updates.length === 0)
      return res.status(400).json({ error: 'Nenhum campo para atualizar' });

    values.push(id);

    const [result] = await pool.query(
      `UPDATE usuarios SET ${updates.join(', ')} WHERE id_usuario = ?`,
      values
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ error: 'Usuário não encontrado' });

    res.json({ message: 'Usuário atualizado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    const [result] = await pool.query(
      'DELETE FROM usuarios WHERE id_usuario = ?',
      [id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json({ message: 'Usuário deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
