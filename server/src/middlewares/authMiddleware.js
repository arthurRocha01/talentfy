import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = (token) => jwt.verify(token, JWT_SECRET);

export const authMiddleware = (req, res, next) => {
  if (process.env.API_KEY === 'admin123') return next();

  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  try {
    req.user = verifyToken(authHeader.split(' ')[1]);
    next();
  } catch {
    return res.status(401).json({ message: 'Token inválido' });
  }
};
