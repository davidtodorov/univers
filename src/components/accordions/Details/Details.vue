<template>
	<v-expansion-panel>
		<v-expansion-panel-header>Details</v-expansion-panel-header>

		<v-expansion-panel-content>
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
					<v-col cols="12" sm="12" md="12">
						<v-combobox
							:items="mapForCombobox(this.allUsers)"
							v-model="selectedAdmins"
							item-text="text"
							label="Admins"
							single-line
							return-object
							chips
							multiple
						></v-combobox>
					</v-col>
				</v-row>
			</v-card-text>

			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
				<v-btn color="blue darken-1" text @click="save">Save</v-btn>
			</v-card-actions>
		</v-expansion-panel-content>
	</v-expansion-panel>
</template>

<script>
import { userHelpers } from "@/store";

export default {
	name: "Details",
	created() {
		this.$store
			.dispatch("user/getAllUsers")
			.then(() => {})
			.catch(err => {
				console.log(err);
			});
	},
	props: ["admins"],
	data() {
		return {
			selectedAdmins: this.admins
		};
	},
	computed: {
		...userHelpers.mapGetters(["allUsers"]),
		name: {
			get() {
				return this.$store.getters["product/currentProduct"].name || "";
			},
			set(val) {
				this.$store.getters["product/currentProduct"].name = val
			}
		},
		description: {
			get() {
				return this.$store.getters["product/currentProduct"].description || "";
			},
			set(val) {
				this.$store.getters["product/currentProduct"].description = val
			}
		}
	},
	watch: {
		selectedAdmins() {
			// eslint-disable-next-line no-unused-vars
			// let users = this.allUsers;
			// let newValArray = Array.from(newVal).map(x => x.value);
			// let newAdmins = this.allUsers.filter(u => newValArray.indexOf(u._id) !== -1);
			// this.$store.commit('product/setCurrentProductAdmins', Array.from(newAdmins))
		}
	},
	methods: {
		mapForCombobox(items) {
			let mappedItems = items.reduce((acc, val) => {
				acc.push({ text: val.email, value: val._id });
				return acc;
			}, []);
			return mappedItems;
		},
		close() {},
		save() {
			let newValArray = Array.from(this.selectedAdmins).map(x => x.value);
			//let newAdmins = this.allUsers.filter(u => newValArray.indexOf(u._id) !== -1);
			this.$store
				.dispatch("product/updateProduct", {
					id: this.$store.getters["product/currentProduct"]._id,
					name: this.name,
					description: this.description,
					admins: newValArray
				})
				.then()
				.catch(err => console.log(err.response.data));
			// this.$store.commit(
			// 	"product/setCurrentProductAdmins",
			// 	Array.from(newAdmins)
			// );
		}
	}
};
</script>

<style>
</style>