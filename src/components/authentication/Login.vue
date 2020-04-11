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

import axios from '@/axios'

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
			axios.post("/user/login", {
				email: this.email,
				password: this.password
			}).then((res) => {
				console.log(res)
				this.$router.push({name: 'ProductList'});
			}).catch(err => {
				console.log(err.response.data);
			})
		}
	},
	props: {
		source: String
	}
};
</script>