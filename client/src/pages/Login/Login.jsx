import { Form } from '../../shared/components/Form.jsx';
import { Navbar } from '../../shared/components/Navbar.jsx';
import styles from './Login.module.css';

export const Login = () => {
  const fields = [
    { name: 'username', placeholder: 'Nome', type: 'text' },
    { name: 'password', placeholder: 'Senha', type: 'password' },
  ];
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Form fields={fields} title="Faça o seu login!" buttonText="Entrar" />
      </div>
    </>
  );
};
