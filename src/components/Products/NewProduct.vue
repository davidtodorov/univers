<template>
	<v-dialog v-model="showDialog" max-width="500px">
		<template v-slot:activator="{ on }">
			<v-row>
				<v-col>
					<div id="newProduct">
						<v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
					</div>
				</v-col>
			</v-row>
		</template>
		<v-card>
			<v-card-title>
				<span class="headline">New Product</span>
			</v-card-title>

			<v-card-text>
				<v-row cols="12" sm="6" md="6">
					<v-col cols="12" sm="6" md="6">
						<v-text-field label="Name" v-model="name"></v-text-field>
					</v-col>
					<v-col cols="12" sm="6" md="6">
						<v-text-field label="Description" v-model="description"></v-text-field>
					</v-col>
				</v-row>
			</v-card-text>

			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
				<v-btn color="blue darken-1" text @click="save">Save</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>

import axios from '@/axios'

export default {
	name: "AppNewProduct",
	data() {
		return {
			name: '',
			description: '',
			showDialog: false
		};
	},
	methods: {
		save() {
			console.log(this)
			axios.post('/products', {
				name: this.name,
				description: this.description
			}).then(() => {
				this.$router.push({name: 'ProductList'})
			}).catch(err => {
				console.log(err)
			});
		},
		close() {
			console.log(this)
			this.showDialog = false;
		}
	}
};
</script>
	
<style>
</style>