import styles from './Register.module.css'
import { Navbar } from '../../shared/components/Navbar';
import { Form } from '../../shared/components/Form'

export const Register = () => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <Form type="register"/>
            </div>
        </>
    );
}