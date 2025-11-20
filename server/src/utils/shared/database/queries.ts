import pool from '../../../database/connection.js';
import type { User } from '../types/index.js';

export const findUserByEmail = async (email: string) => {
    const [user] = await pool.query<User[]>(
        'SELECT id_usuario, nome, email, senha_hash, tipo_usuario, data_cadastro FROM usuarios WHERE email = ?',
        [email]
    );
    return user[0] ?? null;
};