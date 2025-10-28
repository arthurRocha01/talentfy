import styles from "./Navbar.module.css";
import { Logo } from "./Logo";
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
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#suporte">Suporte</a></li>
                    <li><a href="#contato">Contato</a></li>
                    <li><a href="">Seja um profissional</a></li>
                </ul>
            </div>
            <div className={styles.buttons}>
                <LoginButton />
                <RegisterButton />
            </div>
        </nav>
    );
}