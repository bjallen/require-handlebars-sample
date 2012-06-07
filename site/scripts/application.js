define(

	['underscore'],

	function(_) {
		// namespaced object used for holding instantiated objects across the app
		var Application = {
			session: null,
			user: null,
			router: null,
			layouts: {},
			collections: {},
			models: {},
			controllers: {},
			proxies: {},
			parsers: {}
		};

		return Application;
	}
);
