import jwt, { type JwtPayload } from 'jsonwebtoken';
import { AppError } from '../../../utils/AppError.js';
import type { User } from '../../../utils/shared/types/index.js';

const { JWT_SECRET } = process.env;

export const verifyToken = (token: string): User => {
  if (!JWT_SECRET) throw new AppError('JWT_SECRET não está definido', 500);
  const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

  return {
    id: decoded.id,
    email: decoded.email,
    role: decoded.role,
  } as User;
};
