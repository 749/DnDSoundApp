<template>
	<md-theme md-name="music">
		<md-sidenav class="md-right" :md-swipeable="false" ref="categories">
			<md-toolbar>
				<h2 class="md-title">Categories</h2>
			</md-toolbar>
			<md-list>
				<md-list-item v-for="i in categories" :key="i">
					<span>{{i}}</span>
				</md-list-item>
			</md-list>
		</md-sidenav>
		<sb-music-add ref="addFile"></sb-music-add>
		
		<md-toolbar>
			<md-button class="md-icon-button" @click="menu">
		    	<md-icon>menu</md-icon>
			</md-button>
		        
			<h2 class="md-title" style="flex: 1">Music</h2>
			
  			<md-button class="md-icon-button" @click="$refs.categories.toggle()">
				<md-icon>search</md-icon>
			</md-button>
			<md-menu md-direction="bottom left">
				<md-button class="md-icon-button" md-menu-trigger>
					<md-icon>more_vert</md-icon>
				</md-button>

				<md-menu-content>
					<md-menu-item @click="$refs.addFile.open()">Add File</md-menu-item>
				</md-menu-content>
			</md-menu>
		</md-toolbar>
				
		<main class="sb-music-content">
			<div class="sb-music-player">
				<p>Currently playing in <strong>{{active.category}}</strong>:</p>
				<h3 v-html="song"></h3>
			</div>
			<sb-scrubber :pos="active.pos" @scrub="setPlayTime"></sb-scrubber>
			<div class="sb-music-controls">
				<md-button class="md-icon-button" @click="goPrevious">
					<md-icon>skip_previous</md-icon>
				</md-button>
				<md-button class="md-icon-button" v-if="active.playing" @click="togglePlay">
					<md-icon>pause</md-icon>
				</md-button>
				<md-button class="md-icon-button" v-if="!active.playing" @click="togglePlay">
					<md-icon>play_arrow</md-icon>
				</md-button>
				<md-button class="md-icon-button" @click="goNext">
					<md-icon>skip_next</md-icon>
				</md-button>

				<md-button class="md-fab md-fab-bottom-right md-accent" @click="$refs.categories.toggle()">
					<md-icon>apps</md-icon>
				</md-button>
			</div>
			<div class="sb-music-playlist">
				<h3>Playlist</h3>
				<md-list>
					<md-list-item v-for="(i, key) in playlist" :key="i.file" @click="play(key)">
						<md-icon v-if="key == active.song" class="md-accent">play_arrow</md-icon>
						<span v-html="i.title + ' &mdash; ' + i.author"></span>
					</md-list-item>
				</md-list>
			</div>
		</main>
		
	</md-theme>
</template>

<script>
import sbScrubber from '../components/sbScrubber/sbScrubber.vue';
import sbMusicAdd from '../components/sbMusicDialogAdd.vue';

export default {
	created(){
		window.music = this
	},
	data() {
		return {}
	},
	computed: {
		categories() {
			var cats = [];
			for(var i in window.bus.config.music) {
				cats.push(i)
			}
			return cats;
		},
		active() {
			return window.bus.active || {}
		},
		playlist() {
			return window.bus.config.music[this.active.category] || []
		},
		song() {
			var song = this.playlist[this.active.song];
			return song.title + ' &mdash; ' + song.author
		}
	},
	methods: {
		menu() {
			window.bus.$emit('sb-menu')
		},
		togglePlay() {
			window.bus.$emit('sb-music-pause')
		},
		setPlayTime(percent) {
			console.log(percent);
			this.active.pos = percent;
		},
		play(key) {
			window.bus.$emit('sb-music-play', key)
		},
		goPrevious() {
			window.bus.$emit('sb-music-prev')
		},
		goNext() {
			window.bus.$emit('sb-music-next')
		}
	},
	components: {
		sbScrubber, sbMusicAdd
	}
}
</script>