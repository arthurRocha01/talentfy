import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as userController from '../controllers/userController.js';

const JWT_SECRET = process.env.JWT_SECRET;

export async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await userController.getUserByEmail(email);
    if (!user)
      return res.status(401).send({ message: 'Credenciais inválidas.' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).send({ message: 'Credenciais inválidas.' });

    const payload = {
      id: user.id,
      email: user.email,
    };
    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: '1d',
    });

    res.send({
      token: token,
      user: { id: user.id, email: user.email },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Erro no servidor ao logar.' });
  }
}
