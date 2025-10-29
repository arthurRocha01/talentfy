import styles from './RegisterButton.module.css';

export const RegisterButton = () => {
    return (
        <button className={styles.button}>
            <p className={styles.text}>Cadastra-se</p>
        </button>
    );
}
