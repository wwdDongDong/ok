var LoginPag = angular.module("center1",[]);
require('./loginSuccess/controller/login');
require('./registerSuccess/controller/register');//关联注册.js
require('./registerSuccess/directive/reg-moblie')//注册自定义指令
require("./changeSuccess/controller/change.js");
//require("./changeSuccess/directive/reg-code.js")
require("./changeSuccess/factory/factory.js");
require("./changeSuccess/service/reginfo.js");