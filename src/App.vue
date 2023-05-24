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
        name: 'Продукты',
        path: '/products'
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
  overflow-x:hidden;
  width: 100vw;
  max-width: 100vw;
}

* {
  font-family: 'Montserrat';
}
#app{
  width: 100vw;
  max-width: 100vw;
}
</style>
