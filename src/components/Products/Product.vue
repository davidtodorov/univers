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
		
	}
};
</script>

<style>
</style>