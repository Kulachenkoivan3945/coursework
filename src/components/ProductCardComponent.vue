<template>
  <div class="product-card">
      <img class="card-image" :src="require(`../assets/images/products/` + productInfo.image)" alt="">
      <p class="title">{{ productInfo.name }}</p>
      <p class="price">{{productInfo.price}}</p>

  </div>
</template>

<script>
export default {
  name: 'ProductCardComponent',
  props: ['productInfo']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .product-card{
    border: 1px solid black;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .card-image{
    margin-top: 20px;
    width: 250px;
    min-height: 300px;
    max-height: 300px;
    object-fit: cover;
    border-radius: 20px;
  }
</style>
