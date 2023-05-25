<template>
  <div class="cart">
    <div v-if="cart.length > 0" class="cart-container">
      <div class="cart-items">
        <CartItem v-for="item in cart" :key="item.id" :item="item" />
      </div>
      <div class="sum">
        <h3>Итоговая сумма: <span>{{ itemsSumm }}</span></h3>
      </div>
      <div class="form">
        <h3>Введите данные для заказа</h3>
        <form action="" @submit="checkForm">

          <p v-if="errors.length">
            <b>Пожалуйста исправьте указанные ошибки:</b>
            <ul>
              <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
          </p>

          <label>
            <span>Имя</span>
            <input v-model="name" type="text" name="name">
          </label>

          <label>
            <span>Фамилия</span>
            <input v-model="surname" type="text" name="surname">
          </label>

          <label>
            <span>Email</span>
            <input v-model="email" type="email" name="email">
          </label>

          <label>
            <span>Номер телефона</span>
            <input v-model="tel" type="tel" name="tel">
          </label>

          <label>
            <span>Адрес доставки</span>
            <input v-model="adress" type="text" name="adress">
          </label>

          <label>
            <span>Дата доставки</span>
            <input v-model="date" type="date" name="date">
          </label>
          <button type="submit">Заказать</button>
        </form>
      </div>
    </div>
    <div v-else class="empty-cart">
      <h3>На данный момент корзина пуста</h3>
    </div>
    <ModalWindow 
    @close="closeModal"
    v-show="isModalVisible"
    :msg="name + `, Спасибо за ваш Заказ!`"/>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue'
import ModalWindow from '@/components/ModalWindow.vue'

export default {
  name: 'CartPage',
  components: {
    CartItem,
    ModalWindow
  },
  data() {
    return {
      errors: [],
      name: null,
      surname: null,
      email: null,
      tel: null,
      adress: null,
      date: null,
      isModalVisible: false
    }
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push('Укажите имя.');
      }
      if (!this.email) {
        this.errors.push('Укажите электронную почту.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Укажите корректный адрес электронной почты.');
      }

      if (!this.tel) {
        this.errors.push('Укажите номер телефона.');
      } else if (!this.validTel(this.tel)) {
        this.errors.push('Укажите корректный номер телефона.');
      }

      if (!this.tel) {
        this.errors.push('Укажите Телефон.');
      }

      if (!this.adress) {
        this.errors.push('Укажите Адрес доставки.');
      }

      if (!this.date) {
        this.errors.push('Укажите Дату доставки.');
      }
      
      if (!this.errors.length) {
        this.showModal();
      }

      e.preventDefault();
    },
    validEmail(email) {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validTel(tel){
      let re=/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
      return re.test(tel);
    },
    showModal(){
      this.isModalVisible = true;
    },
    closeModal(){
      this.isModalVisible = false;
    }
  },
  computed: {
    cart() {
      return this.$store.state.productsInCart;
    },
    itemsSumm() {
      let summ = 0;
      this.cart.forEach(item => {
        let price = this.$store.getters.getProductById(item.id).price;
        summ += price * item.count;
      });
      return summ;
    }
  },
  mounted() {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart {
  padding: 100px 30px 100px 30px;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  background-image: url("../assets/images/products/products-bg.png");
}

.cart-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cart-items {
  border-radius: 20px;
  border: 1px solid gray;
  width: 70%;
}

.cart-items .cart-item-container:nth-child(odd) {
  background-color: rgba(255, 255, 255, 0.551);
}

.cart-items .cart-item-container:nth-child(even) {
  background-color: rgba(185, 160, 102, 0.153);
}

.cart-items .cart-item-container:last-child {
  border-bottom: none;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.cart-items .cart-item-container:first-child {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.form {
  width: 30%;
  min-width: 350px;
  max-width: 1000px;
  padding: 50px;
  background-color: rgba(255, 255, 255, 0.867);
  border-radius: 20px;
}

.form h3 {
  text-align: center;
  font-weight: 600;
}

.form form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.form input {
  width: 100%;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 10px;
}

.form label {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
}

.form button {
  font-size: 1.25rem;
  padding: 5px 30px;
  background: linear-gradient(to right, rgb(236, 242, 65), rgb(252, 71, 189), rgb(231, 24, 179), rgb(247, 223, 69));
  border: none;
  border-radius: 15px;
  color: white;
  background-size: 300% 100%;
  box-shadow: 0 4px 15px 0 rgba(229, 109, 10, 0.75);
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  border: 0px;
}

.form button:hover {
  background-position: 100% 0;
  box-shadow: 5px 5px 15px 5px rgba(248, 42, 90, 0.816);
}

@media(max-width:700px) {
  .cart {
    padding-left: 0;
    padding-right: 0;
  }

  .cart-items {
    width: 90%;
  }
}

@media(max-width:500px) {
  .cart-items {
    width: 300px;
  }

  .cart-item-container {
    padding-left: 0;
    padding-right: 0;
  }

  .form {
    min-width: 200px;
  }

}</style>
