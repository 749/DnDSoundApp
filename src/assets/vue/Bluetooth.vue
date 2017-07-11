<template>
	<div>
		<md-button class="md-fab md-primary md-fab-bottom-right" @click="onButton">
			<md-icon>{{icon}}</md-icon>
		</md-button>
		<md-snackbar md-position="top center" ref="snackbar">
			<span>{{errorMsg}}</span>
		</md-snackbar>
	</div>
</template>

<script>
export default {
	created(){
		document.addEventListener("deviceready", this.onDeviceReady.bind(this), false);
	},
	data() {
		return {
			devices: [],
			icon: 'bluetooth_searching',
			errorMsg: '',
			connected: false,
			searching: true
		}
	},
	methods: {
		onButton() {
			if(this.searching)
				return
			if(!this.connected)
				this.search();
			else
				this.disconnect();
		},
		onMessage(message) {
			switch(message.charAt(0)) {
			case 'p':
				var num = (message.charCodeAt(1)-'a'.charCodeAt(0));
				window.data["button"+num] = 'background-color: green';
				window.bus.$emit("sb-button-press", num);
				return true;
			case 'r':
				var num = (message.charCodeAt(1)-'a'.charCodeAt(0));
				window.data["button"+num] = '';
				window.bus.$emit("sb-button-release", num);
				return true;
			case 'f':
				var fader = parseInt(message.substr(1, message.length-2));
				window.data.fader = fader;
				window.bus.$emit('sb-fader',fader);
				return true;
			}
			return false;
		},
		onConnect() {
			this.connected = true;
			this.icon = 'bluetooth_connected'
		},
		onDeviceList(devices) {
			var sb = null
			devices.forEach((device) => {
				if(device.name == 'Soundbox-0404')
					sb = device;
			})
			this.searching = false
			if(!sb){
				this.icon = 'bluetooth'
				this.generateFailureFunction('Searching for SoundBox')('not found')
				return
			}
			bluetoothSerial.connect(sb.address, this.onConnect.bind(this), this.generateFailureFunction("Bluetooth Connect failed"))
		},
		onDeviceReady() {
			bluetoothSerial.subscribe("\n", this.onMessage.bind(this), this.generateFailureFunction("Subscribe Failed"));
			
			this.search();
		},
		search() {
			this.searching = true
			this.icon = "bluetooth_searching"
			bluetoothSerial.list(this.onDeviceList.bind(this), this.generateFailureFunction("List Failed"));
		},
		disconnect() {
			bluetoothSerial.disconnect(() => {
				this.icon = 'bluetooth'
				this.connected = false
			}, this.generateFailureFunction('Could not disconnect'));
			
		},
		generateFailureFunction(message) {
			var func = function(reason) { // some failure callbacks pass a reason
				var details = message;
				if (reason) {
					details += ": " + JSON.stringify(reason);
				}
				this.errorMsg = details;
				this.icon = 'bluetooth'
				this.$refs.snackbar.open();
		    };
			return func.bind(this);
		}
		
	}
}
</script>