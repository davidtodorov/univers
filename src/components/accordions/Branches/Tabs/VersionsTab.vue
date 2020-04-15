<template>
	<v-tab-item>
		<v-card flat>
			<v-card-text>
				<v-data-table
					:headers="headers"
					:items="products"
					class="elevation-1"
					item-key="_id"
					disable-pagination
					hide-default-footer
				>
					<!-- <template v-slot:item.actions="{ item }"> -->
					<template v-slot:item.actions>
						<i class="fas fa-edit"></i>
						<i class="fas fa-trash"></i>
					</template>
				</v-data-table>
			</v-card-text>
		</v-card>
	</v-tab-item>
</template>



<script>
import { productHelpers } from "@/store";
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
	name: "GeneralTab",
	components: {},
	data() {
		return {
			name: "",
			description: "",
			branches: [{ text: "smth", key: "smth" }],
			selectedBranches: null,
			headers
		};
	},
	computed: {
		...productHelpers.mapGetters(["products"])
	}
};
</script>

<style>
</style>