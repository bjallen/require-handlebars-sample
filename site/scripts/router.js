define(
	['underscore',
	'backbone',
	'views/home_view',
	'use!layoutmanager'],

	function(_, Backbone, HomeView) {
		var router = Backbone.Router.extend({

			initialize: function(options) {
				/*this.routes = {
				'': 'home',
				'home': 'home'
				};	
				this._bindRoutes();*/
			},

			routes: {
				'': 'home',
				'home': 'home'
			},

			home: function() {
				var Person = Backbone.Model.extend({});
				var me = new Person({
					firstName: 'B.J.',
					lastName: 'Allen'
				});
				
				var main = new Backbone.LayoutManager({
					template: 'main'
				});
				
				main.setView('#view', new HomeView({model: me}));
				window.main = main;
				window.me = me;
				
				main.render(function(contents) {
					$('#content').html(contents);
				});
			}
		});

		return router;
	}
);