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
    tipo_usuario: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('khkjhkjh');
    if (form.senha !== form.confirmarSenha) {
      console.log('As senhas não conferem!');
      return;
    }

    try {
      await createUser(form);
      console.log(`Usuário ${form.nome} criado com sucesso!`);
      setForm({
        nome: form.nome,
        email: form.email,
        senha: form.senha,
        tipo_usuario: form.tipo_usuario,
      });
    } catch (error) {
      console.error(
        'Erro ao salvar usuário:',
        error.response?.data || error.message
      );
      console.log('Erro ao salvar usuário');
    }
  };

  const inputs = [
    <Input
      placeholder="Nome"
      type="text"
      value={form.nome}
      onChange={(e) => setForm({ ...form, nome: e.target.value })}
    />,
    <Input
      placeholder="Senha"
      type="text"
      value={form.senha}
      onChange={(e) => setForm({ ...form, senha: e.target.value })}
    />,
    <Input
      placeholder="Confirmar senha"
      type="text"
      value={form.confirmarSenha}
      onChange={(e) => setForm({ ...form, confirmarSenha: e.target.value })}
    />,
  ];
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Form
          inputs={inputs}
          title="Faça seu cadastro!"
          buttonText="Cadastrar"
          handlerSubmit={handleSubmit}
        />
      </div>
    </>
  );
};
