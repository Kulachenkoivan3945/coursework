<template>
  <div class="container">
    <img :src="require(`../assets/images/icons/` + image)" alt="" class="icon">
    <h3 class="title">{{title}}</h3>
    <p class="description">{{description}}</p>
  </div>
</template>

<script>
export default {
  name: 'PrivelegeCard',
  props:{
    image: String,
    title: String,
    description: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 22px;
    width: 80%;
    min-height: 100%;
    max-height: 100%;
    padding: 10px ;
    margin-left: 20px;
    margin-right: 20px;
    background-color: rgba(255, 255, 255, 0.858);
    box-shadow: 5px 10px 15px gray;
    transition: all 0.5s ease-in-out;
    text-align:start;
  }
  .description{
    padding-left: 10px;
    padding-right: 10px;
    width: 80%;
  }
  .container:hover{
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 10px 15px 15px rgb(84, 84, 84);
  }
  .icon{
    width: 80px;
  }
</style>
