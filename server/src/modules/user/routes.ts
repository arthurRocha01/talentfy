import express, { type Router } from 'express';
import * as userController from './controllers/userController.js';
// import { authMiddleware } from '../middlewares/authMiddleware.js';
import { asyncHandler } from '../../utils/asyncHandler.js';

const router: Router = express.Router();

router.get(
    '/',
    asyncHandler(userController.getAllUsers)
);

router.post(
    '/',
    asyncHandler(userController.createUser)
);

router.put(
    '/:id',
    asyncHandler(userController.updateUser)
);

router.delete(
    '/:id',
    asyncHandler(userController.deleteUser)
);

export default router;
