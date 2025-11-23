<template>
  <div id="app">
    <HeaderComponent />

    <div class="page">
      <router-view />
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import FooterComponent from './components/Footer.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
};
</script>

<style>

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
}

.page {
  flex: 1;
  padding: 20px;
}

body {
  margin: 0;
  background: #111;
  color: #ddd;
}
</style>
