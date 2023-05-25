<template>
  <div @click="close" class="modal-container">
    <div class="modal-block">
      <p>{{msg}}</p>
      <p class="close-modal-text">Чтобы закрыть - нажмите в любом месте</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalWindow',
  props:{
    msg: String
  },
  methods: {
      close() {
        this.$emit('close');
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-container{
  z-index: 20;
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.586);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal-block{
  height: 300px;
  background-color: white;
  width: 400px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.close-modal-text{
  color: rgb(179, 0, 18);
}

@media(max-width:500px) {
  .modal-block{
    height: 200px;
    background-color: white;
    width: 300px;
  }
}

@media(max-width:350px) {
  .modal-block{
    height: 200px;
    background-color: white;
    width: 250px;
    text-align: center;
  }
}
</style>
