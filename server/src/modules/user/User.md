# API Users

**Base URL:** `http://localhost:5000/users`  

Todos os endpoints utilizam **JSON** e retornam objetos JSON.

---

## 1️⃣ Listar todos os usuários

**Endpoint:** `GET /users`  
**Descrição:** Retorna todos os usuários cadastrados.

**Exemplo `curl`:**
```bash
curl -X GET http://localhost:5000/users
```

**Resposta (200 OK):**
```json
[
  {
    "id": 1,
    "name": "Arthur",
    "email": "arthur@example.com",
    "role": "cliente",
    "created_at": "2025-11-20T12:00:00Z"
  }
]
```

---

## 2️⃣ Criar usuário

**Endpoint:** `POST /users`  
**Descrição:** Cria um novo usuário. A senha será armazenada em hash.

**Body (JSON):**
```json
{
  "name": "Arthur",
  "email": "arthur@example.com",
  "password": "123456",
  "role": "cliente"
}
```

> ⚠️ O campo `role` aceita apenas: `'admin'`, `'prestador'`, `'cliente'`.

**Exemplo `curl`:**
```bash
curl -X POST http://localhost:5000/users \
-H "Content-Type: application/json" \
-d '{
    "name": "Arthur",
    "email": "arthur@example.com",
    "password": "123456",
    "role": "client"
}'
```

**Resposta (201 Created):**
```json
{
  "message": "Usuário criado com sucesso"
}
```

---

## 3️⃣ Atualizar usuário

**Endpoint:** `PUT /users/:id`  
**Descrição:** Atualiza os dados de um usuário existente.

**Body (JSON):**
```json
{
  "name": "Arthur Updated",
  "email": "arthur.new@example.com",
  "password": "654321",
  "role": "prestador"
}
```

**Exemplo `curl`:**
```bash
curl -X PUT http://localhost:5000/users/1 \
-H "Content-Type: application/json" \
-d '{
    "name": "Arthur Updated",
    "email": "arthur.new@example.com",
    "password": "654321",
    "role": "provider"
}'
```

**Resposta (200 OK):**
```json
{
  "message": "Usuário atualizado com sucesso"
}
```

---

## 4️⃣ Deletar usuário

**Endpoint:** `DELETE /users/:id`  
**Descrição:** Remove um usuário do sistema.

**Exemplo `curl`:**
```bash
curl -X DELETE http://localhost:5000/users/1
```

**Resposta (200 OK):**
```json
{
  "message": "Usuário deletado com sucesso"
}
```

---

## Dicas Extras

- Para depuração detalhada, use `-v` no curl:  
```bash
curl -v -X GET http://localhost:5000/users
```

- Para autenticação futura, adicione header `Authorization`:  
```bash
-H "Authorization: Bearer <TOKEN>"
```

- Para salvar a resposta em arquivo:  
```bash
curl -o resposta.json http://localhost:5000/users
```
 