import express from 'express';
import * as userController from '../controllers/userController.js';
import { authMiddleware } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', authMiddleware, userController.getAllUsers);
router.get('/:id', authMiddleware, userController.getUserById);
router.post('/', authMiddleware, userController.createUser);
router.put('/:id', authMiddleware, userController.updateUser);
router.delete('/:id', authMiddleware, userController.deleteUser);

export default router;
