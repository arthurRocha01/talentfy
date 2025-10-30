import styles from './Form.module.css';
import { Input } from './Input.jsx';
import { Button } from './Button.jsx';

export const Form = ({ fields, title, buttonText, method, action }) => {
    return (
        <form method={method} action={action} className={styles.form}>
            {title && <h3>{title}</h3>}
            {fields.map((field, index) => (
                <Input
                    key={field.name || index} 
                    {...field}
                />
            ))}
            {buttonText && <Button text={buttonText} />}
        </form>
    );
}