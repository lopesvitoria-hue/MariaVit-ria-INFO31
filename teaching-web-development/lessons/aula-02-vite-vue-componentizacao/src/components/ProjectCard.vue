<template>
  <article class="project-card">
    <p class="label">Desafio inicial</p>
    <h2>Problema observado</h2>
    <p>Como tornar as informações do projeto mais claras para a comunidade?</p>
    <button type="button">Marcar interesse</button>
  </article>
</template>

<style scoped>
.project-card {
  padding: 24px;
  background: #b3cfe5;
  border-left: 8px solid #0a1931;
}

.project-card h2 {
  margin: 0;
  color: #1a3d63;
}

.project-card > p:not(.label) {
  margin: 12px 0 20px;
  line-height: 1.6;
}

.label {
  margin: 0 0 8px;
  color: #4a7fa7;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

button {
  padding: 12px 18px;
  color: #f6fafd;
  font-weight: 700;
  background: #0a1931;
  border: 0;
  border-radius: 4px;
}

button:hover {
  background: #f6fafd;
  color: #0a1931;
}

button:focus-visible {
  outline: 3px solid #f3c623;
  outline-offset: 3px;
}
</style>

