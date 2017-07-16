<template>
	<!-- App -->
	<div id="app">
		<md-sidenav class="md-left" :md-swipeable="true" ref="navigation">
			<div class="navigation">
				<md-theme md-name="music">
					<md-button class="md-raised md-primary" @click="$router.push('/');$refs.navigation.toggle()">
				    	<md-icon>play_arrow</md-icon> &nbsp; Music
					</md-button>
				</md-theme>
				<md-theme md-name="sound">
					<md-button class="md-raised md-primary" @click="$router.push('/sound/');$refs.navigation.toggle()">
				    	<md-icon>music_note</md-icon> &nbsp; Sound
					</md-button>
				</md-theme>
				<md-theme md-name="dice">
					<md-button class="md-raised md-primary" @click="$router.push('/dice/');$refs.navigation.toggle()">
				    	<md-icon>casino</md-icon> &nbsp; Dice Roll
					</md-button>
				</md-theme>
				<md-theme md-name="crit">
					<md-button class="md-raised md-primary" @click="$router.push('/crit/');$refs.navigation.toggle()">
				    	<md-icon>star_border</md-icon> &nbsp; Crit Roll
					</md-button>
				</md-theme>
			</div>
		</md-sidenav>
		<router-view></router-view>
		<bluetooth></bluetooth>
		<sb-music-control></sb-music-control>
		<audio src="./static/sounds/door_squeek.wav" ref="sound0"></audio>
		<audio src="./static/sounds/stone_stone.wav" ref="sound1"></audio>
		<audio src="./static/sounds/bushes_rustling.wav" ref="sound2"></audio>
		<audio src="./static/sounds/explosion_small.wav" ref="sound3"></audio>
		<audio src="./static/sounds/explosion_large.wav" ref="sound4"></audio>
		<audio src="./static/sounds/fart.wav" ref="sound5"></audio>
	</div>
</template>

<script>
	import Bluetooth from './assets/vue/Bluetooth.vue'
	import sbMusicControl from './assets/vue/components/sbMusicControl/sbMusicControl.vue'
	export default {
		created() {
			window.data = this;
			window.bus.$on('sb-menu',() => {this.$refs.navigation.toggle()})
			window.bus.$on('sb-button-release', (id) => {
				this.$refs['sound'+id].play()
			})
		},
		data(){
			return {
			};
		},
		components: {
			Bluetooth, sbMusicControl
		}
	}
</script>
