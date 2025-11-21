import type { Request, Response, NextFunction } from 'express';
import colors from 'colors/safe.js';

interface CustomError extends Error {
  statusCode?: number;
}

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const timestamp = new Date().toISOString();
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  // ================= LOG VERBOSE =================
  console.log(colors.red('=================== ERROR ==================='));
  console.log(colors.yellow(`Time: ${timestamp}`));
  console.log(
    colors.cyan(
      `Method: ${req.method} | URL: ${req.originalUrl} | IP: ${req.ip}`,
    ),
  );

  // Cabeçalhos
  console.log(colors.white(`Headers: ${JSON.stringify(req.headers, null, 2)}`));

  // Parâmetros
  if (req.params && Object.keys(req.params).length > 0) {
    console.log(
      colors.magenta(`Params: ${JSON.stringify(req.params, null, 2)}`),
    );
  }

  // Query
  if (req.query && Object.keys(req.query).length > 0) {
    console.log(colors.blue(`Query: ${JSON.stringify(req.query, null, 2)}`));
  }

  // Body
  if (req.body && Object.keys(req.body).length > 0) {
    console.log(colors.green(`Body: ${JSON.stringify(req.body, null, 2)}`));
  }

  // Histórico de middlewares (opcional)
  if ((req as any).middlewareHistory) {
    console.log(
      colors.cyan(
        `Middleware history: ${(req as any).middlewareHistory.join(' -> ')}`,
      ),
    );
  }

  // Stack trace
  if (err.stack) {
    console.log(colors.gray(`Stack Trace:\n${err.stack}`));
  }

  console.log(colors.red('============================================'));

  // ================= RESPONSE =================
  res.status(statusCode).json({
    success: false,
    message,
    timestamp,
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};
