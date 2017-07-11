<template>
	<md-theme md-name="music">
		<md-toolbar>
			<md-button class="md-icon-button" @click="$refs.navigation.toggle()">
		    	<md-icon>menu</md-icon>
			</md-button>
		        
			<h2 class="md-title" style="flex: 1">Music</h2>
  				<md-button class="md-icon-button">
				<md-icon>search</md-icon>
			</md-button>
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
		
		
	}
}
</script>