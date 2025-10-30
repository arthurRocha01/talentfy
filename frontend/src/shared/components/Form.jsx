import styles from './Form.module.css';
import { Input } from './Input.jsx';
import { Button } from './Button.jsx';

export const Form = ({ type }) => {
    const isLogin = type === "login";
    const isRegister = type === "register";
    const isRegisterProfessional = type === "registerProfessional";

    const titles = {
        login: "Faça seu login",
        register: "Crie sua conta",
        registerProfessional: "Cadastre-se e se torne um Profissional"
    };
    const buttons = {
        login: "Entrar",
        register: "Cadastrar",
        registerProfessional: "Finalizar Cadastro"
    };

    const title = titles[type];
    const button = buttons[type];

    return (
        <div className={styles.container}>
            <h3>{title}</h3>

           { isLogin && (
            <>
                <Input label="Email" type="email" name="email" placeholder="Digite seu email" />
                <Input label="Senha" type="password" name="password" placeholder="Digite sua senha" />
            </>
           )}

           { isRegister && (
            <>
                <Input label="Nome Completo" type="text" name="name" placeholder="Digite seu nome completo" />
                <Input label="CPF" type="text" name="cpf" placeholder="Digite seu CPF" />
                <Input label="Email" type="email" name="email" placeholder="Digite seu email" />
                <Input label="Telefone" type="tel" name="phone" placeholder="Digite seu telefone" />
                <Input label="CEP" type="text" name="cep" placeholder="Digite seu CEP" />
                <Input label="Senha" type="password" name="password" placeholder="Digite sua senha" />
            </>
           )}

           { isRegisterProfessional && (
            <>
                <Input label="Nome Completo" type="text" name="name" placeholder="Digite seu nome completo" />
                <Input label="CPF" type="text" name="cpf" placeholder="Digite seu CPF" />
                <Input label="Email" type="email" name="email" placeholder="Digite seu email" />
                <Input label="Telefone" type="tel" name="phone" placeholder="Digite seu telefone" />
                <Input label="CEP" type="text" name="cep" placeholder="Digite seu CEP" />
                <Input label="Profissão" type="text" name="profession" placeholder="Digite sua profissão" />
                <Input label="Descrição" type="text" name="description" placeholder="Descreva suas habilidades e experiências" />
                <Input label="LinkedIn" type="url" name="linkedin" placeholder="Digite sua URL do LinkedIn" />
                <Input label="Senha" type="password" name="password" placeholder="Digite sua senha" />
            </>
           )}

            <Button text={button} />
        </div>
    );
}