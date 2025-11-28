import type { CreateUserDTO } from '../../../application/dto/CreateUserDTO.js';
import type { UpdateUserDTO } from '../../../application/dto/UpdateUserDTO.js';
import { CreateUserUseCase } from '../../../application/use-cases/CreateUserUseCase.js';
import type { Request, Response } from 'express';
import type { UpdatedUserUseCase } from '../../../application/use-cases/UpdateUserUseCase.js';

export class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private updateUserUseCase: UpdatedUserUseCase,
  ) {}

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, email, password, role } = req.body;
      const dto: CreateUserDTO = { name, email, password, role };

      const user = await this.createUserUseCase.execute(dto);

      return res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        passwordHash: user.passwordHash,
        role: user.role,
      });
    } catch (error: any) {
      return res.status(400).json({
        message: error.message,
      });
    }
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id, name, email, password } = req.body;
      const dto: UpdateUserDTO = { id, name, email, password };

      const user = await this.updateUserUseCase.execute(dto);

      return res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        passwordHash: user.passwordHash,
        role: user.role,
      });
    } catch (error: any) {
      return res.status(400).json({
        message: error.message,
      });
    }
  };
}
