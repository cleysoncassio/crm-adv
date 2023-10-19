# CRM advocacia

O CRM Advocacia é uma solução completa para gestão de escritórios de advocacia. Ele permite o gerenciamento eficiente dos processos e tarefas do dia-a-dia, proporcionando mais produtividade e controle.

### Principais Funcionalidades

#### Cadastro de cliente 👤

#### Financeiro 💰

#### Consulta de processos 📄

#### Agendamento 🗓️

#### Dashboard interativo 📊

Com o CRM Advocacia, seu escritório ganha agilidade e eficiência na gestão para se concentrar no mais importante: defender os direitos de seus clientes!

#### 🚀 Começando

Este projeto visa gerenciar de forma simples e eficiente as demandas de um escritório de advocacia.

#### 📋 Pré-requisitos

Para rodar o código é necessário ter instalado em sua máquina a linguagem Python 3, além do banco de dados MySQL.

Python 3
Api
Flask
Vue.js

#### 🔧 Instalação

### Backend

O backend foi desenvolvido em Python.

1. Instale o virtualenv caso ainda não tenha:

```bash
pip install virtualenv
```
2. Crie um novo virtualenv:

```bash
virtualenv .venv
```

3. Ativar Virtualenv no LINUX

```bash
source .venv/bin/activate
```

4. Se for Windows:

```bash
.venv\Scripts\activate
```

```bash
pipenv sync -d
```

3. Rode as migrações:

```bash
python manage.py migrate
```

4. Execute o servidor localmente:

```bash
python manage.py runserver
```

O backend estará disponível em <http://localhost:8000>.

### Frontend

Para acessar o frontend é necessário ter instalado Vue CLI (<https://cli.vuejs.org/>).

Após isso execute os seguintes comandos no terminal na pasta do projeto:
O frontend foi desenvolvido em Vue.js.

1. Instale as dependências:

```bash
npm install
```

2. Instalar pacotes npm:

```bash
npm i vuetify bootstrap axios --save
```

3. Inicializar o projeto:

```bash
npx vue init webpack 
```

4. Executar o projeto:

```bash
npm run dev  # ou yarn serve ou se preferir o npm run serve
```
Comando para abir painel Vue 'vue ui'
Utilizando o `npm run dev` ,o hot reloading irá automaticamente atualizar a página quando algum arquivo .vue for alterado, sem a necessidade de reiniciar o servidor. Isso agiliza bastante o desenvolvimento.

A aplicação será aberta automaticamente em `http://localhost:5173`

O frontend foi desenvolvido em Vue.js.

Pronto! A aplicação completa estará disponível para uso.

Para produção, é recomendado fazer build do Vue e servir o frontend com Nginx ou Apache.

Considerações
Python 3.9 ou superior
Node.js 18 ou superior
Qualquer dúvida, consulte o readme completo do projeto:

[![Build Status](https://app.travis-ci.com/cleysoncassio/crm-adv.svg?branch=master)](https://app.travis-ci.com/cleysoncassio/crm-adv)
