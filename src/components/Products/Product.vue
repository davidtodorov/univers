<template>
	<v-row justify="center" v-if="!isLoading">
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
		Promise.all([
			this.$store.dispatch("product/getProduct", {
				id: this.$route.params.id
			}),
			this.$store.dispatch("branch/getProductBranches", {
				productId: this.$route.params.id
			}),
			this.$store.dispatch("version/getProductVersions", {
				productId: this.$route.params.id
			})
		])
			.then(() => {
				this.isLoading = false;
			})
			.catch(err => console.log(err));
	},
	data() {
		return {
			name: "",
			description: "",
			isLoading: true
		};
	},
	computed: {
		...userHelpers.mapGetters(["allUsers"])
	},
	methods: {}
};
</script>

<style>
</style>