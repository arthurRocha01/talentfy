import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();
const app = express();
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
