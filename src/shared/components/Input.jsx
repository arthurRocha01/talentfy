import styles from './Input.module.css';

export const Input = ({ text, placeholder, type = "text", onClick, onChange, value }) => {
    return (
        <div className={styles.container}>
            {text && <label className={styles.label}>{text}</label>}
            <input
                className={styles.input}
                type={type}
                placeholder={placeholder}
                onClick={onClick}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};
