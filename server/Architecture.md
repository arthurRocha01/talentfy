# Arquitetura MSDA – Documentação Técnica Completa com Exemplos

## 1. Visão Geral

A **Modular Service-Driven Architecture (MSDA)** organiza a API em módulos totalmente independentes, cada um contendo:

- **Domain** – regras de negócio puras
- **Application** – casos de uso
- **Infrastructure** – implementações concretas
- **Interface** – controladores, rotas e validação HTTP

A arquitetura foi projetada para manutenção simples, onboarding rápido e decisões claras sobre onde colocar cada parte do código.

---

# 2. Estrutura Geral dos Módulos

```
src/
  modules/
    user/
      domain/
      application/
      infrastructure/
      interface/
  shared/
main.ts
```

Cada módulo segue esse padrão.

---

# 3. Domain Layer

A camada de domínio contém **a regra de negócio**, totalmente isolada de banco, HTTP, libs externas etc.

### Estrutura:

```
domain/
  entities/
  value-objects/
  repositories/
  services/
```

---

## 3.1 Entities (Entidades)

Representam conceitos centrais do sistema.

### Exemplo — User Entity

```ts
// domain/entities/User.ts
export class User {
  constructor(
    readonly id: string,
    public name: string,
    public email: string,
  ) {}

  updateName(newName: string) {
    if (!newName.trim()) {
      throw new Error('Nome inválido');
    }
    this.name = newName;
  }
}
```

---

## 3.2 Value Objects

Representam valores imutáveis com regras internas.

### Exemplo — Email VO

```ts
export class Email {
  private readonly value: string;

  constructor(email: string) {
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      throw new Error('Email inválido');
    }
    this.value = email;
  }

  getValue() {
    return this.value;
  }
}
```

---

## 3.3 Repositories (contratos)

A API não conhece detalhes de banco de dados. O domínio define **o contrato**.

### Exemplo — IUserRepository

```ts
export interface IUserRepository {
  create(user: User): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
}
```

---

## 3.4 Domain Services

Regras que não pertencem exclusivamente a uma entidade.

### Exemplo — Service de validação de email duplicado

```ts
export class UserDomainService {
  constructor(private repo: IUserRepository) {}

  async ensureEmailIsUnique(email: string) {
    const user = await this.repo.findByEmail(email);
    if (user) throw new Error('Email já está em uso');
  }
}
```

---

# 4. Application Layer

Camada que coordena as regras do domínio.

Estrutura:

```
application/
  dto/
  use-cases/
```

---

## 4.1 DTO (Data Transfer Object)

Simples objetos de entrada/saída.

### Exemplo:

```ts
export interface CreateUserDTO {
  name: string;
  email: string;
}
```

---

## 4.2 Use Cases

Um use-case executa uma ação do sistema, SEM conhecer HTTP ou banco diretamente.

### Exemplo — CreateUserUseCase

```ts
import { User } from '../../domain/entities/User.js';
import { IUserRepository } from '../../domain/repositories/IUserRepository.js';
import { Email } from '../../domain/value-objects/Email.js';

export class CreateUserUseCase {
  constructor(private repo: IUserRepository) {}

  async execute(data: { name: string; email: string }) {
    const email = new Email(data.email);

    const user = new User(crypto.randomUUID(), data.name, email.getValue());

    await this.repo.create(user);

    return user;
  }
}
```

---

# 5. Infrastructure Layer

Aqui ficam implementações reais:

- banco de dados
- provedores externos
- serviços auxiliares

Estrutura:

```
infrastructure/
  repositories/
  providers/
  config/
```

---

## 5.1 Implementação do Repositório

### Exemplo — PrismaUserRepository

```ts
import { prisma } from '../../../shared/config/prisma.js';
import { IUserRepository } from '../../domain/repositories/IUserRepository.js';
import { User } from '../../domain/entities/User.js';

export class PrismaUserRepository implements IUserRepository {
  async create(user: User) {
    await prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  }

  async findByEmail(email: string) {
    const data = await prisma.user.findUnique({ where: { email } });
    if (!data) return null;
    return new User(data.id, data.name, data.email);
  }
}
```

---

# 6. Interface Layer

É a camada mais externa, lidando com:

- HTTP
- Express
- Validação da entrada
- Controllers
- Respostas da API

Estrutura:

```
interface/
  controllers/
  routes/
  validators/
  mappers/
```

---

## 6.1 Controller

Recebe HTTP, chama o caso de uso e envia resposta.

### Exemplo — UserController

```ts
import { CreateUserUseCase } from '../../application/use-cases/CreateUserUseCase.js';

export class UserController {
  constructor(private createUser: CreateUserUseCase) {}

  async create(req, res) {
    const { name, email } = req.body;

    const result = await this.createUser.execute({ name, email });

    return res.status(201).json(result);
  }
}
```

---

## 6.2 Rotas

```ts
import { Router } from 'express';
import { UserController } from '../controllers/UserController.js';
import { PrismaUserRepository } from '../../infrastructure/repositories/PrismaUserRepository.js';
import { CreateUserUseCase } from '../../application/use-cases/CreateUserUseCase.js';

const repo = new PrismaUserRepository();
const createUserUseCase = new CreateUserUseCase(repo);
const controller = new UserController(createUserUseCase);

export const userRoutes = Router();

userRoutes.post('/', (req, res) => controller.create(req, res));
```

---

# 7. Fluxo (COM CÓDIGO)

1. Rota `/user` recebe POST.
2. Controller chama `createUserUseCase.execute()`
3. DTO é validado e enviado ao caso de uso.
4. Use case cria entidades e chama repositório (contrato).
5. Repositório concreto salva no banco.
6. Controller envia resposta.

Diagrama textual:

```
HTTP → Controller → Use Case → Entity + VO → Repository Interface → Repository Implementation → DB
```

---

# 8. Boas Práticas Comuns no Projeto

✔ Cada módulo isolado  
✔ Domain nunca depende de infra  
✔ Application não conhece HTTP  
✔ Interface não conhece banco  
✔ Repositórios só dependem de contratos  
✔ Use cases sempre são classes

---

# 9. Conclusão

Esta documentação ilustra claramente como funciona cada camada, como elas se integram e como os desenvolvedores devem navegar e expandir a arquitetura MSDA.

Ela serve como referência oficial para onboarding, manutenção, evolução do projeto e criação de novos módulos.
