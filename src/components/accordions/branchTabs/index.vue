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
                    <v-tab-item>
						<v-card flat>
							<v-card-text>smth2</v-card-text>
						</v-card>
					</v-tab-item>
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
export default {
    components: {
        GeneralTab
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