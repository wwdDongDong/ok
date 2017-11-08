var reg=angular.module("center1");
reg.directive("regMobile",function(){
    return {
        restrict:"A",
        controller:function($scope){
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
        }
    }
});