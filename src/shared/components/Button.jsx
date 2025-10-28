import styles from './Button.module.css';

export const Button = ({ text, onClick }) => {
<<<<<<< HEAD
  return (
    <div className="containerBtn">
      <button className={styles.button} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
=======
    return (
        <button className={styles.button} onClick={onClick}>
            {text}
        </button>
    );  
}
>>>>>>> 221f97558ab968aecd0722f73456aa28acfef4ed
