<template>
  <div class="home">
    <MainPageComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPageComponent from '@/components/MainPageComponent.vue'

export default {
  name: 'MainView',
  components: {
    MainPageComponent
  }
}
</script>
