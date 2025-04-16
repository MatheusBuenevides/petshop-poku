
# PetShop Poku

PetShop Poku é uma aplicação frontend construída com **React**, **Vite**, **TypeScript** e **Tailwind CSS** que simula o agendamento para atendimento de animais exóticos. O projeto inclui um formulário para agendamento e um serviço de validação que, por exemplo, impede o agendamento de um jacaré sem autorização do IBAMA ou de uma capivara durante o período de reprodução.

---

## Índice

- [Recursos](#recursos)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Utilização](#utilização)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Serviço de Validação](#serviço-de-validação)
- [Deploy](#deploy)
- [Licença](#licença)

---

## Recursos

- **React + TypeScript**: Base moderna, robusta e tipada para construção de interfaces.
- **Vite**: Ferramenta de build ultra-rápida para desenvolvimento moderno.
- **Tailwind CSS**: Estilização com classes utilitárias para construção de layouts responsivos com rapidez.
- **Poku**: Biblioteca de testes com sintaxe minimalista e intuitiva, utilizada para testar a lógica de validação de agendamentos.
- **Serviço de Validação**: Camada separada responsável por regras de negócio (ex: validações para IBAMA e períodos de reprodução).

- **Vite**: Ferramenta de build rápida e otimizada.
- **Tailwind CSS**: Estilização rápida e responsiva baseada em classes utilitárias.
- **Validação de Agendamento**: Um serviço que valida as informações do agendamento conforme regras pré-definidas.

---

## Pré-requisitos

Antes de iniciar, certifique-se de que você possui instalado:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- npm (geralmente instalado juntamente com o Node.js)

---

## Instalação

Siga os passos abaixo para instalar e configurar o projeto em seu ambiente local:

1. **Clone o repositório**

   ```bash
   git clone https://github.com/MatheusBuenevides/petshop-poku.git
   cd petshop-poku
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**

   ```bash
   npm run dev
   ```

   Após a execução, abra o navegador no endereço exibido (por padrão, [http://localhost:5173/](http://localhost:5173/)).

---

## Utilização

A aplicação apresenta um formulário com os seguintes campos:

- **Espécie**: Insira a espécie do animal (ex.: cachorro, gato, jacaré, etc.).
- **Data**: Selecione a data para agendamento.
- **Autorização do IBAMA**: Marque a opção se houver autorização do IBAMA.

Ao enviar o formulário, os dados são validados de acordo com as regras definidas no serviço de validação, que, por exemplo:

- Bloqueia o agendamento de **jacaré** sem autorização do IBAMA.
- Bloqueia o agendamento de **capivara** durante o período de reprodução (meses 9, 10 e 11).

Caso o agendamento seja válido, uma mensagem de confirmação é exibida.

---

## Testes com a biblioteca Poku

Este projeto utiliza a biblioteca [Poku](https://poku.dev) para a criação e execução de testes de forma simples e rápida com sintaxe descritiva e moderna.  
A biblioteca foi utilizada para testar a lógica de agendamento em `AppointmentService`.

### Executar os testes

Para rodar os testes com Poku:

```bash
npx poku
```

---

## Estrutura do Projeto

```
petshop-poku/
├─ node_modules/
├─ public/
│  └─ index.html
├─ src/
│  ├─ components/
│  │  ├─ FormPetShop.tsx                 # Componente do formulário
│  ├─ services/
│  │  └─ AppointmentService.ts            # Serviço de validação do agendamento
│  │  └─ AppointmentService.test.ts       # Testes para o AppointmentService
│  ├─ App.tsx
│  ├─ index.css                          # Importa Tailwind CSS
│  └─ main.tsx                           # Ponto de entrada do React
├─ tailwind.config.js                     # Configuração do Tailwind
├─ tsconfig.json                          # Configuração do TypeScript
├─ package.json
└─ README.md
```

---

## Serviço de Validação

O serviço de validação está localizado em `src/services/AppointmentService.ts` e implementa a lógica para autorizar ou bloquear o agendamento com base nas seguintes regras:

- **Jacaré**: Requer autorização do IBAMA.
- **Capivara**: Bloqueia agendamentos no período de reprodução.

O método `validateAppointment` retorna uma `Promise` com um objeto que informa se o agendamento foi permitido e, se não, a razão do bloqueio.

---

## Deploy

Para gerar a versão de produção, execute:

```bash
npm run build
```

A pasta de saída será `dist/`. Você pode implantar essa pasta em plataformas de hospedagem de aplicações estáticas, como:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)

---

## Licença

Distribuído sob a [MIT License](LICENSE). Veja o arquivo `LICENSE` para mais informações.
