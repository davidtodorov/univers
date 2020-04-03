<template>
  <v-app-bar app dense flat class="appBar">
    <v-spacer></v-spacer>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn tile depressed v-on="on">
          <v-icon>far fa-user</v-icon>
          <div id="username">Username</div>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>Edit Profile</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style>
#username {
  margin-left: 10px;
}
</style>
