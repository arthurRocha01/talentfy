export class Email {
  private constructor(public readonly value: string) {}

  public static create = (email: string): Email => {
    if (!this.isValid(email)) throw new Error('Invalid email address.');
    return new Email(email.toLowerCase());
  };

  private static isValid = (email: string): boolean => {
    return /\S+@\S+\.\S+/.test(email);
  };
}
