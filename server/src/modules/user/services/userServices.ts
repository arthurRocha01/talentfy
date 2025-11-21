import type * as UserRequestDTO from '../dto/UserRequestDTO.js';
import * as userRepo from '../repositories/userRepositories.js';
import * as sharedQueries from '../../../utils/shared/database/queries.js';
import { hashPassword } from '../../../utils/password.utils.js';
import type { User } from '../../../utils/shared/types/index.js';
import { AppError } from '../../../utils/AppError.js';

export const listUsers = async (): Promise<User[]> => {
    return userRepo.getAllUsers();
};

export const createUser = async ({
    name,
    email,
    password,
    role,
}: UserRequestDTO.CreateUserDTO): Promise<{ message: string }> => {
    const existing = await sharedQueries.findUserByEmail(email);

    if (existing) {
        throw new AppError('Email já cadastrado.');
    }

    const hasshPassword = await hashPassword(password);

    await userRepo.createUser(name, email, hasshPassword, role);

    return { message: 'Usuário criado com sucesso' };
};

export const updateUser = async (
    id: number,
    body: UserRequestDTO.updateUserDTO
): Promise<{ message: string }> => {
    const fields: Record<string, unknown> = {};

    if (body.name !== undefined) fields.name = body.name;
    if (body.email !== undefined) fields.email = body.email;
    if (body.role !== undefined) fields.role = body.role;
    if (body.password !== undefined) {
        fields.password_hash = await hashPassword(body.password)
    }

    if (Object.keys(fields).length === 0) {
        throw new AppError('Nenhum campo para atualizar');
    }

    const updated = await userRepo.updateUser(id, fields);

    if (!updated) {
        throw new AppError('Usuário não encontrado');
    }

    return { message: 'Usuário atualizado com sucesso' };
};

export const deleteUser = async (
    id: number,
): Promise<{ message: string }> => {
    const deleted = await userRepo.deleteUser(id);

    if (!deleted) {
        throw new AppError('Usuário não encontrado');
    }

    return { message: 'Usuário deletado com sucesso' };
}; 