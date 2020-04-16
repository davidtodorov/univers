<template>
	<v-row justify="center" v-if="!isLoading">
		<v-expansion-panels accordion focusable multiple>
			<DetailsAccordion :admins="productAdmins"></DetailsAccordion>
			<BranchAccordion></BranchAccordion>
		</v-expansion-panels>
	</v-row>
</template>

<script>
import { userHelpers } from "@/store";
import DetailsAccordion from "../accordions/Details/Details";
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
			// eslint-disable-next-line no-unused-vars
			.then(([product, branches, versions]) => {
				if (branches.length > 0) {
					this.$store
						.dispatch("version/getBranchVersions", {
							branchId: branches[0]._id
						})
						.then(() => {
							this.isLoading = false;
						})
						.catch(err => console.log(err));
				}
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
		...userHelpers.mapGetters(["allUsers"]),
		productAdmins() {
			return (
				this.mapForCombobox(
					this.$store.getters["product/currentProduct"] &&
						this.$store.getters["product/currentProduct"].admins
				) || ""
			);
		}
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