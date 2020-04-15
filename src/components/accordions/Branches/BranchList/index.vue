<template>
	<div>
		<NewBranch></NewBranch>
		<v-list>
			<v-list-item-group v-model="selectedBranchIndex" color="primary">
				<v-list-item v-for="branch in branches" :key="branch._id" @click="selectBranch(branch)">
					<v-list-item-content >
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
		};
	},
	computed: {
		branches() {
			return this.$store.getters['branch/productBranches'];
		}
	},
	methods: {
		selectBranch(){
			// console.log(this.$store.getters['branch/currentBranch'])
			// let item = this.branches[this.selectedBranchIndex];
			// console.log("selected item " + item)
			// this.$store.commit('branch/setCurrentBranch', item);
			// console.log(this.$store.getters['branch/currentBranch'])
		}
	},
	watch: {
		selectedBranchIndex(newVal){
			let item = this.branches[newVal];
			this.$store.commit('branch/setCurrentBranch', item);
			console.log(item)
		}
	}
};
</script>

<style>
</style>