<template>
<div>
  <v-navigation-drawer
      app
      overflow
      color="#232323"
  >
    <img alt="Vue logo" src="../.././../public/unvrsLogo.svg">

    <v-btn tile block color="#4fc3ff" class="white--text">Administrators</v-btn>
    <v-btn tile block color="#4fc3ff" class="white--text">Projects</v-btn>
    <v-btn tile block color="#4fc3ff" class="white--text">Integration notes</v-btn>
    <v-btn tile block color="#4fc3ff" class="white--text">Deployment notes</v-btn>
    <v-btn tile block color="#4fc3ff" class="white--text">Release notes</v-btn>
  </v-navigation-drawer>


</div>
</template>

<script>
export default {
  name: 'AppNavigation',
  data: () => {
    return {}
  }
}
</script>