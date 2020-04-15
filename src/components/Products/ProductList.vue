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
				<i class="fas fa-edit"></i>
				<i class="fas fa-trash" @click="showAlert(item)"></i>
			</template>
		</v-data-table>
		<div>{{currentUser}}</div>
	</div>
</template>

<script>
import AppNewProduct from "@/components/products/NewProduct";
//import AppEditProduct from "@/components/products/EditProduct";
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
		AppNewProduct,
		//AppEditProduct
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
		deleteProduct(item) {
			this.$store
				.dispatch("product/deleteProduct", item._id)
				.then(() => {
					console.log("product deleted");
				})
				.catch(err => {
					console.log(err);
				});
		},
		
	}
};
</script>

<style scoped>
#newProduct > button {
	margin: 0px !important;
}

.fa-edit {
	margin-right: 20px;
}

.fa-trash {
	color: red;
}

.fa-edit,
.fa-trash {
	font-size: 27px;
}
</style>>