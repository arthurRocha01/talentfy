import express from 'express';
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use('/api/users', userRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

export default app;