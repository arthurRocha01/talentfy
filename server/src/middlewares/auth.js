import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export const authMiddleware = (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res
      .status(401)
      .send({ error: 'Acesso negado. Nenhum token fornecido.' });

  const parts = authHeader.split(' ');
  const [scheme, token] = parts;
  if (parts.length !== 2 || !/^Bearer$/i.test(scheme)) {
    return res.status(401).send({
      error: 'Token mal formatado. Formato esperado: Bearer <token>.',
    });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ error: 'Token inválido ou expirado.' });
    }

    req.userId = decoded.id;

    return next();
  });
};
