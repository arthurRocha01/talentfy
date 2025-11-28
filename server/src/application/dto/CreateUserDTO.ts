export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  role: 'client' | 'provider';
}
