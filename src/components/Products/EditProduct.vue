<template>
	<v-dialog v-model="showDialog" max-width="500px">
		<template v-slot:activator="{ on }">
			<v-row>
				<v-col>
					<div id="editProduct">
						<v-btn color="primary" dark class="mb-2" v-on="on">Edit Item</v-btn>
					</div>
				</v-col>
			</v-row>
		</template>
		<v-card>
			<v-card-title>
				<span class="headline">Edit Product</span>
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
				<v-row cols="12" sm="6" md="6">
					<v-col cols="12" sm="12" md="12">
						<v-combobox
							v-model="selectedAdmins"
							:items="mapForCombobox(allUsers)"
							label="Select Admins"
							multiple
							chips
						></v-combobox>
					</v-col>
				</v-row>
			</v-card-text>

			<v-card-actions>
				<v-spacer></v-spacer>
				<div>{{selectedAdmins}}</div>
				<v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
				<v-btn color="blue darken-1" text @click="save">Save</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import { userHelpers } from "@/store";

export default {
	name: "AppEditProduct",
	created() {
		this.$store
			.dispatch("user/getAllUsers")
			.then(() => {})
			.catch(err => {
				console.log(err);
			});
	},
	data() {
		return {
			defaultProduct: {
				name: "",
				description: "",
				selectedAdmins: [],
				showDialog: false
			},
			editedProduct: {
				name: "",
				description: "",
				selectedAdmins: [],
				showDialog: false
            },
            editedProductId: null,
		};
	},
	computed: {
        title(){
            return this.editedProductId ? 'Edit Product' : 'New Product'
        },
		...userHelpers.mapGetters(["allUsers"])
	},
	methods: {
		save() {
			this.$store
				.dispatch("product/addProduct", {
					name: this.name,
					description: this.description
				})
				.then(() => {
					this.showDialog = false;
					this.clearFields();
				})
				.catch(err => {
					console.log(err);
				});
		},
		close() {
			this.showDialog = false;
			this.clearFields();
		},
		clearFields() {
			(this.name = ""), (this.description = "");
		},
		mapForCombobox(items) {
			let mappedItems = items.reduce((acc, val) => {
				acc.push({ text: val.email, value: val._id });
				return acc;
			}, []);
			return mappedItems;
		}
	}
};
</script>
	
<style>
</style>