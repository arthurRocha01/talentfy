import styles from './Logo.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Logo = () => {
  return (
    <div className={styles.containerLogo}>
      <i class="bi bi-gear-fill"></i>
      <i class="bi bi-wrench"></i>
      <h1>Talent<span>Fy</span></h1>
    </div>
  );
};