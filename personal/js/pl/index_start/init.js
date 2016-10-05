define(function(require, exports, module) {
	var $ = require('jq');

	var strTemplate = 	
	'<div class="container login">'+
		'<div class="row login">'+
			'<div class="login-main col-md-10 col-sm-10 col-xs-10 col-xs-offset-1 col-sm-offset-1 col-md-offset-1">'+
				'<img src="./img/logo_index.png" class="logo_index">'+
				'<span class="index-motto">量力而行，则不竭；量才而用，则不误！</span>'+
				'<div class="login-center">'+
					'<ul class="nav nav-tabs">'+
					'  <li class="active"><a href="javascript:void(0);">个人登录</a></li>'+
					'  <li><a href="javascript:void(0);">个人注册</a></li>'+
					'</ul>'+
					'<form class="form-horizontal" role="form">	'+
						'<div class="form-group">'+
							'<input type="text" class="form-control" id="account" placeholder="请输入您的手机号/邮箱">'+
						'</div>'+
						'<div class="form-group">'+
							'<input type="text" class="form-control" id="password" placeholder="请输入您的密码">'+
						'</div>'+
						'<div class="form-group">'+
						  '<button type="submit" class="btn btn-success">登录</button>'+
						'</div>'+
						'<div class="form-group">'+
							'<div class="checkbox login-auto">'+
						    	'<label>'+
									'<input type="checkbox">下次自动登录'+
						    	'</label>'+
							'</div>'+
					  		'<a href="javascript:void(0);">忘记密码</a>'+
						'</div>'+
					'</form>'+
				'</div>'+
			'</div>'+
		'</div>'+
	'</div>';

	exports.run = function() {
		$('body').prepend(strTemplate);
	};
});
