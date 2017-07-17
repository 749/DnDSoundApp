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
			//connect events
			bus.$on('sb-music-play', this.play.bind(this))
			bus.$on('sb-music-pause', this.pause.bind(this))
			bus.$on('sb-music-next', () => {
				this.play(this.getNextIndex())
			})
			bus.$on('sb-music-prev', () => {
				this.play(this.getPrevIndex())
			})
			window.setInterval(this.updateTime.bind(this),200);
			//setup Media objects to play the music
		},
		pause() {
			if(!this.player)
				return;
			if(bus.active.playing)
				this.player.pause()
			else
				this.player.play()
			bus.active.playing = !bus.active.playing
		},
		updateTime() {
			if(!this.player)
				return;
			this.player.getCurrentPosition((pos)=>{
				bus.active.pos = (pos * 100) / this.player.getDuration()
			}, this.error.bind(this))
		},
		getPrevIndex() {
			var prev = bus.active.song - 1;
			if(prev < 0)
				prev = bus.config.music[bus.active.category].length-1
			return prev
		},
		getNextIndex() {
			var next = bus.active.song + 1;
			if(next >= bus.config.music[bus.active.category].length)
				next = 0
			return next
		},
		play(index) {
			this.player_next = new Media(bus.config.music[bus.active.category][index].file, ()=>{}, this.error.bind(this))
			this.player_next.play()
			if(this.player) {
				this.player.stop()
				this.player.release()
			}
			bus.active.song = index
			this.player = this.player_next;
			this.player_next = null;
		},
		error(err) {
			console.log('musicPlayer:', err)
		}
	}
}
</script>