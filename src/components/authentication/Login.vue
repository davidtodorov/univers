<template>
	<AppAuthenticationForm title="Login" :submitHandler="submitLogin" :allFieldsAreValid="true">
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
			<v-alert v-if="errorMessage" icon="far fa-user" color="red" text outlined>{{errorMessage}}</v-alert>
		</v-form>
	</AppAuthenticationForm>
</template>

<script>
import AppAuthenticationForm from "./AuthenticationForm";

export default {
	components: {
		AppAuthenticationForm
	},
	data: () => {
		return {
			email: "",
			password: "",
			errorMessage: ""
		};
	},
	methods: {
		submitLogin() {
			this.$store
				.dispatch("user/login", {
					email: this.email,
					password: this.password
				})
				.then(() => {
					this.$router.push({ name: "ProductList" });
				})
				.catch(err => {
					this.errorMessage = err.response.data;
				});
		}
	},
	props: {
		source: String
	}
};
</script>