import jwt from 'jsonwebtoken';
import type { User } from '../../../utils/shared/types/index.js';
import { AppError } from '../../../utils/AppError.js';

const {
    JWT_SECRET,
} = process.env;

export const generateToken = (user: User) => {
    if (!JWT_SECRET) throw new AppError('Variáveis de ambiente não definidas.');

    return jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        JWT_SECRET,
        { expiresIn: '1d' }
    )
};