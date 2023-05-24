<template>
  <div class="home">
    <ProductCardPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCardPage from '@/components/ProductCardPage.vue'

export default {
  name: 'ProductsView',
  components: {
    ProductCardPage
  }
}
</script>
