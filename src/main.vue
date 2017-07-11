<template>
	<!-- App -->
	<div id="app">
		<md-sidenav class="md-left" :md-swipeable="true" ref="navigation">
			<div class="navigation">
				<md-theme md-name="music">
					<md-button class="md-raised md-primary" @click="$refs.navigation.toggle()">
				    	<md-icon>play_arrow</md-icon> &nbsp; Music
					</md-button>
				</md-theme>
				<md-theme md-name="sound">
					<md-button class="md-raised md-primary" @click="$refs.navigation.toggle()">
				    	<md-icon>music_note</md-icon> &nbsp; Sound
					</md-button>
				</md-theme>
				<md-theme md-name="dice">
					<md-button class="md-raised md-primary" @click="$refs.navigation.toggle()">
				    	<md-icon>dice</md-icon> &nbsp; Dice Roll
					</md-button>
				</md-theme>
				<md-theme md-name="crit">
					<md-button class="md-raised md-primary" @click="$refs.navigation.toggle()">
				    	<md-icon>note</md-icon> &nbsp; Crit Roll
					</md-button>
				</md-theme>
			</div>
		</md-sidenav>
		<md-theme md-name="music">
			<md-toolbar>
				<md-button class="md-icon-button" @click="$refs.navigation.toggle()">
			    	<md-icon>menu</md-icon>
				</md-button>
			        
				<h2 class="md-title" style="flex: 1">Dice</h2>
  
				<md-button class="md-icon-button">
					<md-icon>search</md-icon>
				</md-button>
			</md-toolbar>
			
			<md-layout md-gutter>
				<md-layout :style="button0">a</md-layout>
				<md-layout :style="button1">b</md-layout>
				<md-layout :style="button2">c</md-layout>
				<md-layout :style="button3">d</md-layout>
				<md-layout :style="button4">e</md-layout>
			</md-layout>
			
			<md-layout md-gutter>
				<md-layout :style="button5">f</md-layout>
				<md-layout :style="button6">g</md-layout>
				<md-layout :style="button7">h</md-layout>
				<md-layout :style="button8">i</md-layout>
				<md-layout :style="button9">j</md-layout>
			</md-layout>
			
			<md-layout md-gutter>
				<md-layout :style="button10">k</md-layout>
				<md-layout :style="button11">l</md-layout>
				<md-layout :style="button12">m</md-layout>
				<md-layout :style="button13">n</md-layout>
				<md-layout :style="button14">o</md-layout>
			</md-layout>
			
			<md-layout md-gutter>
				<md-layout :style="button15">p</md-layout>
				<md-layout :style="button16">q</md-layout>
				<md-layout :style="button17">r</md-layout>
				<md-layout :style="button18">s</md-layout>
				<md-layout :style="button19">t</md-layout>
			</md-layout>
			
			<md-layout md-gutter>
				<md-layout :style="button20">u</md-layout>
				<md-layout :style="button21">v</md-layout>
				<md-layout :style="button22">w</md-layout>
				<md-layout :style="button23">x</md-layout>
				<md-layout :style="button24">y</md-layout>
			</md-layout>
			
			<md-progress :md-progress="fader/2.55"></md-progress>
		</md-theme>
		<bluetooth></bluetooth>
	</div>
</template>

<script>
	import Bluetooth from './assets/vue/Bluetooth.vue'
	export default {
		created() {
			window.data = this;
			window.bus.$on('sb-menu',() => {this.$refs.navigation.toggle()})
		},
		data(){
			return {
				devices: [],
				button0: '',
				button1: '',
				button2: '',
				button3: '',
				button4: '',
				button5: '',
				button6: '',
				button7: '',
				button8: '',
				button9: '',
				button10: '',
				button11: '',
				button12: '',
				button13: '',
				button14: '',
				button15: '',
				button16: '',
				button17: '',
				button18: '',
				button19: '',
				button20: '',
				button21: '',
				button22: '',
				button23: '',
				button24: '',
				fader: 0
			};
		},
		components: {
			Bluetooth
		}
	}
</script>
