<template>
  <div class="home">
    <ProductsPageComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductsPageComponent from '@/components/ProductsPageComponent.vue'

export default {
  name: 'ProductsView',
  components: {
    ProductsPageComponent
  },
  mounted(){
    window.scrollTo(0, 0)
  }
}
</script>
