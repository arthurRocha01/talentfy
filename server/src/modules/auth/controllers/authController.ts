import type { Request, Response } from "express";
import * as authService from '../services/authService.js'
import type { LoginResponseDTO } from '../dto/AuthResponseDTO.js';
import type { LoginRequestDTO } from "../dto/AuthRequestDTO.js";

export const login = async (
    req: Request<{}, {}, LoginRequestDTO>,
    res: Response<LoginResponseDTO>
): Promise<void> => {
    const result = await authService.login(req.body);
    res.status(200).json(result);
};