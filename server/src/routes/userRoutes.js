import express from 'express';
import * as userController from '../controllers/userController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const router = express.Router();

router.get('/', authMiddleware, asyncHandler(userController.getAllUsers));
// router.get('/:id', authMiddleware, asyncHandler(userController.getUserById));
router.post('/', authMiddleware, asyncHandler(userController.createUser));
router.put('/:id', authMiddleware, asyncHandler(userController.updateUser));
router.delete('/:id', authMiddleware, asyncHandler(userController.deleteUser));

export default router;
