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
        name: 'Корзина гипсофил',
        price: '1000',
        image: '1.jpg'
      },
      {
        id: 2,
        name: 'Букет гипсофил',
        price: '2000',
        image: '2.jpg'
      },
      {
        id: 3,
        name: 'Радужное облако из гипсофил',
        price: '4000',
        image: '3.jpg'
      }
        ,
      {
        id: 4,
        name: 'Нежный букет роз',
        price: '1500',
        image: '4.jpg'
      }
        ,
      {
        id: 5,
        name: 'Букет гортензий',
        price: '1000',
        image: '5.jpg'
      }
        ,
      {
        id: 6,
        name: 'Букет цветов в теплых оттенках',
        price: '1000',
        image: '6.jpg'
      }
        ,
      {
        id: 7,
        name: 'Букет',
        price: '1000',
        image: '7.jpg'
      }
        ,
      {
        id: 8,
        name: 'Букет',
        price: '1000',
        image: '8.jpg'
      }
        ,
      {
        id: 9,
        name: 'Букет',
        price: '1000',
        image: '9.jpg'
      }
        ,
      {
        id: 10,
        name: 'Букет',
        price: '1000',
        image: '10.jpg'
      }
        ,
      {
        id: 11,
        name: 'Букет',
        price: '1000',
        image: '11.jpg'
      }
        ,
      {
        id: 12,
        name: 'Букет',
        price: '1000',
        image: '12.jpg'
      }
        ,
      {
        id: 13,
        name: 'Букет',
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
