(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var regchange = angular.module("center1");
regchange.controller("change",["$scope", "$http", "changeInfo", "getCodeApi", function($scope,$http,changeInfo,getCodeApi){
	$scope.user={
		mobile:"",
		commit:"",
		imgCode:"",
		imgCodeUrl:""
	}
    var reg = new RegExp(/^1(3|5|7|8)\d{9}$/);
	$scope.changeinvalidMobile=function(){
		 var phoneValue = $(".register_name").val();
        if(phoneValue==""){
            $(".changeCommit").text("手机号码不能为空");
            $(".changeCommit").css("color","red");
            return
        }else{
            if(reg.test(phoneValue)){
                $(".changeCommit").text("手机号码输入正确");
                $(".changeCommit").css("color","green")
				$scope.user.imgCodeUrl ="http://dlr.ixsh.net/wap/app/message/picCode.htm?mobile"+$scope.user.mobile+"&templateNo=10216";
            }else{
                $(".changeCommit").text("手机号码输入错误");
                $(".changeCommit").css("color","red")
            	return
            }
        }
	}
	
	$scope.Btn=function(){
		var a = "http://dlr.ixsh.net/wap/app/message/sendMsg.htm?mobile"+$scope.user.mobile+"&picCode"+$scope.user.imgCode+"&templateNo=10216"
		$http.post(a).then(function(response){
			console.log(response)
		})
//		getCodeApi.getCode($scope.user.mobile,$scope.user.imgCode).then(function(response){
//			console.log(response)
//		})
//		getCodeApi.getCode($scope.user.mobile,$scope.user.imgCode).then(function(response){
//			console.log(response)
//			 var obj=response.data;
//	            if(obj.header.errorCode!=='200'){
//	                $scope.user.commit="图形验证码错误";
//	            }
//	            changeInfo.get()
//		})
	}
}])
},{}],2:[function(require,module,exports){
var regInfo = angular.module("center1");
regInfo.factory("changeInfo",function(){
	return{
		get:function(){
			var num = 60;
			isAnimate = true;
			function play(){
				if(isAnimate){
					timer = setInterval(getcode,1000)
				}
			}
			function getcode(){
				num--;
				isAnimate = false;
				if(num<0){
					num = 60;
					isAnimate = true;
					$("#btnLogin").text("获取验证码");
					clearInterval(timer)
					return
				}
				$("#btnLogin").text(num+"'");
			}
			play()
		}
	}
})

},{}],3:[function(require,module,exports){
var changeInfo = angular.module("center1");
changeInfo.service("getCodeApi",["$http", function($http){
	this.getCode=function(mobile,picCode){
		var args = 'http://dlr.ixsh.net/wap/app/message/sendMsg.htm?mobile='+mobile+'&picCode='+picCode+'&templateNo=10216';
        return $http.post(args);
	}
}])
},{}],4:[function(require,module,exports){
var loginPag = angular.module("center1");
loginPag.controller('Login',["$scope", "$http", function($scope,$http){
    $(".eyeSC").click(function(){
        $(this).css("display","none");
        $(".eyeSO").css("display","block");
        $(".login_pwd").attr("type","text");
    });
    $(".eyeSO").click(function(){
        $(this).css("display","none");
        $(".eyeSC").css("display","block");
        $(".login_pwd").attr("type","password")
    });
    $(".eyeBC").click(function(){
        $(this).css("display","none");
        $(".eyeBO").css("display","block");
        $(".login_pwd").attr("type","text")
    });
    $(".eyeBO").click(function(){
        $(this).css("display","none");
        $(".eyeBC").css("display","block");
        $(".login_pwd").attr("type","password")
    });
//计算像素的值
    function rem($px){
        return $px / 45.75*(width/16)+"px";
    }
//聚焦的时候的动画
//		var a = 0;
//		$(".login_name").focus(function(){
//			if(a%2==0){
//				$(this).next().animate({"width":rem(583)},1000);
//				a=1;
//			}else{
//				$(this).next().animate({"width":rem(583)},1000);
//				a=0
//			}
//		})
    $(".close_loginName").click(function(){
        $(".login_name").val("")
    });
    $(".coloe_loginPwd").click(function(){
        $(".login_pwd").val("")
    });
    //点击登录时候要验证
    var reg = new RegExp(/^1(3|5|7|8)\d{9}$/);


    $(".login_name").blur(function(){
        var phoneValue = $(".login_name").val();
        if(phoneValue==""){
            $(".logCommit").text("手机号码不能为空");
            $(".logCommit").css("color","red");
        }else{
            if(reg.test(phoneValue)){
                $(".logCommit").text("手机号码输入正确");
                $(".logCommit").css("color","green")
            }else{
                $(".logCommit").text("手机号码输入错误");
                $(".logCommit").css("color","red")
            }
        }
    });
    $(".login_pwd").blur(function(){
    	var phoneValue = $(".login_name").val();
        var passValue = $(".login_pwd").val();
        if(phoneValue==""){
        	 $(".logCommit").text("手机号码不能为空");
            $(".logCommit").css("color","red");
            return
        }else if(passValue==""){
            $(".logCommit").text("密码不能为空");
            $(".logCommit").css("color","red");
            return
        }else{
            if(reg.test(passValue)){
                $(".logCommit").text("密码输入正确");
                $(".logCommit").css("color","green")
            }else{
                console.log(passValue);
                $(".logCommit").text("密码输入错误");
                $(".logCommit").css("color","red")
            }
        }
    });
    $("#logBtn").click(function(){
    	var args = "http://dlr.ixsh.net/wap/app/user/dologin.htm?userName"+$(".login_pwd").val()+"&passWord"+$(".login_name").val();
    	$http.post(args).then(function(response){
    		console.log(response)
    		$(".logCommit").text(response.data.header.errorMsg);
            $(".logCommit").css("color","red")
    	})
    	
//      var phoneValue = $(".login_name").val();
//      if(reg.test(phoneValue)){
//          location.href = '../components/loginSuccess/templates/login_success.html'
//      }else{
//          alert("手机号或密码输入错误")
//      }
    })
}]);


},{}],5:[function(require,module,exports){
var register = angular.module('center1');  //模块引用
register.controller('register', ["$scope", "$http", function ($scope,$http) {
   $scope.user = {
       mobile: '',
       picCode:'',
       msg:'',
       imgCodeUrl:"",
       invalidInfo: ''
   }
    var reg = new RegExp(/^1(3|5|7|8)\d{9}$/);
	$scope.registerinvalidMobile=function(){
		 var phoneValue = $(".register_name").val();
		 
        if(phoneValue==""){
            $(".recommit").text("手机号码不能为空");
            $(".recommit").css("color","red");
            return
        }else{
            if(reg.test(phoneValue)){
            	//检查用户是否已经注册过
            	var msg = "http://dlr.ixsh.net/wap/app/user/checkUserName.htm?userName"+phoneValue;
            	$http.post(msg).then(function(response){
            		console.log(response)
            	})
            }else{
                $(".recommit").text("手机号码输入错误");
                $(".recommit").css("color","red")
            	return
            }
        }
	
//          	var msg = "http://dlr.ixsh.net/wap/app/user/checkUserName.htm?userName"+$scope.user.mobile;
//				$http.post(msg).then(function(response){
//					if(response.data.header.errorCode==200){
//						$scope.user.imgCodeUrl ="http://dlr.ixsh.net/wap/app/message/picCode.htm?mobile"+$scope.user.mobile+"&templateNo=10216";
//						$(".recommit").text("手机号码输入正确");
//		                $(".recommit").css("color","green");
//					}else{
//						 $(".recommit").text("此用户已经注册过");
//		                  $(".recommit").css("color","red")
//		                return
//					}
//				})
	//点击验证码再次请求
	$scope.repeatRequire=function(){
		alert(1)
		 var phoneValue = $(".register_name").val();
		if(phoneValue==""){
			$(".recommit").text("请填写手机号");
            $(".recommit").css("color","red")
		}else if(reg.test(phoneValue)){
			$scope.user.imgCodeUrl ="http://dlr.ixsh.net/wap/app/message/picCode.htm?mobile"+$scope.user.mobile+"&templateNo=10216";
		}else{
			$(".recommit").text("请填写正确的手机号");
            $(".recommit").css("color","red")
		}
	}
	
//	var a = "http://dlr.ixsh.net/wap/app/message/sendMsg.htm?mobile"+$scope.user.mobile+"&picCode"+$scope.user.picCode+"&templateNo=10216"
//	$http.post(a).then(function(res){
//		console.log(res)
//	})
	
//	$scope.registerMsg=function(){
//		
//		
//		
//	}
}
}])
},{}],6:[function(require,module,exports){
var reg=angular.module("center1");
reg.directive("regMobile",function(){
    return {
        restrict:"A",
        controller:["$scope", function($scope){
        	$scope.demo = function(){
        		console.log(1)
        	}
            $scope.invalidMobile=function(){
            	console.log(1)
            	
//              if(!$scope.ngForm.nText.$valid){
//                  $scope.user.invalidInfo="手机号不能为空";
//                  return;
//              }else{
//                  $scope.user.invalidInfo="1221";
//              }
//              if(!(/^1(3|4|5|7|8)\d{9}$/.test($scope.user.mobile))){
//                  $scope.user.invalidInfo="请正确填写手机号"
//                  return;
//              }
            }
        }]
    }
});
},{}],7:[function(require,module,exports){
/**
 * Created by 王伟东 on 2017/9/22.
 */

(function(){
    'use strict';
    var H1701 = angular.module('H1701',[
        'ui.router',
        'center1'
    ]);
    H1701.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('login',{
                url:'/login',
                templateUrl:'../components/loginSuccess/templates/login.html'
            })
            .state('loginSuccess',{
                url:'/loginS',
                templateUrl:'../components/loginSuccess/templates/login_success.html'
            })
            .state('register',{
                url:'/register',
                templateUrl:'../components/registerSuccess/templates/register.html'
            })
            .state('registerSuccess',{
                url:'/registerS',
                templateUrl:'../components/registerSuccess/templates/register_success.html'
            })
            .state('changPwd',{
                url:'/changPwd',
                templateUrl:'../components/changeSuccess/templates/change_pwd.html'
            })
            .state('changPwdS',{
                url:'/changPwdS',
                templateUrl:'../components/changeSuccess/templates/changeSuccess.html'
            });
        $urlRouterProvider.otherwise('/login')
    }]);
}());
},{}],8:[function(require,module,exports){
var LoginPag = angular.module("center1",[]);
require('./loginSuccess/controller/login');
require('./registerSuccess/controller/register');//关联注册.js
require('./registerSuccess/directive/reg-moblie')//注册自定义指令
require("./changeSuccess/controller/change.js");
//require("./changeSuccess/directive/reg-code.js")
require("./changeSuccess/factory/factory.js");
require("./changeSuccess/service/reginfo.js");
},{"./changeSuccess/controller/change.js":1,"./changeSuccess/factory/factory.js":2,"./changeSuccess/service/reginfo.js":3,"./loginSuccess/controller/login":4,"./registerSuccess/controller/register":5,"./registerSuccess/directive/reg-moblie":6}]},{},[8,7]);
