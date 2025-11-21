import type { Request } from 'express';
import type { User } from '../../../utils/shared/types/index.js';

export interface AuthRequest extends Request {
    user?: User;
}