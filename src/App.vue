<template>
  <div id="app">
    <nav>
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/about">About</RouterLink> | 
      <RouterLink to="/recipe">Recipes</RouterLink> | 
      <RouterLink to="/cooking-notes">Cooking Notes</RouterLink>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
nav {
  background-color: #f8f9fa;
  padding: 1rem;
}
nav a {
  margin-right: 15px;
  text-decoration: none;
  color: #007bff;
}
nav a:hover {
  color: #0056b3;
}
</style>
