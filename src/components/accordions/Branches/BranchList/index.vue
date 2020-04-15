<template>
	<div>
		<NewBranch></NewBranch>
		<v-list>
			<v-list-item-group v-model="selectedBranchIndex" color="primary">
				<v-list-item v-for="branch in branches" :key="branch._id">
					<v-list-item-content>
						<v-list-item-title v-text="branch"></v-list-item-title>
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
			
		};
	},
	computed: {
		branches() {
			return this.$store.getters['branch/productBranches'].map(b => b.name)
		}
	},
	method: {
		addNewBranch() {}
	}
};
</script>

<style>
</style>