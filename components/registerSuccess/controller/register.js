var register = angular.module('center1');  //模块引用
register.controller('register', function ($scope,$http) {
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
})