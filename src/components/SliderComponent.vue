<template>
  <div class="container">
    <div class="btn-container">
      <img class="btn-left" @click="prevImage" src="../assets/images/icons/slider-left-btn.png" alt="">
    </div>
    <div class="img-container" >
      <img :src="itemImage" 
      :class="changeState == 0 ? '' : 'changed-image'"
      alt="">
    </div>
    <div class="btn-container">
      <img class="btn-right" @click="nextImage" src="../assets/images/icons/slider-right-btn.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderComponent',
  props: {
    images: Array
  },
  data() {
    return {
      currentImage: 0,
      changeState: 0
    }
  },
  methods: {
    nextImage() {
      this.changeState = 2;
      setTimeout(() => {
        this.changeState = 0;
        if (this.currentImage >= this.images.length - 1) this.currentImage = 0;
        else this.currentImage++;
      }, 500);
    },
    prevImage() {

      this.changeState = 1;
      setTimeout(() => {
        this.changeState = 0;
        if (this.currentImage <= 0) this.currentImage = this.images.length - 1;
        else this.currentImage--;
      }, 500);
    }
  },
  computed: {
    itemImage() {

      const fileName = this.images[this.currentImage].toLowerCase();
      console.log(fileName);
      return require(`../assets/images/gallery/${fileName}`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  /*background-image: url("../assets/images/mainPage/slider-bg.jpg");*/
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.img-container {
  width: 90%;
  min-height: 300px;
  max-height: 300px;
  overflow: hidden;
}

.img-container img {
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  max-height: 100%;
  min-height: 100%;
  object-fit: cover;
  border-radius: 30px;
  transition: all 0.5s ease-in-out;
}

.btn-container {
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  transition: 0.5s all ease-in-out;
}

.btn-container img {
  width: 50px;
  height: 80px;
  opacity: 0.7;
  transition: 0.5s all ease-in-out;
}
.btn-left:hover{
  transform: translateX(-10px);
}
.btn-right:hover{
  transform: translateX(10px);
}
.changed-image{
  opacity: 0;
}

@media(max-width:700px) {
  .btn-container img{
    width: 30px;
    height: 50px;
  }
  .btn-left:hover{
    transform: translateX(-7px);
  }
  .btn-right:hover{
    transform: translateX(7px);
  }
  .img-container{
    min-height: 250px;
    max-height: 250px;
  }
}

@media(max-width:550px) {
  .btn-container img{
    width: 25px;
    height: 45px;
  }
  .img-container{
    min-height: 200px;
    max-height: 200px;
  }
}
</style>
