import styles from './Navbar.module.css';
import { Logo } from './Logo';
import { LoginButton } from '../../features/auth/components/LoginButton';
import { RegisterButton } from '../../features/auth/components/RegisterButton';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Logo sizeFactor={0.5} />
      </div>
      <div className={styles.options}>
        <ul>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Talentos</a>
          </li>
          <li>
            <a href="#">Feed</a>
          </li>
        </ul>
      </div>
      <div className={styles.searchBar}>
        searchBar
      </div>
      <div className={styles.buttons}>
        <LoginButton />
      </div>
    </nav>
  );
};
