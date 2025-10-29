import styles from './Form.module.css';
import { Input } from './Input.jsx';
import { Button } from './Button.jsx';

export const Form = ({ type }) => {
    const isLogin = type === "login";

    const title = isLogin ? "Faça seu login!" : "Crie sua conta!";
    const button = isLogin ? "Entrar" : "Cadastrar";

    return (
        <div className={styles.container}>
            <h3>{title}</h3>

            <Input placeholder="Email" />
            <Input placeholder="Senha" type="password" />
            {!isLogin && <Input placeholder="Confirme a senha" type="password" />}

            <Button text={button} />
        </div>
    );
}