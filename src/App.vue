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
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
/* @font-face {
	font-family: "Roboto Light";
	src: url("./assets/fonts/Roboto-Light.ttf") format("woff2");
} */


* {
	font-family: 'Roboto';
}

tbody tr:nth-child(2n) {
  background-color: #f2f2f2 !important;
}

thead tr {
  background-color: #f2f2f2 !important;
}

thead tr * { 
	font-size: 16px
}

thead th span {
	font-weight: bold !important;
	color:black !important;
}

.fa-edit {
	margin-right: 20px;
}

.fa-trash {
	color: red;
}

.fa-edit,
.fa-trash {
	cursor: pointer;
	font-size: 27px;
}
</style>