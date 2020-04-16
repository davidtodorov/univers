<template>
	<v-dialog v-model="showDialog" max-width="500px">
		<template v-slot:activator="{ on }">
			<v-btn color="primary" dark class="mb-2" v-on="on">New Branch</v-btn>
		</template>
		<v-card>
			<v-card-title>
				<span class="headline">New Branch</span>
			</v-card-title>

			<v-card-text>
				<v-row cols="12" sm="6" md="6">
					<v-col cols="12" sm="6" md="6">
						<v-text-field label="Name" v-model="name"></v-text-field>
					</v-col>
					<v-col cols="12" sm="6" md="6">
						<v-text-field label="Description" v-model="description"></v-text-field>
					</v-col>
					<v-col cols="6" sm="6" md="6">
						<v-select
							:items="productVersions"
							v-model="selectedVersion"
							item-text="number"
							item-value="_id"
							return-object
							label="Version"
						></v-select>
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
import { productHelpers } from "@/store";
export default {
	name: "NewBranch",
	data() {
		return {
			name: "",
			description: "",
			selectedVersion: "",
			showDialog: false
		};
	},
	computed: {
		...productHelpers.mapGetters(["currentProduct"]),
		productVersions() {
			return this.$store.getters["version/productVersions"];
		}
	},
	methods: {
		close() {
			this.showDialog = false;
		},
		save() {
			this.$store
				.dispatch("branch/addBranch", {
					name: this.name,
					description: this.description,
					currentVersionId: this.selectedVersion._id,
					productId: this.currentProduct._id
				})
				.then(() => {
					this.showDialog = false;
				})
				.catch(err => console.log(err));
		}
	}
};
</script>

<style>
</style>