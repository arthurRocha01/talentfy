import type { Email } from '../value-objects/Email.js';

export class User {
  constructor(
    public readonly name: string,
    public readonly email: Email,
    public readonly passwordHash: string,
    public readonly role: 'client' | 'provider',
  ) {}

  public static createNew = (
    name: string,
    email: Email,
    passwordHash: string,
    role: 'client' | 'provider',
  ): User => {
    return new User(name, email, passwordHash, role);
  };
}
