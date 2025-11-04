import styles from './Form.module.css';
import { Input } from './Input.jsx';
import { Button } from './Button.jsx';

export const Form = ({ method, action, title, inputs, buttonText, handleSubmit}) => {
  return (
    <form method={method} action={action} className={styles.form}>
      {title && <h3>{title}</h3>}
      {inputs}
      {buttonText && <Button text={buttonText} onClick={handleSubmit} />}
    </form>
  );
};
