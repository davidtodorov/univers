<template>
	<div>
		<NewBranch></NewBranch>
		<v-list>
			<v-list-item-group v-model="selectedBranchIndex" color="primary">
				<v-list-item v-for="branch in branches" :key="branch._id">
					<v-list-item-content>
						<v-list-item-title v-text="branch.name"></v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list-item-group>
		</v-list>
	</div>
</template>

<script>
import NewBranch from "../NewBranch";
export default {
	components: {
		NewBranch
	},
	data() {
		return {
			selectedBranchIndex: 0,
			branches: [
				{ name: "Real-Time", icon: "mdi-clock" },
				{ name: "Audience", icon: "mdi-account" },
				{ name: "Conversions", icon: "mdi-flag" }
			]
		};
	},
	method: {
		addNewBranch() {}
	}
};
</script>

<style>
</style>