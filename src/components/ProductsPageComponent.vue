<template>
  <div class="products">
    <div class="products-container">
      <ProductCardComponent v-for="product in products" :key="product.id" :productInfo="product" />
    </div>
  </div>
</template>

<script>
import ProductCardComponent from '@/components/ProductCardComponent.vue'
export default {
  name: 'ProductsPageComponent',
  components: {
    ProductCardComponent
  },
  data() {
    return {
      products: this.$store.state.allProducts
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.products {
  padding-top: 100px;
  background-image: url("../assets/images/products/products-bg.png");
  background-size: cover;
  padding-bottom: 80px;
}

.products-container {
  padding-left: 30px;
  padding-right: 30px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 320px);
  grid-template-rows: repeat(auto, 500px);
  gap: 50px 20px;
  justify-items: stretch;
}
</style>
