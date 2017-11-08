var regchange = angular.module("center1");
regchange.controller("change",function($scope,$http,changeInfo,getCodeApi){
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
})