import app from './app.js';

const { PORT } = process.env;

if (!PORT) {
    throw new Error('A variável de ambiente PORT não foi definida.');
};

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});