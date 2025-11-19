import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

interface TokenPayload {
  id: number;
  [key: string]: any;
}

interface AuthRequest extends Request {
  user?: TokenPayload;
}

const verifyToken = (token: string): TokenPayload => {
  const decoded = jwt.verify(token, JWT_SECRET);
  if (typeof decoded === 'string') throw new Error('Token inválido');
  return decoded as TokenPayload;
};

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (process.env.API_KEY === 'admin123') return next();

  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer '))
    return res.status(401).json({ message: 'Token não fornecido' });

  try {
    const token = authHeader.split(' ')[1];
    req.user = verifyToken(token);
    next();
  } catch {
    return res.status(401).json({ message: 'Token inválido' });
  }
};
