<template>
	<v-list>
		<v-list-item-group v-model="selectedBranchIndex" color="primary">
			<v-list-item v-for="(item, i) in items" :key="i">
				<v-list-item-content>
					<v-list-item-title v-text="item.text"></v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list-item-group>
	</v-list>
</template>

<script>
export default {
	data() {
		return {
			selectedBranchIndex: 0,
			items: [
				{ text: "Real-Time", icon: "mdi-clock" },
				{ text: "Audience", icon: "mdi-account" },
				{ text: "Conversions", icon: "mdi-flag" }
			]
		};
	}
};
</script>

<style>
</style>