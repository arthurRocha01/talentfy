import { CreateUserUseCase } from '../../../application/use-cases/CreateUserUseCase.js';
import pool from '../../config/db.js';
import { SqlUserRepository } from '../../persistence/repositories/SqlUserRepository.js';
import { Router } from 'express';
import { UserController } from '../controllers/UserController.js';
import { UpdatedUserUseCase } from '../../../application/use-cases/UpdateUserUseCase.js';

const router = Router();

const userRepository = new SqlUserRepository(pool);
const createUserUseCase = new CreateUserUseCase(userRepository);
const updateUserUseCase = new UpdatedUserUseCase(userRepository);
const userController = new UserController(createUserUseCase, updateUserUseCase);

router.post('/', userController.create);
router.put('/', userController.update);

export default router;
