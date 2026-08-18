# 📚 Hub de Leitura — Testes Automatizados com Cypress

Projeto desenvolvido durante o curso de **Engenharia de Qualidade de Software da EBAC**, com o objetivo de praticar automação de testes end-to-end utilizando o **Cypress**.

A suíte valida funcionalidades da aplicação **Hub de Leitura**, como cadastro, login, catálogo, busca de livros e formulário de contato. O projeto também utiliza geração de dados dinâmicos, comandos customizados, massa de dados em arquivos JSON, Fixtures, Page Object Model e registro de execuções no Cypress Cloud.

---

## 📌 Pré-requisitos

Para executar os testes, é necessário ter instalado:

- Node.js;
- npm;
- Git;
- Google Chrome.

Antes de executar os testes automatizados, é necessário realizar o clone da aplicação **Hub de Leitura**, disponibilizada pela EBAC, e executá-la localmente.

### 1. Clone o repositório da aplicação

```bash
git clone https://github.com/EBAC-QE/hub-de-leitura-integrado.git
```

Ou acesse diretamente o repositório:

**Hub de Leitura - EBAC:** [https://github.com/EBAC-QE/hub-de-leitura-integrado](https://github.com/EBAC-QE/hub-de-leitura-integrado?utm_source=chatgpt.com)

### 2. Execute a aplicação

Siga as instruções descritas no README do projeto da EBAC para instalar as dependências e iniciar a aplicação.

> **Importante:** os testes deste repositório foram configurados para acessar a aplicação em `http://localhost:3000`. Portanto, o Hub de Leitura deve estar em execução antes de iniciar os testes automatizados.

---

## 🚀 Tecnologias e recursos utilizados

- Cypress 15;
- JavaScript;
- Node.js e npm;
- Faker.js;
- Fixtures do Cypress;
- Page Object Model;
- comandos customizados;
- Cypress Cloud;
- Git e GitHub.

---

## 📋 Funcionalidades automatizadas

### 👤 Cadastro de usuários

Os cenários de cadastro validam:

- preenchimento do formulário com dados definidos diretamente no teste;
- criação de e-mail único com `Date.now()`;
- geração de nome e e-mail com Faker;
- preenchimento por comando customizado;
- preenchimento utilizando Page Object;
- validação de nome obrigatório;
- validação de e-mail obrigatório;
- validação de senhas diferentes;
- redirecionamento para o dashboard após o cadastro.

### 🔐 Login

Os cenários de login contemplam:

- autenticação de usuário comum;
- autenticação de administrador;
- utilização de comando customizado de login;
- leitura de massa de dados por importação de arquivo JSON;
- carregamento da massa de dados com `cy.fixture()`;
- execução do mesmo fluxo para diferentes usuários da massa de dados.

### 📚 Catálogo de livros

Os testes do catálogo verificam:

- adição de livros à cesta;
- interação com o primeiro, último e itens específicos da listagem;
- validação das mensagens exibidas após adicionar um livro;
- acesso à página de detalhes de um livro;
- adição à cesta pela página de detalhes.

### 🔎 Busca no catálogo

Os cenários de busca validam:

- pesquisa de um livro pelo título;
- pesquisa utilizando massa de dados importada;
- pesquisa utilizando Fixture;
- validação do título e da categoria encontrados;
- execução da busca para todos os livros cadastrados na massa de dados.

### ✉️ Formulário de contato

Os testes verificam:

- envio do formulário com sucesso;
- validação do campo Nome;
- validação do campo E-mail;
- validação do campo Assunto;
- validação do campo Mensagem.

---

## 🧪 Estratégias utilizadas

### Massa de dados

O projeto utiliza arquivos JSON para separar os dados de teste do código dos cenários. Atualmente, existem massas de dados para:

- usuários e seus perfis de acesso;
- títulos e categorias de livros.

### Fixtures

As massas de dados são carregadas durante os testes com o comando `cy.fixture()`. Também há exemplos de importação direta dos arquivos JSON, permitindo comparar diferentes formas de consumo dos dados.

### Page Object Model

O fluxo de cadastro utiliza Page Object Model para centralizar seletores e ações da página. Essa organização reduz repetição de código e facilita a manutenção quando elementos da interface são alterados.

### Comandos customizados

O arquivo `commands.js` contém comandos reutilizáveis para:

- realizar login;
- preencher o formulário de cadastro.

### Cypress Cloud

O projeto possui um `projectId` configurado e um script para registrar execuções no Cypress Cloud. O recurso permite acompanhar o histórico das execuções, duração, resultados, vídeos e evidências de falhas.

---

## 📂 Estrutura do projeto

```text
cypress/
├── e2e/
│   ├── cadastro.cy.js
│   ├── catalogo-busca.cy.js
│   ├── catalogo.cy.js
│   ├── contato.cy.js
│   └── login.cy.js
├── fixtures/
│   ├── livros.json
│   └── usuario.json
└── support/
    ├── pages/
    │   └── cadastro-page.js
    ├── commands.js
    └── e2e.js

cypress.config.js
package.json
README.md
```

---

## ▶️ Como executar o projeto

### 1. Clone este repositório

```bash
git clone https://github.com/SEU-USUARIO/hub-de-leitura-teste-ui.git
```

### 2. Acesse a pasta do projeto

```bash
cd hub-de-leitura-teste-ui
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o Cypress no modo interativo

```bash
npx cypress open
```

### 5. Execute os testes em modo headless no Chrome

```bash
npm test
```

---

## ☁️ Executando no Cypress Cloud

Para registrar uma execução no Cypress Cloud, defina a Record Key como variável de ambiente e execute o Cypress com a opção `--record`.

### Linux ou macOS

```bash
export CYPRESS_RECORD_KEY="SUA_RECORD_KEY"
npx cypress run --browser chrome --record
```

### Windows PowerShell

```powershell
$env:CYPRESS_RECORD_KEY="SUA_RECORD_KEY"
npx cypress run --browser chrome --record
```

> A Record Key é uma credencial privada e não deve ser adicionada ao `package.json`, ao README ou ao histórico do Git.

---

## 🎯 Aprendizados praticados

Durante o desenvolvimento deste projeto, foram aplicados conceitos de:

- automação de testes E2E;
- organização de cenários por funcionalidade;
- criação e reutilização de comandos customizados;
- geração de dados dinâmicos com Faker;
- uso de massa de dados com JSON e Fixtures;
- aplicação do Page Object Model;
- validação de diferentes perfis de usuário;
- execução headless no Google Chrome;
- registro e acompanhamento de execuções no Cypress Cloud;
- versionamento de código com Git e GitHub.

---

## 👨‍💻 Autor

Desenvolvido por **Tiago Shikota** como parte dos estudos em Engenharia de Qualidade de Software.
