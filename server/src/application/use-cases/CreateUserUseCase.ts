import { User } from '../../domain/entities/User.js';
import type { IUserRepository } from '../../domain/repositories/IUserRepository.js';
import { Email } from '../../domain/value-objects/Email.js';
import type { CreateUserDTO } from '../dto/CreateUserDTO.js';

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute = async (data: CreateUserDTO): Promise<User> => {
    // 1. Validação e criação de value Objects
    const email = Email.create(data.email);

    // 2. Regra de negócio (checar duplicidade)
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) throw new Error('User with this email already existis.');

    // 3. Lógica de segurança/criptorafia
    const passwordHash = 'hash_password(data.password)';

    // 4. Criaça da entidade de domínio
    const newUser = User.createNew(data.name, email, passwordHash, data.role);

    // 5. Persistência
    const createdUser = await this.userRepository.save(newUser);

    return createdUser;
  };
}
