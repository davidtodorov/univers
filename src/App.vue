<template>
  <v-app>
    <AppNavigation></AppNavigation>
    <AppHeader></AppHeader>
    <v-content>
      <!-- <AppLogin></AppLogin> -->
      <AppRegister></AppRegister>
    </v-content>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import AppNavigation from "./components/core/Navigation";
import AppHeader from "./components/core/Header";
import AppFooter from "./components/core/Footer";
// import AppLogin from "./components/authentication/Login"
import AppRegister from "./components/authentication/Register"

export default {
  name: "App",

  components: {
    AppNavigation,
    AppHeader,
    AppFooter,
    // AppLogin,
    AppRegister
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