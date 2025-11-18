import styles from './Logo.module.css';

export const Logo = ({ sizeFactor = 1.0 }) => {
  return (
    <div
      className={styles.containerLogo}
      style={{ '--size-factor': sizeFactor }}
    >
      <h1>
        TalentFy
      </h1>
    </div>
  );
};
