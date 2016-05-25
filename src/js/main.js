var Vue = require('vue'),
 	_= require('underscore'),
 	trafficMeister = require('../../service');

var app = new Vue({
	el: "#app",
	data: {
		'types': {},
		'error': null,
		'ready': false,
	},
	computed: {
		'form_valid': function(){
			return this.selected_type && this.selected_vehicle && this.selected_vehicle_color;
		}
	},
	methods: {
		load: function(){
			trafficMeister.fetchData(function(error, data){
				
				app.error = error;
				if(!error){
					app.types = _.groupBy(data, 'type');
				}
				app.ready = true;
			});
		}
	}
});

app.load();

