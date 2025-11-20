import type { Request, Response, NextFunction } from 'express';
import colors from 'colors/safe.js';

interface CustomError extends Error {
  statusCode?: number;
}

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const timestamp = new Date().toISOString();
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  // ===== LOG DETALHADO NO TERMINAL =====
  console.log(colors.red('=================== ERROR ==================='));
  console.log(colors.yellow(`Time: ${timestamp}`));
  console.log(colors.cyan(`Method: ${req.method} | URL: ${req.originalUrl} | IP: ${req.ip}`));

  if (Object.keys(req.params).length) {
    console.log(colors.magenta(`Params: ${JSON.stringify(req.params, null, 2)}`));
  }

  if (Object.keys(req.query).length) {
    console.log(colors.blue(`Query: ${JSON.stringify(req.query, null, 2)}`));
  }

  if (Object.keys(req.body).length) {
    console.log(colors.green(`Body: ${JSON.stringify(req.body, null, 2)}`));
  }

  console.log(colors.gray(`Stack: ${err.stack}`));
  console.log(colors.red('============================================'));

  // ===== RESPOSTA PARA O CLIENTE =====
  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};
