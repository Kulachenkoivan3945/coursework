<template>
  <div class="cart-item-container">
    <div class="cart-item-description">
      <router-link :to="'/products/'+itemInfo.id">
        <img class="cart-img" :src="require(`../assets/images/products/` + itemInfo.image)" alt="">
      </router-link>
      <div class="text-description">
        <p class="bold">{{ itemInfo.name }}</p>
        <p>Цена: <span class="bold">{{ itemInfo.price }}₽</span></p>
        <div class="cart-block">
          <div class="cart-block-btn">
            <img class="remove-btn" @click="removeFromCart" src="../assets/images/icons/remove.png" alt="">
            <p v-if="countInCart" class="count">{{ countInCart }}</p>
            <p v-else class="count">0</p>
            <img @click="addAnotherOne" src="../assets/images/icons/add.png" alt="">
          </div>
        </div>
        <p>Итого: <span class="bold">{{ itemInfo.price * countInCart }}₽</span></p>
      </div>
      <div class="delete-btn">
        <img @click="deleteFromCart" src="../assets/images/icons/delete.png" alt="">
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: ['item'],
  computed: {
    itemInfo() {
      return this.$store.getters.getProductById(this.item.id);
    },
    countInCart() {
      return this.$store.getters.getCountInCartById(this.item.id);
    }
  },
  methods: {
    changeMainPhoto(src) {
      this.mainImage = src;
      this.isChanged = true;

    },
    addAnotherOne() {
      this.$store.commit('addToCart', this.item.id);
    },
    removeFromCart() {
      this.$store.commit('removeFromCart', this.item.id);
    },
    deleteFromCart() {
      this.$store.commit('deleteFromCart', this.item.id);
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bold {
  font-weight: bold;
}

.cart-item-container {
  border-bottom: 1px solid gray;
  padding: 10px;
}

.cart-item-description {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.cart-img {
  width: 180px;
  height: 160px;
  border-radius: 20px;
  align-self: center;
}

.text-description {
  width: 60%;
  margin-left: 50px;
}

.cart-block-btn {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgb(223, 223, 223);
  width: 150px;
  border-radius: 30px;
  margin-bottom: 10px;
  cursor: pointer;
  box-shadow: 5px 5px 10px rgb(203, 204, 199);

}

.cart-block-btn p {
  margin: 5px;
}

.cart-block img {
  width: 20px;
  height: 20px;
}

.remove-btn {
  max-width: 15px;
  max-height: 15px;

}

.delete-btn {
  align-self: flex-start;
  justify-content: flex-end;
}

.delete-btn img {
  width: 35px;
  height: 35px;
  border-radius: 0px;
  cursor: pointer;
}

@media(max-width:900px) {
  .cart-img {
    width: 150px;
    height: 120px;
  }
}

@media(max-width:500px) {
  .cart-item-description {
    flex-direction: column;
    width: 300px;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-left: 0;
    padding-right: 0;
  }

  .delete-btn {
    align-self: flex-end;
    margin-right: 40px;
  }

  .delete-btn img {
    height: 25px;
    width: 25px;
  }

  .cart-img {
    width: 200px;
    height: 200px;
  }

  .cart-block {
    display: flex;
    justify-content: center;
  }

  .cart-block-btn {
    margin: 0px !important;
    align-self: center;
    justify-self: center;
  }

  .text-description {
    margin-left: 0px;
  }
}</style>
