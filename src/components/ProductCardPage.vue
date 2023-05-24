<template>
  <div class="product-container">
    <div class="images-block">
      <div class="aside-images">
        <div v-for="asideImage in product.asideImages" :key="asideImage" class="aside-image-container">
          <img :src="require(`../assets/images/products/` + asideImage)" 
           alt="">
        </div>
      </div>
      <div class="main-image">
        <img :src="require(`../assets/images/products/` + product.image)" alt="">
      </div>
    </div>

    <div class="text-block">
      <div class="description-block">
        <p>{{ product.title }}</p>
      </div>
      <div class="buy-block">
        <h3 class="title">

        </h3>
        <p class="price">{{ product.price }}</p>
        <p v-if="countInCart" class="count">{{ countInCart }}</p>
        <p v-else class="count">0</p>
        <p class="result"></p>
        <div class="toCart">
          <router-link to="/">
            <p>В корзину {{ productId }}</p>

          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ProductCardPage',
  computed: {
    productId() {
      return +this.$route.params.id;
    },
    product() {
      return this.$store.getters.getProductById(this.productId);
    },
    countInCart() {
      return this.$store.getters.getCountInCartById(this.productId);
    }
  },
  mounted() {
    console.log(this.product);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-container {
  padding-top: 100px;
}

.product-container {
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 100px;
}

.images-block {
  min-width: 50%;
  max-width: 50%;
  max-height: 80vh;
  display: flex;
  justify-content: space-around;
}

.main-image{
  width: 90%;
}
.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.aside-images {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6,calc(100% / 6)) ;
  padding: 10px 0px 10px 0px;
  border: 1px solid rgb(181, 179, 179);
  border-radius: 10px;
  width: 20%;
  max-height: 100%;
}

.aside-image-container {
  border-bottom: 1px solid rgb(181, 179, 179);
  padding: 5px;
  padding-bottom: 10px;
  max-height: 100%;
}

.aside-image-container:last-child {
  border-bottom: none;
}

.aside-image-container img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.description-block {
  display: flex;
  flex-direction: column;
}
</style>
