<template>
	<v-dialog v-model="showDialog" max-width="800px">
		<template v-slot:activator="{ on }">
			<v-btn color="primary" dark class="mb-2" v-on="on">New Environment</v-btn>
		</template>
		<v-card>
			<v-card-title>
				<span class="headline">New Environment</span>
			</v-card-title>

			<v-card-text>
				<v-row cols="3" sm="3" md="3">
					<v-col cols="3" sm="3" md="3">
						<v-text-field label="Name" v-model="name"></v-text-field>
					</v-col>
					<v-col cols="3" sm="3" md="3">
						<v-text-field label="Description" v-model="description"></v-text-field>
					</v-col>
					<v-col cols="3" sm="3" md="3">
						<v-select
							:items="productBranches"
							v-model="selectedBranch"
							item-text="name"
							item-value="_id"
							return-object
							label="Branch"
						></v-select>
					</v-col>
					<v-col cols="3" sm="3" md="3">
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
                <!-- <v-row cols="3" sm="3" md="3">
					<v-col cols="3" sm="3" md="3">
						<v-text-field label="Web Address Name" v-model="webAddressName"></v-text-field>
					</v-col>
					<v-col cols="3" sm="3" md="3">
						<v-text-field label="URL" v-model="url"></v-text-field>
					</v-col>
                    <v-col cols="3" sm="3" md="3">
						<v-text-field label="Server" v-model="server"></v-text-field>
					</v-col>
                    <v-col cols="3" sm="3" md="3">
						<v-text-field label="Database" v-model="dbName"></v-text-field>
					</v-col>
					
				</v-row> -->
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

const headers = [
	{
		text: "Name",
		align: "start",
		value: "number",
		width: "750px",
		divider: true
	},
	{ text: "Actions", value: "actions", sortable: false, width: "125px" }
]
export default {
	name: "NewBranch",
	data() {
		return {
			name: "",
			description: "",
			selectedBranch: "",
			selectedVersion: "",
            headers,
            webAddressName: "",
            url: "",
            server: "",
            dbName: "",
            showDialog: false,
		};
	},
	computed: {
		...productHelpers.mapGetters(["currentProduct"]),
		productBranches() {
			return this.$store.getters["branch/productBranches"];
		},
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
				.dispatch("environment/addEnvironment", {
					name: this.name,
                    description: this.description,
                    versionId: this.selectedVersion._id,
                    branchId: this.selectedBranch._id,
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