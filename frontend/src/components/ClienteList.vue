<script>
import axios from 'axios';

export default {
  data() {
    return {
      clientes: [],
    };
  },
  mounted() {
    // Faça uma solicitação GET à sua API para obter a lista de clientes
    axios.get('http://localhost:8000/api/clientes/')
      .then(response => {
        this.clientes = response.data;
      })
      .catch(error => {
        console.error('Erro ao buscar clientes:', error);
      });
  },
};
</script> 

<script setup>
const cliente = [
  {
    cliente:'id ',
    cliente:'nome',
    cliente:'email',
    cliente:'contato',
    cliente:'endereco',
  },
]
</script>

<template>
  <VTable
    height="250"
    fixed-header>
    <thead>
      <tr>
        <th class="text-uppercase">
          id
        </th>
        <th>
          nome
        </th>
        <th>
          email
        </th>
        <th>
          contato
        </th>
        <th>
          endereco
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
      v-for="cliente in clientes"
      :key="cliente.id"
      >
        <td>
          {{ cliente.id }}
        </td>
        <td class="text-left">
          {{ cliente.nome }}
        </td>
        <td class="text-left">
          {{ cliente.email }}
        </td>
        <td class="text-left">
          {{ cliente.telefone }}
        </td>
        <td class="text-left">
          {{ cliente.endereco }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
