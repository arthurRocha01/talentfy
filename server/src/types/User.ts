export interface User {
  user_id: number;
  name: string;
  email: string;
  password_hash: string;
  user_type: string;
  created_at: Date;
}
