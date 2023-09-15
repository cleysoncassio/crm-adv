<template>
  <div class="h-100 d-flex flex-wrap align-center justify-space-between">
    <!-- 👉 Footer: left content -->
    <span class="d-flex align-center">
      &copy;
      {{ new Date().getFullYear() }}
      Made With
      <VIcon
        icon="bx-heart"
        color="error"
        size="1.25rem"
        class="mx-1"
      />
      Por <a
        href="https://github.com/cleysoncassio"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary ms-1"
      >Cleyson Cassio-Eng.Software</a>
    </span>
    <span class="d-flex align-center">
      Distribuição <a
        href="https://github.com/cleysoncassio"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary ms-1"
      >ThemeWagon</a>
    </span>
    <!-- 👉 Footer: right content -->
    <span class="d-md-flex gap-x-4 text-primary d-none">
      <a
        href="https://themeselection.com/license/"
        target="noopener noreferrer"
      >Licença</a>
      <a
        href="https://themeselection.com/"
        target="noopener noreferrer"
      >Meus Projetos</a>
      <a
        href="https://demos.themeselection.com/sneat-vuetify-vuejs-admin-template/documentation/"
        target="noopener noreferrer"
      >Documentação</a>
    </span>
  </div>
</template>
