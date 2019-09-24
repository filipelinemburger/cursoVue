<template>
  <v-app>
    <MenuDefault />
    <HeaderCarrossel />
    <Carrossel />
    <Footer />
  </v-app>
</template>

<script>
import MenuDefault from "./components/template/MenuDefault";
import HeaderCarrossel from "./HeaderCarrossel.vue";
import Carrossel from "./Carrossel.vue";
import Footer from "./components/template/Footer";
export default {
  components: {
    MenuDefault,
    HeaderCarrossel,
    Carrossel,
    Footer
  }
};
</script>
