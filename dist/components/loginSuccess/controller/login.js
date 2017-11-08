var loginPag = angular.module("center1");
loginPag.controller('Login',function($scope,$http){
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
});

