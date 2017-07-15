<template>
	<div @mousedown="startScrub">
	<md-progress class="sb-scrubber" :md-progress="progress"></md-progress>
	</div>
</template>

<script>
export default {
	props: ['pos'],
	created(){
	},
	data() {
		return {
			mMove: null,
			mUp: null,
			scrubPos: null
		}
	},
	computed: {
		progress() {
			return (this.scrubPos == null)? this.pos: this.scrubPos
		}
	},
	methods: {
		startScrub(evt) {
			this.mUp = this.endScrub.bind(this)
			document.body.addEventListener("mouseup", this.mUp)
			this.mMove = this.scrub.bind(this)
			document.body.addEventListener("mousemove", this.mMove)
			
			this.scrub(evt)
		},
		scrub(evt) {
			this.scrubPos = (evt.clientX * 100) / document.body.clientWidth;
		},
		endScrub(evt) {
			document.body.removeEventListener("mousemove", this.mMove);
			document.body.removeEventListener("mouseup", this.mUp);
			
			this.$emit('scrub', this.scrubPos)
			
			this.scrubPos = null
		}
	}
}
</script>