import type { Request, Response } from 'express';
import { AppError } from '../../../utils/AppError.js';
import { comparePasswored } from '../../../utils/password.utils.js';
import { generateToken } from '../utils/token.utils.js';
import { findUserByEmail } from '../../../utils/shared/database/queries.js';

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);
    if (!user) throw new AppError('Usuário ou senha inválidos', 401);

    const isValid = comparePasswored(password, user.password_hash);
    if (!isValid) throw new AppError('Usuário ou senha inválidos', 401);

    const token = generateToken(user);
    res.json({ token });
}; 