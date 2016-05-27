var app = require('../src/js/app');
var _ = require('lodash');

describe('App basic component', function() {

	it('should be initiated well', function() {
		expect(app).toBeDefined();
		expect(app.types).toBeDefined();
		expect(app.ready).toBe(false);
		expect(app.form_valid).toBe(false);
	});
});

describe('App after loading', function(){
	
	beforeAll(function(done){
		app.$on('loading_ready', function(){
			done();
		});
		app.load();
	})

	it('should be ready', function(){
		expect(app.ready).toBe(true);
	});
	
	//Test on the current data set given by the test service
	it('should load the expected amount of vehicles', function() {
		expect(_.size(app.types)).toEqual(3);
	});

});