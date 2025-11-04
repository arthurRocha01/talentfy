import styles from './Form.module.css';
import { Button } from './Button.jsx';

export const Form = ({
  method,
  action,
  title,
  inputs,
  buttonText,
  handlerSubmit,
}) => {
  return (
    <form
      method={method}
      action={action}
      className={styles.form}
      onSubmit={handlerSubmit}
    >
      {title && <h3>{title}</h3>}
      {inputs}
      {buttonText && <Button text={buttonText} />}
    </form>
  );
};
