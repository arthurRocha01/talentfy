import styles from './RegisterProfessional.module.css';
import { Navbar } from '../../shared/components/Navbar';
import { Form } from '../../shared/components/Form';

export const RegisterProfessional = () => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <Form type="registerProfessional" />
            </div>
        </>
    );
}