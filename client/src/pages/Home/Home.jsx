import styles from './Home.module.css';

import { Navbar } from "../../shared/components/Navbar";
import { Main } from "./components/Main";

export const Home = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <Main />
        </div>
    );
}