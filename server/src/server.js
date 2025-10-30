import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/users', userRoutes)

app.listen(process.env.PORT, () =>
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
)