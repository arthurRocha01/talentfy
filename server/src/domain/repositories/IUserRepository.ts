import type { User } from '../entities/User.js';
import type { Email } from '../value-objects/Email.js';

export interface IUserRepository {
  save(user: User): Promise<void>;
  findByEmail(email: Email): Promise<User | null>;
}
