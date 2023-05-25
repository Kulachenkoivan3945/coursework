<template>
  <div class="home">
    <CartPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import CartPage from '@/components/CartPage.vue'

export default {
  name: 'CartView',
  components: {
    CartPage
  },
  mounted(){
    window.scrollTo(0, 0)
  }
}
</script>
