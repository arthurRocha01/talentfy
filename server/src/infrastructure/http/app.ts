import express, { type Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
);

app.use('/users', userRoutes);

export default app;
