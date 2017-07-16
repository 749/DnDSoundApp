// Import Vue
import Vue from 'vue'
import VueRouter from 'vue-router'

// Vue Material
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

// Import App Custom Styles
import MaterialIcons from './assets/css/material-icons.css'
import AppStyles from './assets/sass/main.scss'

// Import App Component
import App from './main.vue'

import routes from './routes.js'

Vue.use(VueMaterial)
Vue.use(VueRouter)

const router = new VueRouter({routes})

Vue.material.registerTheme({
  app: {
    primary: 'cyan'
  },
  music: {
    primary: 'indigo'
  },
  sound: {
	  primary: 'deep-purple'
  },
  dice: {
	  primary: 'red'
  },
  crit: {
    primary: 'teal'
  }
})

window.bus = new Vue({
	created() {
		this.$on('sb-config-change', this.onConfigChange.bind(this))
	},
	data: {
		saveTimeout: null,
		active: {
			category: 'Battle',
			song: 0,
			playing: true,
			pos: 56
		},
		config: {
			music:{
			},
			sounds: {
			},
			freesound: {
				clientId: '',
				clientSecret: ''
			}
		}
	},
	methods: {
		onConfigChange() {
			if(this.saveTimeout)
				clearTimeout(this.saveTimeout)
				
			setTimeout(() => {
				this.saveTimeout = null;
				console.log("saving config file")
				
				this.saveConfig()
			}, 500);
		},
		loadConfig() {
			requestFileSystem(LocalFileSystem.PERSISTENT, 0, (fs) => {
				fs.root.getFile("config.json", { create: false, exclusive: false }, (fileEntry) => {
					fileEntry.file((file) => {
				        var reader = new FileReader();

				        reader.onloadend = () => {
				            console.log("Successful file read: ", reader.result);
				            this.config = JSON.parse(reader.result);
				        };

				        reader.readAsText(file);

				    }, (err) => {console.log('could not open file', err)});
				},(err) => {console.log('could not open file', err)})
			})
		},
		saveConfig() {
			var dataObj = new Blob([JSON.stringify(this.config)], { type:'text/plain' })

			requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {

			    console.log('file system open: ' + fs.name);
			    fs.root.getFile("config.json", { create: true, exclusive: false }, function (fileEntry) {
			    	
			    	console.log(fileEntry)
			    	
			    	fileEntry.createWriter(function (fileWriter) {

			            fileWriter.onwriteend = function() {
			                console.log("Successful file write...");
			            };

			            fileWriter.onerror = function (e) {
			                console.log("Failed file write: " + e.toString());
			            };
			            
			            

			            fileWriter.write(dataObj);
			        });

			    }, function (e) {
	                console.log("Failed file write: ", e);
	            });

			}, function (e) {
                console.log("Failed file write: ", e);
            });
		}
	}
});

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Register App Component
  components: {
    app: App
  },
  router
})

document.addEventListener("deviceready", function() {
	navigator.splashscreen.hide();
	bus.loadConfig();
}, false);
