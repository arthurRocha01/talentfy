import type { CreateUserDTO } from '../../../application/dto/CreateUserDTO.js';
import { CreateUserUseCase } from '../../../application/use-cases/CreateUserUseCase.js';
import type { Request, Response } from 'express';

export class UserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, email, password, role } = req.body;
      const dto: CreateUserDTO = { name, email, password, role };

      const user = await this.createUserUseCase.execute(dto);

      return res.status(201).json({
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
