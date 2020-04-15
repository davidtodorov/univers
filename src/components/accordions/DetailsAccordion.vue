<template>
	<v-expansion-panel>
		<v-expansion-panel-header>Details</v-expansion-panel-header>

		<v-expansion-panel-content>
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
				<v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
				<v-btn color="blue darken-1" text @click="close">Save</v-btn>
			</v-card-actions>
		</v-expansion-panel-content>
	</v-expansion-panel>
</template>

<script>
import { userHelpers } from "@/store";

export default {
	name: 'DetailsAccordion',
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
			selectedAdmins: "",
			name: "",
			description: ""
		};
	},
	computed: {
		...userHelpers.mapGetters(["allUsers"])
	},
	methods: {
		mapForCombobox(items) {
			let mappedItems = items.reduce((acc, val) => {
				acc.push({ text: val.email, value: val._id });
				return acc;
			}, []);
			return mappedItems;
		},
		close(){

		}, 
		save(){

		}
	}
};
</script>

<style>
</style>