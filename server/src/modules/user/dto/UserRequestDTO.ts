export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface updateUserDTO {
  name?: string;
  email?: string;
  role?: string;
  password?: string;
}
