<template>
	<div>
		<v-navigation-drawer app overflow color="#232323">
			<img alt="Vue logo" src="../.././../public/unvrsLogo.svg" />

			<template v-if="!isLogged">
				<v-btn tile block color="#4fc3ff" class="white--text" to="/login">Login</v-btn>
				<v-btn tile block color="#4fc3ff" class="white--text" to="/register">Register</v-btn>
			</template>

			<template v-else>
				<v-btn tile block color="#4fc3ff" class="white--text">Administrators</v-btn>
				<v-btn tile block color="#4fc3ff" class="white--text" to="/products">Products</v-btn>
				<v-btn tile block color="#4fc3ff" class="white--text">Integration notes</v-btn>
				<v-btn tile block color="#4fc3ff" class="white--text">Deployment notes</v-btn>
				<v-btn tile block color="#4fc3ff" class="white--text">Release notes</v-btn>
        <v-divider></v-divider>
				<v-btn tile block color="#4fc3ff" class="white--text" to="/logout">Logout</v-btn>
			</template>
		</v-navigation-drawer>
	</div>
</template>

<script>
export default {
	name: "AppNavigation",
	data() {
    return {
      isLogged: !!this.$store.state.user.currentUser
    }
  },
};
</script>