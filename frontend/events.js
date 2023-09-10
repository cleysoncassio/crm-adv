// events.js

import axios from 'axios';

// Defina a URL base da sua API Django
const apiBaseUrl = 'http://localhost:8000/api/clientes';

// Crie a instância do Axios com a URL base
const api = axios.create({
  baseURL: apiBaseUrl,
});

// Exporte a variável `api` para que você possa usá-la em outros lugares do seu projeto
export default api;
