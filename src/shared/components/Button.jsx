import styles from './Button.module.css';

export const Button = ({ text, onClick }) => {
  return (
    <div className="containerBtn">
      <button className={styles.button} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};