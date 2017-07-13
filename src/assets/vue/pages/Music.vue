<template>
	<md-theme md-name="music">
		<md-sidenav class="md-right" :md-swipeable="false" ref="categories">
			<md-toolbar>
				<h2 class="md-title">Kategorien</h2>
			</md-toolbar>
			<md-list>
				<md-list-item v-for="i in categories" :key="i.name">
					<span>{{i.name}}</span>
				</md-list-item>
			</md-list>
		</md-sidenav>
		
		<md-toolbar>
			<md-button class="md-icon-button" @click="menu">
		    	<md-icon>menu</md-icon>
			</md-button>
		        
			<h2 class="md-title" style="flex: 1">Music</h2>
			
  			<md-button class="md-icon-button" @click="$refs.categories.toggle()">
				<md-icon>search</md-icon>
			</md-button>
		</md-toolbar>
				
		<main class="main-content">
			<div class="player">
				<p>Currently playing in <strong>{{active.category}}</strong>:</p>
				<h3 v-html="active.song"></h3>
			</div>
			<sb-scrubber :pos="active.pos"></sb-scrubber>
			<div class="sb-music-controls">
				<md-button class="md-icon-button md-raised md-primary">
					<md-icon>skip_previous</md-icon>
				</md-button>
				<md-button class="md-icon-button md-raised md-primary">
					<md-icon>play_arrow</md-icon>
				</md-button>
				<md-button class="md-icon-button md-raised md-primary">
					<md-icon>skip_next</md-icon>
				</md-button>

				<md-button class="md-fab md-fab-bottom-right md-accent" @click=>
					<md-icon>apps</md-icon>
				</md-button>
			</div>
		</main>
		
	</md-theme>
</template>

<script>
import sbScrubber from '../components/sbScrubber/sbScrubber.vue';

export default {
	created(){
	},
	data() {
		return {
			categories: [{
				name: 'Battle'
			},{
				name: 'Explore'
			}],
			active: {
				category: 'Battle',
				song: 'Star Sky &mdash; Two Steps From Hell',
				playing: false,
				pos: 56
			}
		}
	},
	methods: {
		menu() {
			window.bus.$emit('sb-menu')
		}
		
	},
	components: {
		sbScrubber
	}
}
</script>