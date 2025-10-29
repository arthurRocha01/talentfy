import styles from "./LoginButton.module.css";

export const LoginButton = () => {
    return (
        <button className={styles.button}>
            <p className={styles.text}>Entrar</p>
            <i class="bi bi-box-arrow-in-right"></i>
        </button>
    );
}