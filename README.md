# 💰 Controle de Despesas Pessoais - Backend

API REST desenvolvida em **Node.js com Express** para gerenciamento de despesas pessoais, permitindo operações completas de CRUD (Create, Read, Update e Delete).

---

## 📌 Objetivo

O projeto tem como objetivo fornecer uma API simples e eficiente para controle de despesas, permitindo:

* Cadastro de despesas
* Listagem de registros
* Busca por ID
* Atualização de dados
* Exclusão de despesas
* Filtros por classificação

---

## 🚀 Tecnologias Utilizadas

* Node.js
* Express
* JavaScript (ES6+)
* CORS
* Arquitetura MVC

---

## ⚠️ Persistência de Dados

Atualmente, os dados da aplicação são armazenados **em memória**, utilizando uma lista (array).

---

## 📁 Estrutura do Projeto

```
src/
│
├── controller/     # Camada responsável por lidar com requisição e resposta
├── service/        # Regras de negócio da aplicação
├── model/          # Estrutura de dados (em memória)
├── routes/         # Definição das rotas da API
├── app.js          # Configuração da aplicação
└── server.js       # Inicialização do servidor
```

---

## 🧠 Arquitetura MVC

O projeto segue o padrão **MVC (Model-Controller-Service)**:

### 🔹 Model

Responsável por armazenar os dados (array em memória).

### 🔹 Service

Contém a lógica de negócio:

* Manipulação de dados
* Regras de validação
* Lançamento de erros

### 🔹 Controller

Responsável por:

* Receber requisições HTTP
* Chamar o service
* Retornar respostas (status + JSON)

### 🔹 Routes

Define os endpoints da API e conecta com os controllers.

---

## 🔄 Fluxo da aplicação

```
Request → Routes → Controller → Service → Model → Response
```

---

## 🌐 Tratamento de CORS

A API utiliza o middleware **CORS** para permitir requisições de diferentes origens:

```js
app.use(cors());
```

Isso é essencial para integração com frontends (React, HTML, etc).

---

## ⚠️ Tratamento de erros

A aplicação utiliza:

### ✔️ Try/Catch nos controllers

Para capturar erros de execução:

```js
try {
    // lógica
} catch (error) {
    (error);
}
```

---

### ✔️ Benefícios

* Código mais limpo
* Reutilização de lógica
* Padronização das respostas
* Facilidade de manutenção

---

## 📡 Endpoints da API

### 📌 Despesas

| Método | Rota          | Descrição     |
| ------ | ------------- | ------------- |
| GET    | /despesas     | Lista todas   |
| GET    | /despesas/:id | Busca por ID  |
| POST   | /despesas     | Cadastra nova |
| PUT    | /despesas/:id | Atualiza      |
| DELETE | /despesas/:id | Deleta        |

---

### 🔍 Filtro

| Método | Rota                                   |
| ------ | -------------------------------------- |
| GET    | /despesas/classificacao/:classificacao |

---

## 📥 Exemplo de requisição

### POST /despesas

```json
{
  "nome": "Energia",
   "valor": 400,
   "dataDeVencimento": "10/03/2026",
   "classificacao": "Pontualmente"
}
```

---

## 📤 Exemplo de resposta

```json
{
  "id": 0,
  "nome": "Energia",
  "valor": 400,
  "dataDeVencimento": "10/03/2026",
  "classificacao": "Pontualmente"
}
```

---

## ▶️ Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/JoseFelisbino/Controle-de-Despesas-Pessoais.git
```

### 2. Acessar a pasta

```bash
cd backend
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Executar o servidor

```bash
node src/server.js
```

---

## 🧪 Testes

Recomenda-se utilizar:

* Postman
* Insomnia

---

## 📌 Melhorias futuras

* Persistência com banco de dados (MySQL ou MongoDB)
* Autenticação de usuários
* Paginação e filtros avançados
* Elaboração do frontend
* Deploy em nuvem

---

## 👨‍💻 Autor

Projeto desenvolvido para fins acadêmicos e aprendizado em desenvolvimento backend.

---

