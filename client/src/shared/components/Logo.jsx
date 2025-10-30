import styles from './Logo.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Logo = ({ sizeFactor = 1.0 }) => {
  return (
    <div 
    className={styles.containerLogo}
    style={{ '--size-factor': sizeFactor }}
    >
      <i className="bi bi-gear-fill"></i>
      <i className="bi bi-wrench"></i>
      <h1>Talent<span>Fy</span></h1>
    </div>
  );
};