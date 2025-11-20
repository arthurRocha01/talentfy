import type { Request, Response, NextFunction } from 'express';
import colors from 'colors/safe.js'; // opcional, para cores no terminal

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const timestamp = new Date().toISOString();

  console.log(colors.red('=================== ERROR ==================='));
  console.log(colors.yellow(`Time: ${timestamp}`));
  console.log(colors.cyan(`Method: ${req.method} | URL: ${req.originalUrl}`));
  
  if (Object.keys(req.params).length) {
    console.log(colors.magenta(`Params: ${JSON.stringify(req.params, null, 2)}`));
  }

  if (Object.keys(req.body).length) {
    console.log(colors.blue(`Body: ${JSON.stringify(req.body, null, 2)}`));
  }

  console.log(colors.gray(`Stack: ${err.stack}`));
  console.log(colors.red('============================================'));

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};
