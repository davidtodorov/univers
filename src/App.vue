<template>
	<v-app v-if="!isLoading">
		<AppNavigation></AppNavigation>
		<AppHeader></AppHeader>
		<v-content>
			<router-view></router-view>
		</v-content>
		<AppFooter></AppFooter>
	</v-app>
</template>

<script>
import AppNavigation from "./components/core/Navigation";
import AppHeader from "./components/core/Header";
import AppFooter from "./components/core/Footer";

import Cookies from "js-cookie";

export default {
	name: "App",
	created() {
		let authCookie = Cookies.get("x-auth-token");
		if (authCookie) {
			this.$store
				.dispatch("user/getCurrentUser")
				.then(() => {
					this.isLoading = false;
				})
				.catch(() => {
					this.$router.push({ name: "Login" }).catch(() => {});
					this.isLoading = false;
				});
		} else {
			this.isLoading = false;
		}
	},
	components: {
		AppNavigation,
		AppHeader,
		AppFooter
	},

	data: () => ({
		isLoading: true
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