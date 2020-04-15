<template>
		<v-row justify="center">
			<v-expansion-panels accordion focusable multiple>
				<DetailsAccordion></DetailsAccordion>
				<BranchAccordion></BranchAccordion>
			</v-expansion-panels>
		</v-row>
</template>

<script>
import { userHelpers } from "@/store";
import DetailsAccordion from "../accordions/DetailsAccordion";
import BranchAccordion from "../accordions/BranchAccordion";

export default {
	components: {
		DetailsAccordion,
		BranchAccordion
	},
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
		title() {
			return this.editedProductId ? "Edit Product" : "New Product";
		},
		...userHelpers.mapGetters(["allUsers"])
	},
	methods: {
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