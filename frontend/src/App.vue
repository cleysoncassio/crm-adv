<script setup>
import { useTheme } from 'vuetify'
import UpgradeToPro from '@/components/UpgradeToPro.vue'
import { hexToRgb } from '@layouts/utils'
import ClienteList from './components/ClienteList.vue';

const { global } = useTheme()

  // components; {
  //   ClienteList
  // };

</script>

<template>
  <VApp :style="`--v-global-theme-primary: ${hexToRgb(global.current.value.colors.primary)}`">
    <RouterView />
    <UpgradeToPro />
    <ClienteList />
  </VApp>
</template>


