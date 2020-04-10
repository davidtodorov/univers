<template>
	<AppAuthenticationForm title="Login" :submitHandler="submitLogin">
		<v-form>
			<v-text-field label="Email" name="email" type="text" color="#232323" v-model="email" />

			<v-text-field
				id="password"
				label="Password"
				name="password"
				type="password"
				color="#232323"
				v-model="password"
			/>
		</v-form>
	</AppAuthenticationForm>
</template>

<script>
import AppAuthenticationForm from "./AuthenticationForm";

import firebase from "@/firebase.js";

export default {
	components: {
		AppAuthenticationForm
	},
	data: () => {
		return {
			email: "",
			password: ""
		};
	},
	methods: {
		submitLogin() {
			firebase.auth
				.signInWithEmailAndPassword(this.email, this.password)
				.then(user => {
					this.$store.commit("setCurrentUser", user);
					this.$store.dispatch("fetchUserProfile");
					this.$router.push("/dashboard");
				})
				.catch(err => {
					console.log(err);
				});
		}
	},
	props: {
		source: String
	}
};
</script>