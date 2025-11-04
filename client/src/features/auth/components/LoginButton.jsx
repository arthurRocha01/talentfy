import styles from './LoginButton.module.css';

export const LoginButton = () => {
  return (
    <button className={styles.button}>
      <p className={styles.text}>Entrar</p>
      <i className="bi bi-box-arrow-in-right"></i>
    </button>
  );
};
