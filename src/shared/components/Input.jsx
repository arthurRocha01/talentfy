import styles from './Input.module.css';

export const Input = ({ placeholder, type = "text", onClick, onChange, value }) => {
    return (
        <div className={styles.container}>
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
