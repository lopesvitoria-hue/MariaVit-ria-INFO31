<script setup>
import AppHeader from './components/AppHeader.vue'
import ProjectCard from './components/ProjectCard.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="page-shell">
    <!-- 1. Componente do Cabeçalho -->
    <AppHeader />

    <!-- 2. Componente do Card Principal -->
    <main>
      <ProjectCard />
    </main>

    <!-- 3. Componente do Rodapé -->
    <AppFooter />
  </div>
</template>

<style scoped>
.page-shell {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
  font-family: sans-serif;
}
</style>