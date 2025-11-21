import { Router } from 'express';
import { asyncHandler } from './../../utils/asyncHandler.js';
import { login } from './controllers/authController.js';

const router = Router();

router.post('/login', asyncHandler(login));

export default router;
