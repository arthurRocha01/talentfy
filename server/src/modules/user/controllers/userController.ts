import type { Request, Response } from 'express';
import * as userService from '../services/userServices.js';
import type * as UserRequestDTO from '../dto/UserRequestDTO.js';

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await userService.listUsers();
  return res.json(users);
};

export const createUser = async (
  req: Request<{}, {}, UserRequestDTO.CreateUserDTO>,
  res: Response,
) => {
  const result = await userService.createUser(req.body);
  return res.status(201).json(result);
};

export const updateUser = async (
  req: Request<{ id?: string }, {}, UserRequestDTO.updateUserDTO>,
  res: Response,
) => {
  const id = Number(req.params.id);
  const result = await userService.updateUser(id, req.body);

  return res.status(201).json(result);
};

export const deleteUser = async (
  req: Request<{ id?: string }>,
  res: Response,
) => {
  const id = Number(req.params.id);
  const result = await userService.deleteUser(id);

  return res.status(201).json(result);
};
