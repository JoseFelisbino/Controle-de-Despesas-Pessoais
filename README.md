# 💰 Controle de Despesas Pessoais

Aplicação fullstack para gerenciamento de despesas pessoais, desenvolvida com Node.js no backend (arquitetura MVC) e JavaScript puro no frontend (arquitetura MCP).

O sistema permite cadastrar, listar e remover despesas, além de calcular automaticamente o total gasto.

> ⚠️ **Observação:** Os dados são armazenados em memória utilizando listas (arrays), ou seja, não há persistência em banco de dados. Ao reiniciar o servidor, os dados são resetados.

---

## 🚀 Tecnologias Utilizadas

### 🔙 Backend

* Node.js
* Express
* Arquitetura MVC
* JavaScript (CommonJS)

### 🎨 Frontend

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Arquitetura MCP (Model-Controller-Presenter)

---

## 🧠 Arquitetura do Projeto

### Backend (MVC)

* **Model:** Estrutura de dados em memória (listas/arrays)
* **Service:** Regras de negócio e validações
* **Controller:** Entrada e saída da API + tratamento de erros
* **Routes:** Definição de endpoints
* **Middleware:** Tratamento global de erros

### Frontend (MCP)

* **Service (Model):** Comunicação com API + tratamento de erros
* **Presenter (Controller):** Lógica de interação
* **View:** Manipulação do DOM

---

## 📁 Estrutura do Projeto

```id="estrutura2"
backend/
├── src/
│   ├── modules/
│   │   ├── despesas/
│   │   │   ├── model.js
│   │   │   ├── service.js
│   │   │   ├── controller.js
│   │   │   └── routes.js
│   ├── middlewares/
│   │   └── errorHandler.js
│   ├── app.js
│   └── server.js

frontend/
├── index.html
├── css/
│   └── style.css
└── src/
    ├── main.js
    └── modules/
        └── despesas/
            ├── view.js
            ├── presenter.js
            └── service.js
```

---

## ⚙️ Funcionalidades

* ✅ Cadastro de despesas
* ✅ Listagem de despesas
* ✅ Remoção de despesas
* ✅ Cálculo automático do total gasto
* ✅ Integração entre frontend e backend
* ✅ Tratamento de erros no backend e frontend

---

## 🛡️ Tratamento de Erros

O projeto implementa um fluxo completo de tratamento de erros, seguindo boas práticas utilizadas em aplicações reais:

### 🔙 Backend

* Uso de `try/catch` nos controllers
* Encaminhamento de erros com `next(error)`
* Middleware global para tratamento centralizado (`errorHandler`)
* Padronização de respostas de erro com status HTTP adequados (400, 404, 500)
* Validação de dados na camada de service

### 🌐 Frontend

* Tratamento de erros nas requisições com `fetch`
* Verificação de `response.ok`
* Exibição de mensagens de erro para o usuário
* Prevenção de quebra da interface

---

## ▶️ Como Executar o Projeto

### 🔧 Backend

1. Acesse a pasta do backend:

```id="cmd6"
cd backend
```

2. Instale as dependências:

```id="cmd7"
npm install
```

3. Inicie o servidor:

```id="cmd8"
npm start
```

Servidor rodando em:

```id="cmd9"
http://localhost:3000
```

---

### 🌐 Frontend

1. Abra o arquivo:

```id="cmd10"
frontend/index.html
```

Ou utilize uma extensão como **Live Server**.

---

## 🔗 Endpoints da API

### 📌 Despesas

| Método | Rota          | Descrição       |
| ------ | ------------- | --------------- |
| GET    | /despesas     | Listar despesas |
| POST   | /despesas     | Criar despesa   |
| DELETE | /despesas/:id | Remover despesa |

---

## 🧪 Exemplo de Requisição

```json id="json2"
POST /despesas

{
  "id": 1,
  "descricao": "Mercado",
  "valor": 150,
  "categoria": "Alimentação",
  "data": "2026-03-27"
}
```

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

* Praticar arquitetura MVC e MCP
* Entender integração entre frontend e backend
* Aplicar boas práticas de organização de código
* Implementar tratamento de erros robusto
* Compreender manipulação de dados em memória
* Construir um projeto de portfólio nível júnior

---

## 🚀 Possíveis Melhorias

* 🗄️ Persistência com banco de dados (MySQL, MongoDB)
* 🔐 Autenticação de usuários
* 📊 Dashboard com gráficos
* 📅 Filtro por data
* ✏️ Edição de despesas
* 🌐 Deploy em nuvem

---

## 👨‍💻 Autor

Desenvolvido por José Luiz Vitorino Felisbino
Projeto com fins educacionais e para portfólio.
