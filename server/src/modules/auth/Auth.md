# 🚀 Documentação da API

**Base URL:** http://localhost:5000

---

## 1. 🔑 Autenticação

### POST /auth/login

**Descrição:** Autentica um usuário existente e retorna um _JSON Web Token_ (JWT).

#### 📝 Requisição

| Header       | Valor de Exemplo | Observações                                                   |
| :----------- | :--------------- | :------------------------------------------------------------ |
| Content-Type | application/json | Necessário para enviar o corpo da requisição em formato JSON. |

**Corpo da Requisição (JSON):**

{
"email": "usuario@example.com",
"password": "123456"
}

#### ✅ Resposta de Sucesso (Status 200 OK)

**Corpo da Resposta (JSON):**

{
"token": "<JWT_TOKEN_AQUI>"
}

#### ❌ Resposta de Erro

| Status           | Corpo da Resposta (JSON)                  | Descrição               |
| :--------------- | :---------------------------------------- | :---------------------- |
| 401 Unauthorized | {"message": "Usuário ou senha inválidos"} | Credenciais incorretas. |

> **⚠️ Observação:** O token deve ser usado no header Authorization para rotas protegidas.

---

## 2. 👤 Usuários (Rotas Protegidas)

### GET /users

**Descrição:** Retorna uma lista de todos os usuários cadastrados. **Requer autenticação.**

#### 📝 Requisição

| Header        | Valor de Exemplo | Observações                 |
| :------------ | :--------------- | :-------------------------- |
| Authorization | Bearer <TOKEN>   | Substitua <TOKEN> pelo JWT. |

#### ✅ Resposta de Sucesso (Status 200 OK)

**Corpo da Resposta (JSON):**

[
{
"id": "1",
"name": "Arthur",
"email": "arthur@example.com",
"role": "client"
},
// ...
]

#### ❌ Resposta de Erro

| Status           | Corpo da Resposta (JSON)                  | Descrição                     |
| :--------------- | :---------------------------------------- | :---------------------------- |
| 401 Unauthorized | {"message": "Token não fornecido"}        | Header Authorization ausente. |
| 401 Unauthorized | {"message": "Token inválido ou expirado"} | JWT inválido.                 |

---

## ⚙️ Observações Gerais da API

- **Rotas Protegidas:** Exigem Authorization: Bearer <TOKEN>.
- **Tratamento de Erros:** Status HTTP apropriado e mensagens claras (ex: 401 Unauthorized).
- **Middleware:** Autenticação valida o token e anexa o usuário à request.
- **Assincronia:** Uso de asyncHandler para tratamento de erros.
