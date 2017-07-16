<template>
	<div>
		<md-sidenav class="md-right" :md-swipeable="false" ref="filepicker">
			<md-toolbar>
				<h2 class="md-title">Choose a Music File:</h2>
			</md-toolbar>
			<span>{{error}}</span>
			<md-list>
				<md-list-item v-if="dir!=root" @click="dirSelect('..')"><md-icon>folder</md-icon> <span>..</span></md-list-item>
				<md-list-item v-for="i in files" :key="i.name" @click="dirSelect(i)">
					<md-icon v-if="i.isFile">file</md-icon>
					<md-icon v-if="i.isDirectory">folder</md-icon>
					<span>{{i.name}}</span>
				</md-list-item>
			</md-list>
		</md-sidenav>
		<md-dialog ref="dialog" :md-esc-to-close="false" :md-click-outside-to-close="false">
			<md-dialog-title>Add Additional Info</md-dialog-title>
	
			<md-dialog-content>
				<form>
					<md-input-container>
						<label>File</label>
						<md-input v-model="file" disabled></md-input>
					</md-input-container>
					<md-input-container>
						<label>Title</label>
						<md-input v-model="title"></md-input>
					</md-input-container>
					<md-input-container>
						<label>Author</label>
						<md-input v-model="author"></md-input>
					</md-input-container>
					<md-input-container>
						<label>Category</label>
						<md-select v-model="category">
							<md-option v-for="cat in categories" key="cat">{{cat}}</md-option>
						</md-select>
					</md-input-container>
				</form>
			</md-dialog-content>
		
			<md-dialog-actions>
				<md-button class="md-primary" @click="onClose(1);$refs.dialog.close()">Cancel</md-button>
				<md-button class="md-primary" @click="onClose(0);$refs.dialog.close()">Add</md-button>
			</md-dialog-actions>
		</md-dialog>
	</div>
</template>

<script>


export default {
	created() {
		window.addFile = this
	},
	data() {
		return {
			cancel: 0,
			author: '',
			category: '',
			file:'',
			title: '',
			
			dir: '',
			root: '',
			files: [],
			fs: null,
			error: '',
		}
	},
	computed: {
		categories() {
			return [];
		}
	},
	methods: {
		open() {
			this.$refs.filepicker.toggle()
			this.root = 'file://mnt/sdcard1'
			this.dir = this.root
			this.file = 'blubb'
			this.dirSelect('')
		},
		filter() {
			this.files = this.files.sort((a,b) => {
				if(a.isDirectory && b.isFile)
					return -1;
				if(b.isDirectory && a.isFile)
					return 1;
				return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
			})
			var files = [];
			for(var i in this.files) {
				var file = this.files[i];
				if(file.name.startsWith('.') || (file.isFile && !(file.name.endsWith('m4a') || file.name.endsWith('wav') || file.name.endsWith('mp3'))))
					continue;
				
				files.push(file);
			}
			this.files = files
		},
		dirSelect(name) {
			if(name == '..'){
				if(this.dir != this.root){
					this.dir = this.dir.substring(0,this.dir.lastIndexOf('/'));
				}
			} else if (name != '' && name.isDirectory) {
				this.dir += '/' + name.name
			}
			if(name.isFile) {
				this.file = this.dir + '/' + name.name
				if(name.name.indexOf('-') == -1) {
					this.title = name.name.substring(0, name.name.lastIndexOf('.')).trim();
					this.author = ''
				} else {
					this.title = name.name.substring(0, name.name.indexOf('-')).trim()
					this.author = name.name.substring(name.name.indexOf('-')+1,name.name.lastIndexOf('.')).trim()
				}
				this.$refs.filepicker.toggle();
				this.$refs.dialog.open()
				return;
			}
			this.error = '';
			window.resolveLocalFileSystemURL(this.dir,(fs) => {
				var reader = fs.createReader();
				reader.readEntries((entries) => { this.files = entries; this.filter()})
			}, (error)=>{this.error =error})
		},
		selectFile() {
			
		},
		onClose(type) {
			if(type === 1)
				return;
			window.bus.$emit('sb-music-add', {
				title: this.title,
				author: this.author,
				category: this.category,
				file: this.file
			})
		}
	}
}
</script>