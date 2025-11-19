import express from 'express';
import * as userController from '../controllers/userController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { asyncHandler } from '../utils/asyncHandler';

const router = express.Router();

router.get('/', authMiddleware, asyncHandler(userController.getAllUsers));
// router.get('/:id', authMiddleware, asyncHandler(userController.getUserById));
router.post('/', authMiddleware, asyncHandler(userController.createUser));
router.put('/:id', authMiddleware, asyncHandler(userController.updateUser));
router.delete('/:id', authMiddleware, asyncHandler(userController.deleteUser));

export default router;
