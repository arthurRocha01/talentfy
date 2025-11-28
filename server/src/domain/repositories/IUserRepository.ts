import type { User } from '../entities/User.js';
import type { Email } from '../value-objects/Email.js';

export interface IUserRepository {
  save(user: User): Promise<User>;
  findByEmail(email: Email): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  update(user: User): Promise<User>;
}
