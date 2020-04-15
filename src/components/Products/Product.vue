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
import DetailsAccordion from "../accordions/Details";
import BranchAccordion from "../accordions/Branches";

export default {
	components: {
		DetailsAccordion,
		BranchAccordion
	},
	created() {
		console.log(this.$route.params.id);
		this.$store
			.dispatch("product/getProduct", { id: this.$route.params.id })
			.then()
			.catch(err => console.log(err));

		// if (!this.$store.getters("user/allUsers")) {
		// 	this.$store
		// 		.dispatch("user/getAllUsers")
		// 		.then(() => {
		// 			this.isLoading = false;
		// 		})
		// 		.catch(err => {
		// 			console.log(err);
		// 		});
		// }
	},
	data() {
		return {
			name: "",
			description: ""
		};
	},
	computed: {
		...userHelpers.mapGetters(["allUsers"]),
		
	},
	methods: {}
};
</script>

<style>
</style>