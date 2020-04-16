<template>
	<v-expansion-panel>
		<v-expansion-panel-header>Environments</v-expansion-panel-header>

		<v-expansion-panel-content>
			<v-card-text>
				<AppNewEnvironment></AppNewEnvironment>
				<v-data-table
					:headers="headers"
					:items="versions"
					class="elevation-1"
					item-key="_id"
					disable-pagination
					hide-default-footer
				>
					<!-- <template v-slot:item.actions="{ item }"> -->
					<template v-slot:item.actions>
						<i class="fas fa-edit"></i>
						<i class="fas fa-trash"></i>
					</template>
				</v-data-table>
			</v-card-text>
		</v-expansion-panel-content>
	</v-expansion-panel>
</template>

<script>
import { userHelpers } from "@/store";
import AppNewEnvironment from "./NewEnvironment";

export default {
	name: "AppEnvironment",
	components: {
		AppNewEnvironment
	},
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
			selectedAdmins: this.admins,
			headers: [
				{
					text: "Name",
					align: "start",
					value: "number",
					width: "750px",
					divider: true
				},
				{
					text: "Actions",
					value: "actions",
					sortable: false,
					width: "125px"
				}
			]
		};
	},
	computed: {
		...userHelpers.mapGetters(["allUsers"]),
		name: {
			get() {
				return this.$store.getters["product/currentProduct"].name || "";
			},
			set(val) {
				this.$store.getters["product/currentProduct"].name = val;
			}
		},
		description: {
			get() {
				return (
					this.$store.getters["product/currentProduct"].description ||
					""
				);
			},
			set(val) {
				this.$store.getters["product/currentProduct"].description = val;
			}
        },
        versions(){
            return this.$store.getters['version/productVersions']
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