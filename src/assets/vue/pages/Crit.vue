<template>
	<md-theme md-name="crit">
		<md-toolbar>
			<md-button class="md-icon-button" @click="menu">
		    	<md-icon>menu</md-icon>
			</md-button>
		        
			<h2 class="md-title" style="flex: 1">Critical Roll</h2>
		</md-toolbar>
	</md-theme>
</template>

<script>
export default {
	created(){
	},
	data() {
		return {
		}
	},
	methods: {
		menu() {
			window.bus.$emit('sb-menu')
		}
		
	}
}
</script>