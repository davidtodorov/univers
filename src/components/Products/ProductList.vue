<template>
	<div class="container">
		<v-container>
			<v-row>
				<h1 style="display:inline-block" class="display-3">Products</h1>
				<v-spacer></v-spacer>
				<v-text-field
					v-model="search"
					label="Search"
					single-line
					hide-details
					append-icon="fas fa-search"
					color="black"
				></v-text-field>
			</v-row>
		</v-container>
		<AppNewProduct></AppNewProduct>
		<!-- <AppEditProduct></AppEditProduct> -->
		<v-data-table
			:headers="headers"
			:items="products"
			:items-per-page="5"
			:search="search"
			:loading="isGridLoading"
			class="elevation-1"
			item-key="_id"
			disable-pagination
			hide-default-footer
			@click:row="showAlert"
		>
			<template v-slot:item.actions="{ item }">
				<div v-if="checkIfUserIsAdmin(item)">
					<i class="fas fa-edit" @click="editProduct(item)"></i>
					<i class="fas fa-trash" @click="deleteProduct(item)"></i>
				</div>
			</template>
		</v-data-table>
	</div>
</template>

<script>
import AppNewProduct from "@/components/products/NewProduct";
import { productHelpers } from "@/store";
import { userHelpers } from "@/store";

const headers = [
	{
		text: "Name",
		align: "start",
		value: "name",
		width: "750px",
		divider: true
	},
	{ text: "Description", value: "description", divider: true },
	{ text: "Actions", value: "actions", sortable: false, width: "125px" }
];

export default {
	components: {
		AppNewProduct
	},
	created() {
		this.isGridLoading = true;
		this.$store
			.dispatch("product/getProducts")
			.then(() => {
				console.log("products query done");
				this.isGridLoading = false;
			})
			.catch(err => {
				console.log(err);
			});
	},
	data() {
		return {
			headers,
			showDialog: false,
			search: "",
			isGridLoading: false
		};
	},
	computed: {
		...productHelpers.mapGetters(["products"]),
		...userHelpers.mapGetters(["currentUser"])
	},
	methods: {
		showAlert(item) {
			console.log(item);
		},
		editProduct(item) {
			this.$router.push({ name: "Product", params: { id: item._id } });
		},
		deleteProduct(item) {
			this.$store
				.dispatch("product/deleteProduct", { id: item._id })
				.then(() => {
					return Promise.resolve();
				})
				.catch(err => {
					console.log(err);
				});
		},
		checkIfUserIsAdmin(item) {
			return (
				item.creator === this.currentUser._id ||
				!!item.admins.find(x => x._id === this.currentUser._id)
			);
		}
	}
};
</script>

<style scoped>
#newProduct > button {
	margin: 0px !important;
}
</style>>