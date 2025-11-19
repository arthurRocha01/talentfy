import bcrypt from 'bcrypt';
import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response } from 'express';
import { User } from '../types/User';
import * as userController from './userController';

dotenv.config();

const JWT_SECRET: string = process.env.JWT_SECRET ?? 'secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN ?? '1h';

const generateToken = (id: number): string => {
  return jwt.sign(
    { id } as object,
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN } as SignOptions
  );
};


export const login = async (req: Request, res: Response): Promise<Response> => {
  // Extrai email e senha do corpo da requisição
  const { email, password } = req.body as { email: string; password: string };

  // Validação básica
  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios' });
  }

  // Busca usuário no banco
  const user: User | null = await userController.findUserByEmail(email);

  // Valida senha
  if (!user?.password_hash || !(await bcrypt.compare(password, user.password_hash))) {
    return res.status(401).json({ message: 'Usuário ou credenciais inválidas' });
  }

  // Retorna token JWT + dados do usuário
  return res.status(200).json({
    token: generateToken(user.user_id),
    user: {
      id: user.user_id,
      name: user.name,
      user_type: user.user_type, // nome consistente com o tipo User
    },
  });
};
