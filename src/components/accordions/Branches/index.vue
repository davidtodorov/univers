<template>
	<v-expansion-panel>
		<v-expansion-panel-header>Branches</v-expansion-panel-header>
		<v-expansion-panel-content>
			<v-row>
				<v-col cols="2">
					<BranchList></BranchList>
				</v-col>
				<v-col>
					<BranchTabs></BranchTabs>
				</v-col>
			</v-row>
		</v-expansion-panel-content>
	</v-expansion-panel>
</template>

<script>
import BranchTabs from "./Tabs/index"
import BranchList from "./BranchList/index"

export default {
	name: "BranchAccordion",
	components: {
        BranchList,
		BranchTabs
	},
	data() {
		return {
			
		};
	},
	computed: {
		
	},
	methods: {
		
	}
};
</script>

<style>
</style>