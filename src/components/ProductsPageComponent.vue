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
      products: [{
        id: 0,
        name: '1.jpg',
        price: '1000',
        image: '1.jpg'
      },
      {
        id: 2,
        name: '1.jpg',
        price: '1000',
        image: '2.jpg'
      },
      {
        id: 3,
        name: '1.jpg',
        price: '1000',
        image: '3.jpg'
      }
        ,
      {
        id: 4,
        name: '1.jpg',
        price: '1000',
        image: '4.jpg'
      }
        ,
      {
        id: 5,
        name: '1.jpg',
        price: '1000',
        image: '5.jpg'
      }
        ,
      {
        id: 6,
        name: '1.jpg',
        price: '1000',
        image: '6.jpg'
      }
        ,
      {
        id: 7,
        name: '1.jpg',
        price: '1000',
        image: '7.jpg'
      }
        ,
      {
        id: 8,
        name: '1.jpg',
        price: '1000',
        image: '8.jpg'
      }
        ,
      {
        id: 9,
        name: '1.jpg',
        price: '1000',
        image: '9.jpg'
      }
        ,
      {
        id: 10,
        name: '1.jpg',
        price: '1000',
        image: '10.jpg'
      }
        ,
      {
        id: 11,
        name: '1.jpg',
        price: '1000',
        image: '11.jpg'
      }
        ,
      {
        id: 12,
        name: '1.jpg',
        price: '1000',
        image: '12.jpg'
      }
        ,
      {
        id: 13,
        name: '1.jpg',
        price: '1000',
        image: '13.jpg'
      }

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.products {
  padding-top: 100px;
  background-image: url("../assets/images/products/products-bg.png");
}

.products-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto, 500px);
  gap: 50px 20px;
}
</style>
