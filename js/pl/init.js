define(function(require, exports, module) {

	var $ = require('jquery');
	var selecTemp = require('../lib/dom/selectTemplate');

	exports.run = function () {
		selecTemp.createInsertElement('append', '.login', {
			div : [{class : 'btn-group-vertical selectLogin', id : 'login'}],
			button : [{class : 'btn btn-primary', nodeValue : '企业登录'}, 
					{class : 'btn btn-primary', nodeValue : '个人登录'}]
		});
		$('#login').on('click', function(evt) {
			switch($(evt.target).text()) {
				case '企业登录' : window.open('company/index_start.html', '_self');break;
				case '个人登录' : window.open('personal/index_start.html', '_self');break;
			}
		});
	};
});