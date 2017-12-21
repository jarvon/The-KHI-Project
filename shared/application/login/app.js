//Init AngularJS
var khi = angular.module('khi', ['ui.router', 'LocalStorageModule']);

//App - Config
khi.config(function($stateProvider, localStorageServiceProvider, $locationProvider, $urlRouterProvider) {
    
        //Set up Local Storage
        localStorageServiceProvider.setNotify(true, true);
    
        //If state doesnt exist - Default State
        $urlRouterProvider.otherwise('/guest');
    
        //----------------------------------------
        // GUEST | States
        //----------------------------------------
    
        //Login State
        var loginState = {
            name: 'Login',
            url: '/guest',
            views: {
                'main': {
                    templateUrl: 'views/login.html',
                    controller: 'login'
                }
            }
        }
    
        //----------------------------------------
        // ADMIN | States
        //----------------------------------------
    
        //Login State | Admin
        var adminLoginState = {
            name: 'Login-Admin',
            url: '/admin',
            views: {
                'main': {
                    templateUrl: 'views/admin/login.html',
                    controller: 'login'
                }
            }
        }
    
        //----------------------------------------
        // ADMIN | States
        //----------------------------------------
    
        //Master State | Abstract
        var master = {
            name: 'Master',
            url: '/master/',
            abstract: true,
            views: {
                'main': {
                    templateUrl: 'views/master/master.html'
                },
    
                'sidebar': {
                    templateUrl: 'views/master/sidebar.html',
                    controller: 'header'
                }
            },
            auth: false,
            authAdmin: false,
            authMaster: true
        }
    
        //Login State | Master
        var masterLoginState = {
            name: 'Login-Master',
            url: '/master/login',
            views: {
                'main': {
                    templateUrl: 'views/master/login.html',
                    controller: 'login-master'
                }
            }
        }
    
        //Guest | States
        $stateProvider.state(loginState);
    
        //Admin | States
        $stateProvider.state(adminLoginState);
    
        //Master | States
        $stateProvider.state(masterLoginState);
    
    });