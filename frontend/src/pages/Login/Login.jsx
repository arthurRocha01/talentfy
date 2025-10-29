import { Form } from '../../shared/components/Form.jsx';
import { Navbar } from '../../shared/components/Navbar.jsx';
import styles from './Login.module.css';

export const Login = () => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <Form />
            </div>
        </>
    );
}