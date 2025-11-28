import { User } from '../../domain/entities/User.js';
import type { IUserRepository } from '../../domain/repositories/IUserRepository.js';
import { Email } from '../../domain/value-objects/Email.js';
import type { UpdateUserDTO } from '../dto/UpdateUserDTO.js';

export class UpdatedUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  execute = async (data: UpdateUserDTO): Promise<User> => {
    const user = await this.userRepository.findById(data.id);
    if (!user) throw new Error('User não encontrado');

    if (data.name) user.changeName(data.name);
    if (data.email) user.changeEmail(Email.create(data.email));
    if (data.password) {
      const newHash = 'hash_password(data.password)';
      user.updatePasswordHash(newHash);
    }

    const updatedUser = await this.userRepository.update(user);
    return updatedUser;
  };
}
