import styles from './Button.module.css';

const Button = () => {
  return (
    <div className="containerBtn">
      <button className={styles.button}>Button</button>
    </div>
  );
};

export default Button;