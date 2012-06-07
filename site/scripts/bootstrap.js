define(
	['backbone',
	'router',
	'app'],

	function(Backbone, Router, app) {
		var Bootstrap = {
			initialize: function() {
				app.router = new Router();
				Backbone.history.start({pushState: true});
			}
		};

		return Bootstrap;
	}
);