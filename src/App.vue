<template>
  <v-app>
    <AppNavigation></AppNavigation>
    <AppHeader></AppHeader>
    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import AppNavigation from "./components/core/Navigation";
import AppHeader from "./components/core/Header";

export default {
  name: "App",

  components: {
    HelloWorld,
    AppNavigation,
    AppHeader
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