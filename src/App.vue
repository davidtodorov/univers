<template>
  <v-app>
    <AppNavigation></AppNavigation>
    <AppHeader></AppHeader>
    <v-content>
    </v-content>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import AppNavigation from "./components/core/Navigation";
import AppHeader from "./components/core/Header";
import AppFooter from "./components/core/Footer";

export default {
  name: "App",

  components: {
    AppNavigation,
    AppHeader,
    AppFooter
  },

  data: () => ({
    //
  })
};
</script>

<style>
@font-face {
  font-family: "Roboto Light";
  src: url("./assets/fonts/Roboto-Light.ttf") format("woff2");
}

* {
  font-family: "Roboto Light";
}
</style>