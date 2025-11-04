import { useState } from 'react';
import { Form } from '../../shared/components/Form.jsx';
import { Navbar } from '../../shared/components/Navbar.jsx';
import { Input } from '../../shared/components/Input.jsx';
import { login } from '../../services/authServices.js';
import styles from './Login.module.css';

export const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(form);
      console.log(response);
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      alert('Login realizado com sucesso!');
    } catch (error) {
      console.error('Erro no login:', error.response?.data || error.message);
      alert('Usuário ou senha inválidos.');
    }
  };

  const inputFields = [
    { key: 'email', placeholder: 'Email', type: 'email' },
    { key: 'password', placeholder: 'Senha', type: 'password' },
  ];

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Form
          title="Faça o seu login!"
          buttonText="Entrar"
          handlerSubmit={handlerSubmit}
          inputs={inputFields.map(({ key, placeholder, type }) => (
            <Input
              key={key}
              type={type}
              placeholder={placeholder}
              value={form[key]}
              onChange={handleChange(key)}
            />
          ))}
        />
      </div>
    </>
  );
};
