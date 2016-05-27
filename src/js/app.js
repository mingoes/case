var Vue = require('vue'),
 	_= require('lodash'),
 	trafficMeister = require('./service');

//Create a new Vue instance for the app.
var app = new Vue({
	el: "#app",
	data: {
		'types': {},
		'error': '',
		'ready': false,
		'selected_type': null,
		'selected_vehicle': null,
		'selected_vehicle_color': null,
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
				if(data){
					app.types = _.groupBy(data, 'type');
				}
				app.ready = true;
			});
		}
	}
});

//Make sure that the selected vehicle is set back to null when the vehicle type changes.
app.$watch('selected_type', function(){
	app.selected_vehicle = null;
});

//Nake sure that the vehicle color is set to null when the vehicle brand changes
app.$watch('selected_vehicle', function(){
	app.selected_vehicle_color = null;
});

module.exports = app;