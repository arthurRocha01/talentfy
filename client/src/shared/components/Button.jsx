import styles from './Button.module.css';

export const Button = ({ text, type = 'submit' }) => {
  return (
    <button className={styles.button} type={type}>
      {text}
    </button>
  );
};
