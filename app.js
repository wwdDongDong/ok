/**
 * Created by 王伟东 on 2017/9/22.
 */

(function(){
    'use strict';
    var H1701 = angular.module('H1701',[
        'ui.router',
        'center1'
    ]);
    H1701.config(function($stateProvider,$urlRouterProvider){
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
    });
}());