import { CreateUserUseCase } from '../../../application/use-cases/CreateUserUseCase.js';
import pool from '../../config/db.js';
import { SqlUserRepository } from '../../persistence/repositories/SqlUserRepository.js';
import { Router } from 'express';
import { UserController } from '../controllers/UserController.js';

const router = Router();

const userRepository = new SqlUserRepository(pool);
const createUserUseCase = new CreateUserUseCase(userRepository);
const userController = new UserController(createUserUseCase);

router.post('/', userController.create);

export default router;
