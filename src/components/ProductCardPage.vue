<template>
  <div class="product-container">
    <div class="images-block">
      <div class="aside-images">
        <div v-for="asideImage in product.asideImages" :key="asideImage" class="aside-image-container">
          <img :src="require(`../assets/images/products/` + asideImage)" @click="changeMainPhoto(asideImage)" alt="">
        </div>
      </div>
      <div class="main-image">
        <img v-if="!isChanged" :src="require(`../assets/images/products/` + product.image)" alt="">
        <img v-else :src="require(`../assets/images/products/` + mainImage)" alt="">
      </div>
    </div>

    <div class="text-block">
      <div class="description-block">
        <p class="text-description">{{ product.title }}</p>
      </div>
      <div class="buy-block">
        <h3 class="title">
          {{ product.name }}
        </h3>
        <p class="price">Цена: <span class="bold">{{ product.price }}₽</span></p>
        <div class="cart-block">
          <div class="cart-block-btn">
            <img class="remove-btn" @click="removeFromCart" src="../assets/images/icons/remove.png" alt="">
            <p v-if="countInCart" class="count">{{ countInCart }}</p>
            <p v-else class="count">0</p>
            <img @click="addAnotherOne" src="../assets/images/icons/add.png" alt="">
          </div>
        </div>
        <p class="result">Итого: <span class="bold">{{ product.price * countInCart }}₽</span></p>
        <div class="to-cart">
          <router-link to="/cart">
            <img src="../assets/images/icons/cart.png" alt="">
            <p>В корзину</p>

          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ProductCardPage',
  data() {
    return {
      mainImage: "",
      isChanged: false
    }
  },
  methods: {
    changeMainPhoto(src) {
      this.mainImage = src;
      this.isChanged = true;

    },
    addAnotherOne() {

      this.$store.commit('addToCart', this.productId);
    },
    removeFromCart() {

      this.$store.commit('removeFromCart', this.productId);
    }
  },
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

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-container {
  width: 100vw;
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 100px;
  padding-top: 100px;
  background-image: url("../assets/images/products/products-bg.png");
  background-size: cover;
}

.images-block {
  min-width: 50%;
  max-width: 50%;
  height: 70vh;
  max-height: 700px;
  display: flex;
  justify-content: space-around;
  padding-right: 30px;
  padding-left: 20px;
}

.main-image {
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
  grid-template-rows: repeat(6, calc(100% / 6));
  margin-right: 10px;
  border: 1px solid rgb(181, 179, 179);
  border-radius: 10px;
  width: 15%;
  max-height: 100%;
}

.aside-image-container {
  border-bottom: 1px solid rgb(181, 179, 179);
  padding: 5px;
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

.text-block {
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 50px;
  height: 100%;
}

.description-block {}

.bold {
  font-weight: bold;
}

.text-description {
  color: rgb(67, 67, 67);
}

.buy-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}

.cart-block {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
}

.count {
  text-align: center;
}

.cart-block-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(223, 223, 223);
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 30px;
  margin-bottom: 10px;
  cursor: pointer;
  box-shadow: 5px 5px 10px rgb(203, 204, 199);
}

.cart-block img {
  width: 30px;
  height: 30px;
}

.remove-btn {
  max-width: 20px;
  max-height: 20px;

}

.to-cart {
  background-color: rgb(139, 255, 139);
  width: 190px;
  border-radius: 30px;
  text-align: center;
  box-shadow: 5px 5px 10px rgb(159, 159, 159);
  transition: all 0.5s ease-in-out;
}

.to-cart:hover {
  background-color: rgb(65, 250, 65);
  box-shadow: 5px 10px 10px rgb(142, 142, 142);
}

.to-cart img {
  width: 30px;
  padding-right: 20px;
}

.to-cart p {
  color: black;
}

.to-cart a {
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.cart-block p {
  width: 100px;
}

@media(max-width:920px) {
  .product-container {
    flex-direction: column;
    height: 100%;
    max-height: none;
  }

  .text-block {
    padding-top: 20px;
    flex-direction: row;
    justify-content: space-around;
  }

  .description-block {
    width: 50%;
    padding-right: 30px;
    border-right: 1px solid gray;
  }

  .images-block {
    width: 80%;
    min-width: 80%;
    align-self: center;
  }
  .buy-block{
    padding-left: 20px;
  }
}

@media(max-width:500px) {

  .product-container{
    padding-top: 80px;
    max-height: unset !important;
    
  }
  .images-block{
    padding-left: 0;
    padding-right: 0;
    width: 90%;
    max-height: unset !important;
    height: 100%;
    min-width: unset !important;
    max-width: unset !important;
    flex-direction: column;
    margin-right: 10px;
    margin-left: 10px;
  }
  .main-image{
    width: 100%;
  }
  .main-image img{
    height: 400px;
  }
  .aside-images{
    grid-template-columns: repeat(3, 33%);
    grid-template-rows: 100px 100px;
    order: 1;
    width: 100%;
  }
  .aside-image-container{
    border: 0px;
  }
  .text-block{
    flex-direction: column;
    
  }
  .description-block{
    width: 100%;
    border-right: 0px;
    padding-right: 0;
    border-bottom: 1px solid gray;
  }
  .text-description{
    width: 100%;
  }
  .buy-block{
    align-items: center;
    padding-left: 0px;
  }
  .cart-block{
    justify-content: center;
  }
  .to-cart {
    width: 170px;
  }

  .to-cart img {
    width: 25px;
  }
  .cart-block-btn{
    width: 150px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .cart-block-btn img{
    width: 25px;
    height: 25px;
  }
  .remove-btn{
    width: 15px !important;
    height: 15px !important;
  }
}</style>
