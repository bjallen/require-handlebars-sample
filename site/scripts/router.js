define(
	['underscore',
	'backbone',
	'controllers/home_controller'],

	function(_, Backbone) {
		var router = Backbone.Router.extend({
			
			routes: {
				'': 'home',
				'home': 'home'
			},

			/*
			initialize: function() {
				this.routes = {
					'home': 'home'
				};	
				this._bindRoutes();
			}
			*/

			home: function() {
				console.log('home fn');
			}
		}
	);

	return router;
}
);