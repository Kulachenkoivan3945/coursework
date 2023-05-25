<template>
  <div id="app">
    <header>
      <NavbarComponent :pages="pages" />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <FooterPanel />
    </footer>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterPanel from '@/components/FooterComponent.vue';
export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterPanel
  },
  data() {
    return {
      pages: [{
        name: 'Главная',
        path: '/'
      }, {
        name: 'Цветы',
        path: '/products'
      },
      {
        name: 'Корзина',
        path: '/cart'
      }]
    }
  }
};
</script>
<style>
@font-face {
  font-family: 'Montserrat';
  src: url('assets/fonts/Montserrat/static/Montserrat-Regular.ttf');
}

body {
  margin: 0;
  overflow-x: hidden;
  width: 100vw;
  max-width: 100vw;
}

* {
  font-family: 'Montserrat';
}

p {
  font-size: 1rem;
}

#app {
  width: 100vw;
  max-width: 100vw;
}

::-webkit-scrollbar {
  display: none;
}

@media(max-width:1000px) {
  html{
    font-size: 15px;
  }
}

@media(max-width:700px) {
  html{
    font-size: 13px;
  }
}

@media(max-width:500px) {
  html{
    font-size: 12px;
  }
}
</style>
