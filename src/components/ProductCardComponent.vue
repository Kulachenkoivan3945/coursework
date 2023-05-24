<template>
  <div class="product-card">
    <router-link :to="linkOpen">
      <img class="card-image" :src="require(`../assets/images/products/` + productInfo.image)" alt="">
      <p class="title">{{ productInfo.name }}</p>
      <p class="price">{{ productInfo.price }}</p>
    </router-link>
    <div class="cart-block">
      <div v-if="!isInCart" @click="addToCart" class="cart-block-btn">
        <img src="../assets/images/icons/add.png" alt="">
        <p>Добавить</p>
      </div>
      <div v-else class="cart-block-btn">
        <img class="remove-btn" @click="removeFromCart" src="../assets/images/icons/remove.png" alt="">
        <p>{{ countInCart }}</p>
        <img @click="addAnotherOne" src="../assets/images/icons/add.png" alt="">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ProductCardComponent',
  props: ['productInfo'],
  data() {
    return {
      isInCart: false,
      countInCart: 0
    }
  },
  methods: {
    addToCart() {
      if (!this.isInCart) {
        this.isInCart = true;
        this.countInCart++;
        this.$store.commit('addToCart',this.productId);
      }
    },
    addAnotherOne() {
      this.countInCart++;
      this.$store.commit('addToCart',this.productId);
    },
    removeFromCart() {
      if (this.countInCart <= 1) {
        this.isInCart = false;
        this.countInCart = 0;
      }
      else this.countInCart--;
      this.$store.commit('removeFromCart',this.productId);
    }
  },
  computed:{
    linkOpen(){
      return `/products/${this.productInfo.id}`;
    },
    productId() {
      return +this.productInfo.id;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-card {
  background-color: rgba(252, 253, 254, 0.47);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  transition: all 0.5s ease-in-out;
  min-height: 100%;
  max-height: 100%;
  height: 100%;

}
a{
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  width: 100%;
}
.card-image {
  margin-top: 20px;
  width: 90%;
  min-height: 300px;
  max-height: 300px;
  object-fit: cover;
  border-radius: 20px;
}

.product-card:hover {
  box-shadow: 5px 5px 15px gray;
}

.product-card p {
  width: 80%;
  word-wrap: break-word;
  text-align: center;
}

.cart-block {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.cart-block-btn {
  display: flex;
  align-items: center;
  background-color: rgb(238, 238, 238);
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 30px;
  margin-bottom: 10px;
  cursor: pointer;
}

.cart-block img {
  width: 30px;
  height: 30px;
}

.remove-btn {
  max-width: 20px;
  max-height: 20px;

}

.cart-block p {
  width: 100px;
}
</style>
