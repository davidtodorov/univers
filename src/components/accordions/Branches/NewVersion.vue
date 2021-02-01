<template>
	<v-dialog v-model="showDialog" max-width="500px">
		<template v-slot:activator="{ on }">
			<v-btn color="primary" dark class="mb-2" v-on="on">New Version</v-btn>
		</template>
		<v-card>
			<v-card-title>
				<span class="headline">New Version</span>
			</v-card-title>

			<v-card-text>
				<v-row cols="12" sm="12" md="12">
					<v-col cols="12" sm="12" md="12">
						<v-text-field
							label="Version Number"
							v-model="versionNumber"
							@blur="$v.versionNumber.$touch"
							:error-messages="versionNumberErrors"
						></v-text-field>
					</v-col>
				</v-row>
			</v-card-text>

			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
				<v-btn color="blue darken-1" text @click="save">Save</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import { productHelpers } from "@/store";
import { validationMixin } from "vuelidate";
import { helpers } from "vuelidate/lib/validators";

const validVersion = helpers.regex(
	"validVersion",
	/\d{1}\.\d{1,5}\.\d{1,5}\.\d{1}/
);

export default {
	name: "NewBranch",
	mixins: [validationMixin],
	data() {
		return {
			versionNumber: "",
			showDialog: false
		};
	},
	validations: {
		versionNumber: {
			validVersion
		}
	},
	computed: {
		...productHelpers.mapGetters(["currentProduct"]),
		versionNumberErrors() {
			const errors = [];
			if (!this.$v.versionNumber.$dirty) return errors;
			!this.$v.versionNumber.validVersion &&
				errors.push(
					"The verion must be in the followoing format X.XXXXX.XXXXX.X"
				);
			return errors;
		}
	},
	methods: {
		close() {
			this.showDialog = false;
		},
		save() {
			if (!this.$v.$anyError) {
				this.$store
					.dispatch("version/addVersion", {
						versionNumber: this.versionNumber,
						branchId: this.$store.getters['branch/currentBranch']._id,
						productId: this.currentProduct._id
					})
					.then(() => {
						this.showDialog = false;
					})
					.catch(err => console.log(err));
			}
		}
	}
};
</script>

<style>
</style>