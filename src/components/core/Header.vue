<template>
	<v-app-bar app dense flat class="appBar">
		<v-spacer></v-spacer>
		<v-menu offset-y v-if="user">
			<template v-slot:activator="{ on }">
				<v-btn tile depressed v-on="on">
					<v-icon>far fa-user</v-icon>
					<div id="user">{{user}}</div>
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
//import { userHelpers } from "@/store";

export default {
	name: "AppHeader",
	data() {
		return {};
	},
	computed: {
		user() {
			return (
				this.$store.getters["user/currentUser"] &&
				this.$store.getters["user/currentUser"].email
			);
		}
	}
};
</script>

<style>
#user {
	margin-left: 10px;
}
</style>
