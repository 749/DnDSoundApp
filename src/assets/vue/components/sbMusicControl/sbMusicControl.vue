<template>
	<div class="sb-music-control">
	</div>
</template>

<script>
export default {
	created(){
		document.addEventListener("deviceready", this.onDeviceReady.bind(this), false);
	},
	data() {
		return {
			player: null,
			player_next: null,
		}
	},
	methods: {
		onDeviceReady() {
			//load config file
			//setup Media objects to play the music
		},
		saveConfig() {
			//Save the config whenever a change is detected
		}
	}
}
</script>