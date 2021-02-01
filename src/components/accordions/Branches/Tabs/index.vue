<template>
	<v-card>
		<v-tabs v-model="tab">
			<v-tab>General</v-tab>
			<v-tab>Versions</v-tab>
		</v-tabs>

		<v-tabs-items v-model="tab">
			<GeneralTab></GeneralTab>
			<VersionsTab></VersionsTab>
		</v-tabs-items>
	</v-card>
</template>

<script>
import GeneralTab from "./GeneralTab";
import VersionsTab from "./VersionsTab";
export default {
	components: {
		GeneralTab,
		VersionsTab
	},
	data() {
		return {
			tab: null
		};
	}
};
</script>

<style>
</style>