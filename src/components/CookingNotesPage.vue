<template>
    <div>
        <h1>Cooking Notes</h1>
        <ol>
            <li><strong>Don't overcrowd the pan</strong>: When cooking meat or vegetables, give them enough space to sear properly. Overcrowding causes steaming instead of browning, leading to less flavor.</li>
            <li><strong>Taste as you go</strong>: Always taste your food throughout the cooking process to adjust seasonings like salt, pepper, and spices. This ensures the flavors are balanced.</li>
            <li><strong>Let meat rest after cooking</strong>: Allow cooked meat to rest for 5-10 minutes before slicing. This helps the juices redistribute, keeping it tender and flavorful.</li>
            <li><strong>Use fresh herbs at the end</strong>: Add delicate herbs like basil, cilantro, or parsley at the end of cooking to retain their fresh flavor and vibrant color.</li>
        </ol>
        <button @click="goToRecipes">See List of Recipes</button>
    </div>
</template>

<script>
export default {
    name: 'CookingNotesPage',
    methods: {
        goToRecipes() {
            this.$router.push('/recipe') // This will navigate to the RecipePage
        }
    }
}
</script>

<style scoped>
button {
    background-color: #ff9800;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;
}
button:hover {
    background-color: #e65100;
}
</style>
