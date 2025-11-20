import { AppError } from '../../../utils/AppError.js';
import type { User } from '../../../utils/shared/types/index.js';
import type { LoginResponse } from '../dto/AuthResponseDTO.js';
import type { LoginDTO } from './../dto/AuthRequestDTO.js';
import * as sharedQueries from '../../../utils/shared/database/queries.js';
import jwt, { type SignOptions } from "jsonwebtoken";
import { comparePasswored } from '../../../utils/password.utils.js';

const JWT_SECRET = process.env.JWT_SECRET!;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN! as "1d";

const options: SignOptions = {
  expiresIn: JWT_EXPIRES_IN,
};

export function generateToken(userId: number): string {
  return jwt.sign({ id: userId }, JWT_SECRET, options);
};

export const login = async ({ email, password }: LoginDTO): Promise<LoginResponse> => {
    if (!email || !password) {
        throw new AppError('Email e senha são obrigatórios', 400);
    }

    const user: User | null = await sharedQueries.findUserByEmail(email);

    if (!user || !(await comparePasswored(password, user.password_hash))) {
        throw new AppError('Usuário ou credenciais inválidas');
    }

    return {
        token: generateToken(user.id),
        user: {
            id: user.id,
            name: user.name,
            role: user.role
        }
    };
};