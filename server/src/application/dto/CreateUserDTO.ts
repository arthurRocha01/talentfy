export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  role: 'CLIENT' | 'PROVIDER';
}
