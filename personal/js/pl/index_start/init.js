define(function(require, exports, module) {
	var $ = require('jq');

	var strTemplate = 	
	'<div class="container login">'+
		'<div class="row login">'+
			'<div class="login-main col-md-8 col-sm-8 col-xs-8 col-xs-offset-2 col-sm-offset-2 col-md-offset-2">'+
				'<img src="./img/logo_index.png" class="logo_index">'+
				'<p class="index-motto">量力而行，则不竭；量才而用，则不误！</p>'+
			'</div>'+
		'</div>'+
	'</div>';

	exports.run = function() {
		$('body').prepend(strTemplate);
	};
});