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
