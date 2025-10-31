import styles from './Register.module.css'
import { Navbar } from '../../shared/components/Navbar';
import { Form } from '../../shared/components/Form'

export const Register = () => {
    const fields = [
    { placeholder: "Nome", type: "text" },
    { placeholder: "Senha", type: "password" },
    { placeholder: "Confirmar senha", type: "password" }
];
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <Form fields={fields} title="Faça seu cadastro!" buttonText="Cadastrar"/>
            </div>
        </>
    );
}