import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import * as userController from '../controllers/userController.js';
import pool from '../database/connection.js';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
};

export async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: 'Email e senha são obrigatórios' });

  const user = await userController.findUserByEmail(email);
  if (!user?.senha_hash || !(await bcrypt.compare(password, user.senha_hash))) {
    return res
      .status(401)
      .json({ message: 'Usuário ou credenciais inválidas' });
  }

  res.status(200).json({
    token: generateToken(user.id_usuario),
    user: { id: user.id_usuario, nome: user.nome, tipo: user.tipo_usuario },
  });
}
