var changeInfo = angular.module("center1");
changeInfo.service("getCodeApi",function($http){
	this.getCode=function(mobile,picCode){
		var args = 'http://dlr.ixsh.net/wap/app/message/sendMsg.htm?mobile='+mobile+'&picCode='+picCode+'&templateNo=10216';
        return $http.post(args);
	}
})