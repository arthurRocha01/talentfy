import express, { type Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './modules/user/routes.js';
// import authRoutes from './routes/authRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use(
    cors({
        origin: 'http://localhost:5173'
    }),
);

app.use('/users', userRoutes);
// app.use('/api/auth', authRoutes);

app.use(errorHandler);

export default app;