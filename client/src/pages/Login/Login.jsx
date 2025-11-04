import { Form } from '../../shared/components/Form.jsx';
import { Navbar } from '../../shared/components/Navbar.jsx';
import { Input } from '../../shared/components/Input.jsx';
import styles from './Login.module.css';
import { useState } from 'react';
import { login } from '../../services/authServices.js';

export const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(form);

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      alert('Login realizado com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Usuário ou senha inválidos.')
    }
  }
  
  const inputs = [
    <Input key='email' name='email' placeholder='Email' type='text' value={form.email} onChange={handleChange} />,
    <Input key='password' name='password' placeholder='Senha' type='text' value={form.password} onChange={handleChange} />
  ];
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Form inputs={inputs} title="Faça o seu login!" buttonText="Entrar" handleSubmit={handleSubmit} />
      </div>
    </>
  );
};
