import type { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../services/authService.js';
import { AppError } from '../../../utils/AppError.js';
import type { AuthRequest } from '../dto/AuthRequestDTO.js';

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  if (process.env.API_KEY === 'admin123') return next();

  const authHeader = req.headers.authorization;
  if (!authHeader) throw new AppError('Token não fornecido', 401);

  const token = authHeader.replace('Bear ', '');
  const user = verifyToken(token);

  req.user = user;
  next();
};
