require(["require", "helper/util", "helper/controller", "helper/url"], function(require, util, controller) {
	//This function is called when scripts/helper/util.js is loaded.
	//If util.js calls define(), then this function is not fired until
	//util's dependencies have loaded, and the util argument will hold
	//the module value for "helper/util".
	var url = require("helper/url");
	console.log(require("helper/url").getUrl());
});