import { type RowDataPacket } from 'mysql2/promise';

export interface User extends RowDataPacket {
    id: number;
    name: string;
    email: string;
    password_hash: string;
    role: 'client' | 'provider' | 'admin';
    cadastred_at: string | Date;
} 