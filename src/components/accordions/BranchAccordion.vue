<template>
	<v-expansion-panel>
		<v-expansion-panel-header>Branches</v-expansion-panel-header>

		<v-expansion-panel-content>
			<v-row>
				<v-col cols="2">
					<v-list>
						<v-list-item-group v-model="selectedBranchIndex" color="primary">
							<v-list-item v-for="(item, i) in items" :key="i">
								<v-list-item-content>
									<v-list-item-title v-text="item.text"></v-list-item-title>
								</v-list-item-content>
							</v-list-item>
						</v-list-item-group>
					</v-list>
				</v-col>
				<v-col>
					<BranchTabs></BranchTabs>
				</v-col>
			</v-row>
		</v-expansion-panel-content>
	</v-expansion-panel>
</template>

<script>
import { userHelpers } from "@/store";
import BranchTabs from "./branchTabs/index"

export default {
	name: "BranchAccordion",
	components: {
		BranchTabs
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
			selectedBranchIndex: 0,
			items: [
				{ text: "Real-Time", icon: "mdi-clock" },
				{ text: "Audience", icon: "mdi-account" },
				{ text: "Conversions", icon: "mdi-flag" }
			]
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
		}
	}
};
</script>

<style>
</style>