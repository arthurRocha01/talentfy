import express from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import * as authControllers from '../controllers/authController';

const router = express.Router();

router.post('/login', asyncHandler(authControllers.login));

export default router;
