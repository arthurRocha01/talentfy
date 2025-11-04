import express from 'express';
import { asyncHandler } from '../utils/asyncHandler.js';
import * as authControllers from '../controllers/authController.js';

const router = express.Router();

router.post('/login', asyncHandler(authControllers.login));

export default router;
