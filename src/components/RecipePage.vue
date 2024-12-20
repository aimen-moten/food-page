<template>
    <div>
        <h1>List of Recipes</h1>
        <RecipeComponent
            v-for="(recipe, index) in recipes"
            :key="index"
            :name="recipe.name"
            :prep="recipe.prepTime"
            :cook="recipe.cookTime"
            :total="recipe.totalTime"
            :servings="recipe.servings"
            :imgPath="recipe.imgPath"
        >
            <!-- Slot for ingredients -->
            <template #ingredients>
                <ul>
                    <li v-for="(ingredient, i) in recipe.ingredients" :key="i">{{ ingredient }}</li>
                </ul>
            </template>
            <!-- Default slot for directions -->
            <template #default>
                <ol>
                    <li v-for="(direction, i) in recipe.directions" :key="i">{{ direction }}</li>
                </ol>
            </template>
        </RecipeComponent>
    </div>
</template>

<script>
import RecipeComponent from "./RecipeComponent.vue"

export default {
    components: {
        RecipeComponent
    },
    data() {
        return {
            recipes: [
                {
                    "name": "Spaghetti Bolognese",
                    "prepTime": "15 mins",
                    "cookTime": "30 mins",
                    "totalTime": "45 mins",
                    "servings": "4",
                    "imgPath": "https://umamiology.com/wp-content/uploads/2024/04/Umamiology-Spaghetti-Bolognese-RecipeCard16.jpg",
                    "ingredients": [
                        "200g spaghetti",
                        "400g minced beef",
                        "1 onion, chopped",
                        "2 garlic cloves, minced",
                        "400g canned tomatoes",
                        "2 tbsp olive oil",
                        "Salt and pepper to taste",
                        "Grated Parmesan cheese"
                    ],
                    "directions": [
                        "Cook spaghetti according to package instructions.",
                        "Heat olive oil in a pan and sauté onions and garlic until soft.",
                        "Add minced beef and cook until browned.",
                        "Stir in canned tomatoes and simmer for 20 minutes.",
                        "Season with salt and pepper.",
                        "Serve sauce over spaghetti and top with Parmesan cheese."
                    ]
                },
                {
                    "name": "Chicken Curry",
                    "prepTime": "20 mins",
                    "cookTime": "40 mins",
                    "totalTime": "1 hour",
                    "servings": "4",
                    "imgPath": "https://www.allrecipes.com/thmb/FL-xnyAllLyHcKdkjUZkotVlHR8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/46822-indian-chicken-curry-ii-DDMFS-4x3-39160aaa95674ee395b9d4609e3b0988.jpg",
                    "ingredients": [
                        "500g chicken breast, diced",
                        "1 onion, chopped",
                        "2 garlic cloves, minced",
                        "1 tbsp curry powder",
                        "400g canned coconut milk",
                        "2 tbsp olive oil",
                        "Salt and pepper to taste",
                        "Fresh cilantro for garnish"
                    ],
                    "directions": [
                        "Heat olive oil in a pan and sauté onions and garlic until soft.",
                        "Add chicken and cook until browned.",
                        "Stir in curry powder and cook for 2 minutes.",
                        "Add coconut milk and simmer for 30 minutes.",
                        "Season with salt and pepper.",
                        "Garnish with fresh cilantro and serve."
                    ]
                },
                {
                    "name": "Vegetable Stir-fry",
                    "prepTime": "10 mins",
                    "cookTime": "15 mins",
                    "totalTime": "25 mins",
                    "servings": "2",
                    "imgPath": "https://natashaskitchen.com/wp-content/uploads/2020/08/Vegetable-Stir-Fry-2.jpg",
                    "ingredients": [
                        "1 red bell pepper, sliced",
                        "1 yellow bell pepper, sliced",
                        "1 zucchini, sliced",
                        "1 carrot, sliced",
                        "2 tbsp soy sauce",
                        "1 tbsp sesame oil",
                        "1 garlic clove, minced",
                        "1 tbsp sesame seeds"
                    ],
                    "directions": [
                        "Heat sesame oil in a wok and sauté garlic until fragrant.",
                        "Add sliced vegetables and stir-fry for 10 minutes.",
                        "Stir in soy sauce and cook for another 5 minutes.",
                        "Sprinkle with sesame seeds and serve hot."
                    ]
                }
            ]
        }
    }
}
</script>
