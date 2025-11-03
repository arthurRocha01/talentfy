import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRooutes.js';

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

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});

export default app;
