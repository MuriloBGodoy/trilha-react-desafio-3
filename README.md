# Desafio 03 - Tela de Cadastro (Clone da DIO) com React

Projeto desenvolvido como parte da **Formação React Developer** na plataforma da **Digital Innovation One (DIO)**.

O objetivo deste desafio foi implementar a **Tela de Cadastro** completa no projeto de clone da plataforma DIO, aplicando boas práticas de componentização, controle de formulários com **React Hook Form**, validação de esquemas com **Yup**, estilização via **Styled-Components** e navegação com **React Router DOM v6**.

---

## 🚀 Funcionalidades

- **Tela de Cadastro (`/cadastro`):**
  - Campos: Nome completo, E-mail e Senha.
  - Ícones indicativos nos inputs via `react-icons/md` (`MdPerson`, `MdEmail`, `MdLock`).
  - Botão de submissão com variante visual personalizada.
  - Termos de uso e políticas de privacidade conforme o design do Figma.
  - Link de redirecionamento direto para a tela de login (`/login`).
- **Validação de Formulários (Yup + React Hook Form):**
  - Validação em tempo real no evento de alteração (`mode: 'onChange'`).
  - Mensagens de erro claras para campos obrigatórios, formato de e-mail e tamanho mínimo de caracteres.
  - Integração do componente customizado `Input` com o hook `useForm` através do `Controller`.
- **Roteamento Dinâmico:**
  - Navegação entre as páginas **Home (`/`)**, **Login (`/login`)**, **Cadastro (`/cadastro`)** e **Feed (`/feed`)**.
- **Testes Automatizados:** Testes unitários com React Testing Library e Jest validando renderização de campos e mensagens de erro de validação.

---

## 🛠️ Tecnologias Utilizadas

- **React 18**
- **JavaScript (ES6+)**
- **React Router DOM v6** (roteamento declarativo)
- **React Hook Form** (performance e gerenciamento de formulários)
- **Yup** + **@hookform/resolvers** (validação de schemas)
- **Styled-Components** (CSS-in-JS e tema global)
- **React Icons** (Material Design Icons)
- **Axios** (integração HTTP)

---

## 📂 Estrutura de Pastas

```
trilha-react-desafio-3/
├── public/                 # HTML e assets estáticos
├── src/
│   ├── assets/             # Logos e imagens da DIO
│   ├── components/
│   │   ├── Button/         # Botão reutilizável
│   │   ├── Card/           # Card do feed
│   │   ├── Header/         # Cabeçalho com navegação
│   │   ├── Input/          # Campo de texto com ícone e mensagem de erro
│   │   └── UserInfo/       # Barra de progresso e perfil do usuário
│   ├── pages/
│   │   ├── cadastro/       # Tela de Cadastro implementada (Desafio 03)
│   │   ├── feed/           # Feed da plataforma
│   │   ├── home/           # Página inicial
│   │   └── login/          # Tela de login
│   ├── services/
│   │   └── api.js          # Instância do Axios
│   ├── styles/
│   │   └── global.js       # Reset e fontes globais
│   ├── App.js              # Definição das rotas
│   └── index.js            # Inicialização da aplicação
├── db.json                 # Mock de dados para API json-server
├── package.json
└── README.md
```

---

## ⚙️ Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 16+)
- npm ou yarn

### 1. Clonar o repositório
```bash
git clone https://github.com/MuriloBGodoy/trilha-react-desafio-3.git
cd trilha-react-desafio-3
```

### 2. Instalar dependências
```bash
npm install --legacy-peer-deps
```

### 3. Iniciar a aplicação
```bash
npm start
```
Acesse [http://localhost:3000](http://localhost:3000) no seu navegador. Para acessar a tela de cadastro diretamente: [http://localhost:3000/cadastro](http://localhost:3000/cadastro).

---

## 🧪 Como Rodar os Testes

```bash
npm test -- --watchAll=false
```

Resultado:
```text
PASS src/pages/cadastro/Cadastro.test.jsx
  ✓ renderiza os campos da tela de cadastro
  ✓ exibe mensagem de erro quando campos obrigatorios nao sao preenchidos
  ✓ exibe mensagem de erro para email com formato invalido

Tests: 3 passed, 3 total
```
