import styles from './Form.module.css';
import { Input } from './Input.jsx';
import { Button } from './Button.jsx';

export const Form = () => {
    return (
        <div className={styles.container}>
            <h3>Faça o seu login!</h3>
            <Input placeholder="Email" />
            <Input placeholder="Senha" type="password" />
            <Button text="Enviar" />
        </div>
    );
}