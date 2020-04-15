<template>
	<v-tab-item>
		<v-card flat>
			<v-card-text>
				<v-row cols="12" sm="6" md="6">
					<v-col cols="12" sm="6" md="6">
						<v-text-field label="Name" v-model="name"></v-text-field>
					</v-col>
					<v-col cols="12" sm="6" md="6">
						<v-text-field label="Description" v-model="description"></v-text-field>
					</v-col>
				</v-row>
				<v-row cols="12" sm="6" md="6">
					<v-col cols="6" sm="6" md="6">
						<v-combobox v-model="selectedBranches" :items="branches" label="Version" multiple chips></v-combobox>
					</v-col>
					<v-col cols="6" sm="6" md="6">
						<v-switch v-model="canRelease" label="Can Release" color="primary" value="primary" hide-details></v-switch>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
	</v-tab-item>
</template>



<script>
export default {
	name: "GeneralTab",
	data() {
		return {
			branches: [{ text: "smth", key: "smth" }],
			selectedBranches: null
		};
	},
	computed: {
		name() {
			return (
				(this.$store.getters["branch/currentBranch"] &&
					this.$store.getters["branch/currentBranch"].name) ||
				""
			);
		},
		description() {
			return (
				(this.$store.getters["branch/currentBranch"] &&
					this.$store.getters["branch/currentBranch"].description) ||
				""
			);
		},
		canRelease() {
			return (
				(this.$store.getters["branch/currentBranch"] &&
					this.$store.getters["branch/currentBranch"].canRelease) ||
				false
			);
		}
	}
};
</script>

<style>
</style>