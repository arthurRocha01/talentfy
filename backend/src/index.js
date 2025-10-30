import express from 'express'
import cors from 'cors'
import meta from '../meta.js'
import userRoutes from './routes/userRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/users', userRoutes)

app.listen(meta.env.PORT, () =>
    console.log(`✅ Servidor rodando na porta ${meta.env.PORT}`)
)
