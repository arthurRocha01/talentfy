import express, { type Router } from 'express';
import * as userController from './controllers/userController.js';
import { authMiddleware } from './../auth/middlewares/authMiddleware.js';
import { asyncHandler } from '../../utils/asyncHandler.js';

const router: Router = express.Router();

router.get('/', authMiddleware, asyncHandler(userController.getAllUsers));

router.post('/', authMiddleware, asyncHandler(userController.createUser));

router.put('/:id', authMiddleware, asyncHandler(userController.updateUser));

router.delete('/:id', authMiddleware, asyncHandler(userController.deleteUser));

export default router;
