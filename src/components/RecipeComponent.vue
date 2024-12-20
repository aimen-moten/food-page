<template>
    <div>
        <img :src="imgPath" class="img"/>
        <h3>{{ name }}</h3>
        <h4>Total Time: {{ total }} minutes</h4>
        <p>Prep Time: {{ prep }} - Cook Time: {{ cook }}</p>
        <p>This recipe makes {{ servings }} servings.</p>
        <slot name="ingredients"></slot>
        <slot name="directions"></slot>
        
    </div>
</template>

<script>
export default {
    props: ['name', 'prep', 'cook', 'total', 'servings', 'imgPath']
}
</script>

<style>
.img {
  width: 10%;
  height: 10%;
}
</style>