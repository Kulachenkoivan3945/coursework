<template>
  <div class="card">
    <div class="slider">
      <SliderComponent :images="CardInfo.slidersImgs"></SliderComponent>
    </div>
    <div class="description">
      <p>
        {{CardInfo.description}}
      </p>
    </div>
  </div>
</template>

<script>
import SliderComponent from '@/components/SliderComponent.vue'

export default {
  name: 'CardAbout',
  components: {
    SliderComponent
  },
  props: {
    CardInfo: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card{
    padding: 20px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: aliceblue;
    border-radius: 20px;
  }
  .description{
    padding: 30px;
    padding-bottom: 10px;
  }
</style>
