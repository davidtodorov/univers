<template>
	<v-expansion-panel v-if="!isLoading">
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
							:items="itens"
							v-model="selectedItem"
							item-text="text"
							label="Cartório"
							single-line
							return-object
							multiple
						></v-combobox>
						<div>{{selectedItem}}</div>
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
	name: "Details",
	created() {
		this.$store
			.dispatch("user/getAllUsers")
			.then(() => {
				this.isLoading = false;
			})
			.catch(err => {
				console.log(err);
			});
	},
	data() {
		return {
			isLoading: true,
			selectedItem: [
				{
					text: "a",
					value: 1
				},
				{
					text: "b",
					value: 2
				},
				{
					text: "c",
					value: 3
				}
			],
			itens: [
				{
					text: "a",
					value: 1
				},
				{
					text: "b",
					value: 2
				},
				{
					text: "c",
					value: 3
				}
			]
		};
	},
	computed: {
		...userHelpers.mapGetters(["allUsers"]),
		name() {
			return this.$store.getters["product/currentProduct"].name || "";
		},
		description() {
			return (
				this.$store.getters["product/currentProduct"].description || ""
			);
		},
		selectedAdmins: {
			get() {
				if (this.$store.getters["product/currentProduct"]) {
					let mappedAdmins = this.$store.getters[
						"product/currentProduct"
					].admins.reduce((acc, val) => {
						acc.push({ text: val.email, value: val._id });
						return acc;
					}, []);
					return mappedAdmins;
				}
				return "";
			},
			set(val) {
				// eslint-disable-next-line no-debugger
				debugger;
				return val;
			}
		}
	},
	methods: {
		mapForCombobox(items) {
			let mappedItems = items.reduce((acc, val) => {
				acc.push({ text: val.email, value: val._id });
				return acc;
			}, []);
			return mappedItems;
		},
		close() {},
		save() {}
	}
};
</script>

<style>
</style>