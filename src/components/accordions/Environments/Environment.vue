<template>
	<v-expansion-panel>
		<v-expansion-panel-header>Environments</v-expansion-panel-header>

		<v-expansion-panel-content>
			<v-card-text>
				<AppNewEnvironment></AppNewEnvironment>
				<v-data-table
					:headers="headers"
					:items="environments"
					class="elevation-1"
					item-key="_id"
					disable-pagination
					hide-default-footer
				>
					<!-- <template v-slot:item.actions="{ item }"> -->
					<template v-slot:item.actions>
						<i class="fas fa-trash"></i>
					</template>
				</v-data-table>
			</v-card-text>
		</v-expansion-panel-content>
	</v-expansion-panel>
</template>

<script>
import AppNewEnvironment from "./NewEnvironment";

export default {
	name: "AppEnvironment",
	components: {
		AppNewEnvironment
	},
	created() {
		this.$store
			.dispatch("environment/getProductEnvironments", {
				productId: this.$route.params.id
			})
			.then(() => {})
			.catch(err => {
				console.log(err);
			});
	},
	data() {
		return {
			selectedAdmins: this.admins,
			headers: [
				{
					text: "Name",
					align: "start",
					value: "name",
					divider: true
				},
				{
					text: "Description",
					align: "start",
					value: "description",
					divider: true
				},
				{
					text: "Branch",
					align: "start",
					value: "branch.name",
					divider: true
				},
				{
					text: "Version",
					align: "start",
					value: "version.number",
					divider: true
				},
				{
					text: "Actions",
					value: "actions",
					sortable: false,
					width: "125px"
				}
			]
		};
	},
	computed: {
		environments() {
			return this.$store.getters["environment/productEnvironments"];
		}
	},
	methods: {
		close() {},
		save() {
			let newValArray = Array.from(this.selectedAdmins).map(x => x.value);
			this.$store
				.dispatch("product/updateProduct", {
					id: this.$store.getters["product/currentProduct"]._id,
					name: this.name,
					description: this.description,
					admins: newValArray
				})
				.then()
				.catch(err => console.log(err.response.data));
			// this.$store.commit(
			// 	"product/setCurrentProductAdmins",
			// 	Array.from(newAdmins)
			// );
		}
	}
};
</script>

<style>
</style>