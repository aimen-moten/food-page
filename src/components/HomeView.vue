<template>
  <div class="home">
    <h1>Home Page</h1>
    <p>Welcome to our Recipe Webpage! Here, you'll find a variety of recipes to try out at home.</p>
    <button @click="goToRecipes">See List of Recipes</button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    goToRecipes() {
      this.$router.push('/recipe');
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
  background-color: #fff3e0;
  border-radius: 8px;
}
button {
  background-color: #ff9800;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}
button:hover {
  background-color: #e65100;
}
</style>
