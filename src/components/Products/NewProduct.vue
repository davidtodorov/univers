<template>
	<v-dialog v-model="dialog" max-width="500px">
		<template v-slot:activator="{ on }">
			<v-row>
				<v-col>
					<div id="newProduct">
						<v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
					</div>
				</v-col>
				<v-spacer></v-spacer>
				<v-col>
					<v-text-field
						v-model="search"
						label="Search"
						single-line
						hide-details
						append-icon="fas fa-search"
					></v-text-field>
				</v-col>
			</v-row>
		</template>
		<v-card>
			<v-card-title>
				<span class="headline">New Product</span>
			</v-card-title>

			<v-card-text>
				<v-container>
					<v-row cols="12" sm="6" md="6">
						<v-col cols="12" sm="6" md="6">
							<v-text-field label="Name"></v-text-field>
						</v-col>
						<v-col cols="12" sm="6" md="6">
							<v-text-field label="Description"></v-text-field>
						</v-col>
					</v-row>
				</v-container>
			</v-card-text>

			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="blue darken-1" text>Cancel</v-btn>
				<v-btn color="blue darken-1" text>Save</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {};
</script>

<style>
</style>