define(function(require, exports, module) {

	var $ = require('jquery');
	var selecTemp = require('../../lib/indexLogin/selectTemplate');

	exports.run = function () {
		selecTemp.createInsertElement('append', '.login', {
			div : [{class : 'btn-group-vertical selectLogin'}],
			button : [{class : 'btn btn-primary', nodeValue : '企业登录'}, 
					{class : 'btn btn-primary', nodeValue : '个人登录'}]
		});
	};
});