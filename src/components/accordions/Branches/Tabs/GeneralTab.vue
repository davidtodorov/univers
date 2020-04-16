<template>
	<v-tab-item>
		<v-card flat>
			<v-card-text>
				<v-row cols="12" sm="6" md="6">
					<v-col cols="12" sm="6" md="6">
						<v-text-field outlined label="Name" v-model="name"></v-text-field>
					</v-col>
					<v-col cols="12" sm="6" md="6">
						<v-text-field outlined label="Description" v-model="description"></v-text-field>
					</v-col>
				</v-row>
				<v-row cols="12" sm="6" md="6">
					<v-col cols="6" sm="6" md="6">
						<v-select
							outlined
							v-model="selectedBranches"
							:items="versions"
							item-value="_id"
							item-text="number"
							label="Version"
						></v-select>
					</v-col>
					<v-col cols="6" sm="6" md="6">
						<v-switch
							v-model="canRelease"
							label="Can Release"
							color="primary"
							value="primary"
							hide-details
						></v-switch>
					</v-col>
				</v-row>
			</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="blue darken-1" text @click="updateBranch">Save</v-btn>
			</v-card-actions>
		</v-card>
	</v-tab-item>
</template>



<script>
export default {
	name: "GeneralTab",
	data() {
		return {
			branches: [{ text: "smth", key: "smth" }],
		};
	},
	computed: {
		name: {
			get() {
				return (
					(this.$store.getters["branch/currentBranch"] &&
						this.$store.getters["branch/currentBranch"].name) ||
					""
				);
			},
			set(val) {
				this.$store.getters["branch/currentBranch"].name = val;
			}
		},
		description: {
			get() {
				return (
					(this.$store.getters["branch/currentBranch"] &&
						this.$store.getters["branch/currentBranch"]
							.description) ||
					""
				);
			},
			set(val) {
				this.$store.getters["branch/currentBranch"].description = val;
			}
		},
		canRelease: {
			get() {
				return (
					(this.$store.getters["branch/currentBranch"] &&
						this.$store.getters["branch/currentBranch"]
							.canRelease) ||
					false
				);
			},
			set(val) {
				this.$store.getters["branch/currentBranch"].canRelease = val;
			}
		},
		selectedBranches: {
			get() {
				return (
					(this.$store.getters["branch/currentBranch"] &&
						this.$store.getters["branch/currentBranch"].currentVersion) || ""
				);
			},
			set(val) {
				this.$store.getters["branch/currentBranch"].currentVersion = val;
			}
		},
		versions() {
			return this.$store.getters["version/productVersions"] || [];
		}
	},
	methods: {
		updateBranch() {
			this.$store.dispatch('branch/updateBranch', {
				name: this.name,
				description: this.description,
				currentVersionId: this.selectedBranches._id,
				canRelease: this.canRelease
			})
		}
	}
};
</script>

<style>
</style>