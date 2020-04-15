<template>
	<div id="app">
		<v-app id="inspire">
			<v-card>
				<v-tabs v-model="tab">
                    <v-tab>General</v-tab>
                    <v-tab>Versions</v-tab>
                    <v-tab>Releases</v-tab>
				</v-tabs>

				<v-tabs-items v-model="tab">
					<GeneralTab></GeneralTab>
                    <VersionsTab></VersionsTab>
                    <v-tab-item>
						<v-card flat>
							<v-card-text>smth3</v-card-text>
						</v-card>
					</v-tab-item>
				</v-tabs-items>
			</v-card>
		</v-app>
	</div>
</template>

<script>
import GeneralTab from './GeneralTab'
import VersionsTab from './VersionsTab'
export default {
    components: {
        GeneralTab,
        VersionsTab
    },
	data() {
		return {
			tab: null,
		};
	}
};
</script>

<style>
</style>