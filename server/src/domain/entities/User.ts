import type { Email } from '../value-objects/Email.js';

export type UserRole = 'CLIENT' | 'PROVIDER';

export class User {
  constructor(
    public readonly id: string | null,
    public name: string,
    public email: Email,
    public passwordHash: string,
    public readonly role: UserRole,
  ) {}

  public static createNew = (
    name: string,
    email: Email,
    passwordHash: string,
    role: UserRole,
  ): User => {
    return new User(null, name, email, passwordHash, role);
  };

  public static restore = (
    id: string,
    name: string,
    email: Email,
    passwordHash: string,
    role: UserRole,
  ): User => {
    return new User(id, name, email, passwordHash, role);
  };

  public changeName = (newName: string) => {
    this.name = newName;
  };

  public changeEmail = (newEmail: Email) => {
    this.email = newEmail;
  };

  public updatePasswordHash = (hash: string) => {
    this.passwordHash = hash;
  };
}
