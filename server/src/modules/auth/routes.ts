import express, { Router } from 'express';
import { asyncHandler } from '../../utils/asyncHandler.js';
import * as authController from './controllers/authController.js';

const router: Router = express.Router();

router.post('/login', asyncHandler(authController.login));

export default router;
