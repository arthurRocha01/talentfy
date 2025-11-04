import { useState } from 'react';
import { createUser } from '../../services/userServices.js';
import styles from './Register.module.css';
import { Navbar } from '../../shared/components/Navbar';
import { Form } from '../../shared/components/Form';
import { Input } from '../../shared/components/Input.jsx';

export const Register = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    tipo_usuario: 'cliente',
  });

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const { nome, email, senha, confirmarSenha, tipo_usuario } = form;
    if (senha !== confirmarSenha) return console.log('As senhas não conferem!');

    try {
      const response = await createUser({ nome, email, senha, tipo_usuario });
      console.log(`Usuário criado: ${response}`);
      setForm({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: '',
        tipo_usuario: 'cliente',
      });
    } catch (error) {
      console.error(
        'Erro ao salvar usuário:',
        error.response?.data || error.message
      );
    }
  };

  const inputs = [
    { key: 'nome', placeholder: 'Nome de usuário', type: 'text' },
    { key: 'email', placeholder: 'Email', type: 'email' },
    { key: 'senha', placeholder: 'Senha', type: 'password' },
    { key: 'confirmarSenha', placeholder: 'Confirmar senha', type: 'password' },
  ];

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Form
          title="Faça seu cadastro!"
          buttonText="Cadastrar"
          handlerSubmit={handlerSubmit}
          inputs={inputs.map(({ key, placeholder, type }) => (
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
