# API Auth

**Base URL:** http://localhost:5000/auth  
Todos os endpoints utilizam JSON e retornam objetos JSON.

-------------------------------------------------------------

## 🔐 API Authentication

A API de autenticação permite realizar login e gerar tokens JWT.  
Cada requisição autentica o usuário com email e senha, retornando um token válido pelo tempo configurado no .env.

-------------------------------------------------------------

## 1) Login

**Endpoint:** POST /auth/login  
**Descrição:** Autentica um usuário pelo email e senha. Retorna um token JWT e os dados essenciais do usuário.

### Body (JSON):
{
  "email": "arthur@example.com",
  "password": "123456"
}

### Exemplo curl:
curl -X POST http://localhost:5000/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email": "arthur@example.com",
  "password": "123456"
}'

### Resposta (200 OK):
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "nome": "Arthur",
    "tipo": "cliente"
  }
}

### Erros:
**400 – Campos ausentes:**
{
  "message": "Email e senha são obrigatórios"
}

**401 – Credenciais inválidas:**
{
  "message": "Usuário ou credenciais inválidas"
}

-------------------------------------------------------------

## 🔑 Como usar o token JWT

Após o login, o cliente deve enviar o token em todas as requisições protegidas:

Authorization: Bearer <TOKEN>

### Exemplo curl com token:
curl -X GET http://localhost:5000/users \
-H "Authorization: Bearer <TOKEN>"

-------------------------------------------------------------

## 🧩 Resumo Técnico – Estrutura do Auth

**Controller** → recebe req/res e valida body.  
**Service** → autentica, compara hash, gera token.  
**Repository** → busca usuário no banco.  
**Utils** → hashing e JWT.

### Fluxo:
Request -> AuthController.login -> AuthService.login -> UserRepository.findByEmail -> bcrypt.compare -> gerar JWT -> Response

-------------------------------------------------------------

## 📦 Dependências utilizadas
- bcrypt → comparar senha com hash  
- jsonwebtoken → gerar tokens JWT  
- dotenv → variáveis ambiente  
- mysql2/promise → conexão MySQL  

-------------------------------------------------------------

## 🌎 Variáveis necessárias no .env:

JWT_SECRET=umseguroqualquer  
JWT_EXPIRES_IN=1d

-------------------------------------------------------------

## 🧪 Exemplo completo de resposta após login:

{
  "token": "j1h2k3h12kjh12kj3...",
  "user": {
    "id": 7,
    "nome": "Marcos",
    "tipo": "admin"
  }
}

-------------------------------------------------------------

## 🧪 Como testar no Thunder Client / Postman:

POST:  
http://localhost:5000/auth/login

Body JSON:  
{
  "email": "teste@teste.com",
  "password": "123"
}

Depois adicionar header:  
Authorization: Bearer <TOKEN>

-------------------------------------------------------------

## 📁 Estrutura dos Arquivos do Auth

auth/  
 ├── controllers/  
 │    └── authController.js  
 ├── services/  
 │    └── authService.js  
 ├── repositories/  
 │    └── authRepository.js  
 ├── utils/  
 │    └── jwt.js  
 │    └── hash.js  

-------------------------------------------------------------

## ⚠️ Exemplo de erro (senha incorreta):

{
  "message": "Usuário ou credenciais inválidas"
}

-------------------------------------------------------------

## 👤 Exemplo de usuário encontrado no banco:

{
  "id_usuario": 3,
  "nome": "Lucas",
  "email": "lucas@gmail.com",
  "senha_hash": "$2b$10$...",
  "tipo_usuario": "cliente"
}
