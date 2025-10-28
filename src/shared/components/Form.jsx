import styles from './Button.module.css';
import { Input } from './Input';
import { Button } from './Button';

export const Form = () => {
    return (
        <div className={styles.container}>
            <Input placeholder="Input..." />
            <Input placeholder="Input..." />
            <Button text="Enviar" />
        </div>

    );
}