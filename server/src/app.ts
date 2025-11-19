import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import { errorHandler } from './middlewares/errorHandler';

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.use(errorHandler);

export default app;
