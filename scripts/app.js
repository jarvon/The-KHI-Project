
//Init AngularJS
var khi = angular.module('khi', ['ui.router', 'LocalStorageModule', 'ngFileUpload']);

//App - Config
khi.config(function($stateProvider, localStorageServiceProvider, $locationProvider, $urlRouterProvider) {

    //Set up Local Storage
    localStorageServiceProvider.setNotify(true, true);

    //If state doesnt exist - Default State
    $urlRouterProvider.otherwise('dashboard');

    //----------------------------------------
    // GUEST | States
    //----------------------------------------

    //Guest | Abstract State
    var guest = {
        name: 'Guest',
        url: '/',
        abstract: true,
        views: {
            'main': {
                templateUrl: 'views/guest.html',
            },
            'sidebar': {
                templateUrl: 'views/sidebar.html',
                controller: 'header'
            }
        },
        auth: true,
        authAdmin: false
    }

    //Home State
    var dashboard = {
        name: 'Guest.Dashboard',
        url: 'dashboard',
        views: {
            'guest': {
                templateUrl: 'views/dashboard.html',
                controller: 'dashboard'
            }
        },
        auth: true,
        authAdmin: false
    }

    //Schedules State | :type
    var scheduleList = {
        name: 'Guest.List',
        url: 'schedule/:type/:id',
        views: {
            'guest': {
                templateUrl: 'views/sch.html',
                controller: 'schedules'
            }
        },
        auth: true,
        authAdmin: false
    }

    //Schedule State | Single
    var scheduleItem = {
        name: 'Guest.Item',
        url: 'schedule/single/:type/:id/:stdate/:enddate',
        views: {
            'guest': {
                templateUrl: 'views/sch.html',
                controller: 'schedules'
            }
        },
        auth: true,
        authAdmin: false
    }

    //Schedule State | Open View Schedule
    var scheduleOpenView = {
        name: 'Guest.OpenViewSchedule',
        url: 'schedule/single/:type/:id',
        views: {
            'guest': {
                templateUrl: 'views/open-view.html',
                controller: 'schedules'
            }
        },
        auth: false,
        authAdmin: false
    }

    //----------------------------------------
    // ADMIN | States
    //----------------------------------------

    //Admin State | Abstract
    var admin = {
        name: 'Admin',
        url: '/admin/',
        abstract: true,
        views: {
            'main': {
                templateUrl: 'views/admin/admin.html'
            },

            'sidebar': {
                templateUrl: 'views/admin/sidebar.html',
                controller: 'header'
            }
        },
        auth: false,
        authAdmin: true
    }

    //Home State | Admin
    var dashboardAdmin = {
        name: 'Admin.Dashboard',
        url: 'dashboard',
        views: {
            'admin': {
                templateUrl: 'views/admin/dashboard.html',
                controller: 'dash-admin'
            }
        },
        auth: false,
        authAdmin: true
    }

    //All Schedules | Admin
    var allSchedules = {
        name: 'Admin.All',
        url: 'all-schedules',
        views: {
            'admin': {
                templateUrl: 'views/admin/schedule-picker.html',
                controller: 'schedule-picker'
            }
        },
        auth: false,
        authAdmin: true
    }

    //New Schedule | Admin
    var newSchedule = {
        name: 'Admin.New',
        url: 'new-schedule',
        views: {
            'admin': {
                templateUrl: 'views/admin/schedule-picker.html',
                controller: 'schedule-picker'
            }
        },
        auth: false,
        authAdmin: true
    }

    //New Life And Ministry | Admin
    var newScheduleLM = {
        name: 'Admin.NewLM',
        url: 'new-schedule/life/:source',
        views: {
            'admin': {
                templateUrl: 'views/admin/new.html',
                controller: 'lm-sch-change'
            }
        },
        auth: false,
        authAdmin: true
    }

    //Update Life And Ministry | Admin
    var updateScheduleLM = {
        name: 'Admin.UpdateLM',
        url: 'update-schedule/life/:source/:id',
        views: {
            'admin': {
                templateUrl: 'views/admin/new.html',
                controller: 'lm-sch-change'
            }
        },
        auth: false,
        authAdmin: true
    }

    //New Life And Ministry | Admin
    var newScheduleAttendant = {
        name: 'Admin.NewAttendant',
        url: 'new-schedule/attendants',
        views: {
            'admin': {
                templateUrl: 'views/admin/new.html',
                controller: 'attend-sch-change'
            }
        },
        auth: false,
        authAdmin: true
    }

    //Update Stage and Attendants
    var updateScheduleAttendants = {
        name: 'Admin.UpdateAttend',
        url: 'update-schedule/attend/:id',
        views: {
            'admin': {
                templateUrl: 'views/admin/new.html',
                controller: 'attend-sch-change'
            }
        }
    }

    //New Incoming Speakers | Admin
    var newScheduleIncoming = {
        name: 'Admin.NewIncoming',
        url: 'new-schedule/incoming',
        views: {
            'admin': {
                templateUrl: 'views/admin/new.html',
                controller: 'incoming-sch-change'
            }
        },
        auth: false,
        authAdmin: true
    }

    //Update Stage and Attendants
    var updateScheduleIncoming = {
        name: 'Admin.UpdateIncoming',
        url: 'update-schedule/incoming/:id',
        views: {
            'admin': {
                templateUrl: 'views/admin/new.html',
                controller: 'incoming-sch-change'
            }
        },
        auth: false,
        authAdmin: true
    }

    //New Outgoing Schedule
    var newScheduleOutgoing = {
        name: 'Admin.NewOutgoing',
        url: 'new-schedule/outgoing',
        views: {
            'admin': {
                templateUrl: 'views/admin/new.html',
                controller: 'outgoing-sch-change'
            }
        },
        auth: false,
        authAdmin: true
    }

    //Update Outgoing Schedule
    var updateScheduleOutgoing = {
        name: 'Admin.UpdateOutgoing',
        url: 'update-schedule/outgoing/:id',
        views: {
            'admin': {
                templateUrl: 'views/admin/new.html',
                controller: 'outgoing-sch-change'
            }
        },
        auth: false,
        authAdmin: true
    }

    //Maps
    var maps = {
        name: 'Admin.Maps',
        url: 'maps',
        views: {
            'admin': {
                templateUrl: 'views/admin/maps.html',
                controller: 'maps'
            }
        },
        auth: false,
        authAdmin: true
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

    //Source State | Master
    var sourceAdmin = {
        name: 'Master.Source',
        url: 'source',
        views: {
            'master': {
                templateUrl: 'views/master/source.html',
                controller: 'sourceMaster'
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

    //Source State | Master
    var newSourceAdmin = {
        name: 'Master.Source-Add',
        url: 'source/add',
        views: {
            'master': {
                templateUrl: 'views/master/new-source.html',
                controller: 'source-add'
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

    //Source State | Master
    var editSourceAdmin = {
        name: 'Master.Source-Edit',
        url: 'source/add/:id',
        views: {
            'master': {
                templateUrl: 'views/master/new-source.html',
                controller: 'source-add'
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
    $stateProvider.state(guest);
    $stateProvider.state(dashboard);

    //Schedule State
    $stateProvider.state(scheduleList);
    $stateProvider.state(scheduleItem);
    $stateProvider.state(scheduleOpenView);

    //Admin | States
    $stateProvider.state(admin);
    $stateProvider.state(dashboardAdmin);

    //Schedule State
    $stateProvider.state(allSchedules);
    $stateProvider.state(newSchedule);
    $stateProvider.state(newScheduleLM);
    $stateProvider.state(updateScheduleLM);
    $stateProvider.state(newScheduleAttendant);
    $stateProvider.state(updateScheduleAttendants);
    $stateProvider.state(newScheduleIncoming);
    $stateProvider.state(updateScheduleIncoming);
    $stateProvider.state(newScheduleOutgoing);
    $stateProvider.state(updateScheduleOutgoing);

    //Maps State
    $stateProvider.state(maps);

    //Master | States
    $stateProvider.state(master);
    $stateProvider.state(sourceAdmin);
    $stateProvider.state(newSourceAdmin);
    $stateProvider.state(editSourceAdmin);
    $stateProvider.state(masterLoginState);

});

//APP -Run
khi.run(function($state, $urlRouter, $trace, $transitions, kAuth) {

    $transitions.onBefore({}, function(state){

        var toGuest = state.to().auth;
        var toAdmin = state.to().authAdmin;
        var toMaster = state.to().authMaster;

        //Redirect if not logged in
        if (toGuest && !toAdmin && !toMaster && !kAuth.loginCheck('Guest')) {

            //Prevent Default Page Transition
            //e.preventDefault();

            //Debug
            //console.log('Not Logged | Guest');

            //Route To Login
            window.location.assign("login/");

        } else if (toAdmin && !toGuest && !toMaster && !kAuth.loginCheck('Admin')) {

            //Prevent Default Page Transition
            //e.preventDefault();

            //Debug
            //console.log('Not Logged | Admin');

            //Route To Admin Login
            window.location.assign("login/");

        } else if (toMaster && !toGuest && !toAdmin && !kAuth.loginCheck('Master')) {

            //Prevent Default Page Transition
            //e.preventDefault();

            //Debug
            //console.log('Not Logged | Admin');

            //Route To Admin Login
            $state.go('Login-Master');

        }

    });

});

//----------------------------------------
// Directives
//----------------------------------------

khi.directive('fixTo', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            angular.element(element).fixTo('.schedule', scope.$eval(attrs.fixTo));

            /* angular.element(element).stick_in_parent({
                offset_top: 50
            });
            */

        }
    };
});

khi.directive('scroll', function() {
    return {
      link: function (scope, elem, attrs) {
        elem.on('scroll', function (e) {

            console.log(e);
          // do your thing
        });
      }
    }
  });

//----------------------------------------
// Filters
//----------------------------------------

khi.filter('dateToDate', function() {

    return function(input) {

        var timeSplit = input.split(':');
        return new Date(2000,0,1,timeSplit[0],timeSplit[1],timeSplit[2]);

    }

});

khi.filter('utcConvert', function() {

    return function(input) {

        var date = moment(input).format('MMM Do, YYYY');

        return date;

    }

});

khi.filter('momentParseTime', function(){

    return function(input){

        var time = new Date(moment(input));

        return time;

    }

});

//----------------------------------------
// Factories
//----------------------------------------

//Schedules - Factory
khi.factory('schedule', function($http, localStorageService) {

    var schedule = {};

    //All Schedules
    schedule.getAll = function(pin, type) {

        //Check Schedule Type
        if (type === 'life') {

            return $http({
                method: 'GET',
                url: 'kapi-v1/kapi.php',
                params: {
                    task: 'getAllSchedules',
                    pin: pin,
                    type: 'LifeAndMinistry'
                }
            })
        } else if (type === 'attend') {

            return $http({
                method: 'GET',
                url: 'kapi-v1/kapi.php',
                params: {
                    task: 'getAllSchedules',
                    pin: pin,
                    type: 'attend'
                }
            })

        } else if (type === 'incoming') {

            return $http({
                method: 'GET',
                url: 'kapi-v1/kapi.php',
                params: {
                    task: 'getAllSchedules',
                    pin: pin,
                    type: 'incoming'
                }
            })

        } else if (type === 'outgoing') {
            
            return $http({
                method: 'GET',
                url: 'kapi-v1/kapi.php',
                params: {
                    task: 'getAllSchedules',
                    pin: pin,
                    type: 'outgoing'
                }
            })

        }

    }

    //Single Schedule
    schedule.getSingle = function(pin, type, id) {

        //Check Schedule Type
        if (type === 'life') {

            return $http({
                method: 'GET',
                url: 'kapi-v1/kapi.php',
                params: {
                    id: id,
                    pin: pin,
                    type: 'LifeAndMinistry'
                }
            })

        }

    }

    //Todays Schedule
    schedule.todaySchedule = function(pin, type) {

        //Check Schedule Type
        if (type === 'life') {

            return $http({
                method: 'GET',
                url: 'kapi-v1/kapi.php',
                params: {
                    pin: pin,
                    task: 'getTodays',
                    type: 'LifeAndMinistry',
                    date: moment(new Date()).format()
                }
            })

        }

        if (type === 'attend') {

            return $http({
                method: 'GET',
                url: 'kapi-v1/kapi.php',
                params: {
                    pin: pin,
                    task: 'getTodays',
                    type: type,
                    date: moment(new Date()).format()
                }
            })

        }

    }

    //Our Friends
    schedule.getFriends = function(pin, type) {

        if (type === 'all') {

            return $http({
                method: 'GET',
                url: 'kapi-v1/kapi.php',
                params: {
                    pin: pin,
                    task: 'getFriends',
                    type: type
                }
            })

        } else if (type === 'brothers') {

            return $http({
                method: 'GET',
                url: 'kapi-v1/kapi.php',
                params: {
                    pin: pin,
                    task: 'getFriends',
                    type: type
                }
            })

        } else if (type === 'sisters') {

            return $http({
                method: 'GET',
                url: 'kapi-v1/kapi.php',
                params: {
                    pin: pin,
                    task: 'getFriends',
                    type: type
                }
            })

        }

    }

    return schedule;

});

//----------------------------------------
// Guest | Controllers
//----------------------------------------

//Header Controller
khi.controller('header', function($rootScope, $scope, $state, kAuth, $stateParams, $filter) {

    $(window).scroll(function(){

        var winHeight = $(window).width();
        var scroll = $(window).scrollTop();

        if(winHeight > 600){

            if(scroll <= $('.banner-container').height()){

                $('.welcome').css({
                    transform: 'translateY('+ scroll / 4 +'px)'
                });
                
            }

        }

    });

    //Open Sidebar | Function
    $scope.openSidebar = function() {

        //Angualar Jquery Lite
        angular.element('body').addClass('toggle');

        var openSidebar = TweenMax.to('.sidebar', .4, {
            x: 0,
            ease: Power1.easeOut
        });

    }

    //Close Sidebar | Function
    $scope.closeSidebar = function() {

        //Angualar Jquery Lite
        angular.element('body').removeClass('toggle');

        var openSidebar = TweenMax.to('.sidebar', .4, {
            x: -300,
            ease: Power1.easeOut
        });

    }



    //Name Of Current State
    $scope.state = $state;

    //Toggle Header
    $scope.toggleHeader = 'hide-header';

    //ON: StateChangeStart
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {

        if (toState.name == 'Login') {

            $scope.toggleHeader = 'hide-header';

        } else {

            $scope.toggleHeader = 'show-header';

        }

    });

    //Page Title Options
    $scope.$watchGroup(['state.current.name', 'state.params', 'state.current'], function(newval, oldval) {

        $scope.guest = newval[2].auth;
        $scope.admin = newval[2].authAdmin;

        var name = newval[0];
        var param = newval[1];

        if (param.type && param.id === 0) {

            var stDate = $filter('date')(param.stdate);
            var endDate = $filter('date')(param.enddate);

            if (param.type === 'life') {

                $scope.title = 'Life And Ministry';

            }

        } else if (param.type && param.id >= 1) {

            var stDate = $filter('date')(param.stdate);
            var endDate = $filter('date')(param.enddate);

            if (param.type === 'life') {

                $scope.title = 'Life And Ministry' + ' | ' + stDate + ' - ' + endDate;

            }

        } else if (param.type) {

            if (param.type === 'life') {

                $scope.title = 'Life And Ministry';

            } else if (param.type === 'attend') {

                $scope.title = 'Sound And Attendants';

            } else if (param.type === 'incoming') {

                $scope.title = 'Incoming Speakers';

            } else if (param.type === 'outgoing') {
                
                $scope.title = 'Outgoing Speakers';

            }

        } else if (name) {

            if (name === 'Guest.Dashboard') {

                $scope.title = 'Dashboard';

            } else if (name === 'Admin.Dashboard') {

                $scope.title = 'Admin / Dashboard';

            } else if (name === 'Admin.All') {

                $scope.title = 'Our Schedules';

            } else if (name === 'Admin.New') {

                $scope.title = 'New Schedule';

            } else if (name === 'Admin.NewLM') {

                $scope.title = 'New / Life And Ministry';

            } else if (name === 'Admin.UpdateLM') {

                $scope.title = 'Update / Life And Ministry';

            } else {

                $scope.title = name;

            }

        }

    });

    //Refresh Function
    $scope.refresh = function(){

        //Reload Page;
        location.reload(true);

    }

    //Logout Function
    $scope.logout = function(type) {

        kAuth.logout(type);

    }

});

khi.controller('search-bar', ['$scope', function($scope){

    $('#searchBAR').focus(function(){

        $(".main-searchbar").addClass('toggle').delay(400).queue(function(){

            $(".main-searchbar .search").removeClass('show')
            $(".main-searchbar .cancel").removeClass('hide');
            $(".main-searchbar .search").addClass('hide')
            $(".main-searchbar .cancel").addClass('show');

            //DeQueue
            $(this).dequeue();

        });

        $('.ico-links').addClass('toggle');

        $('.searchBAR-container').addClass('toggle');

    });

    $(".main-searchbar .cancel").click(function(){

        console.log($scope.toSearch);

        if($scope.toSearch == '' || $scope.toSearch == undefined){

            $scope.$apply(function(){
                $scope.toSearch = undefined;
            });

            $(".main-searchbar").removeClass('toggle').delay(400).queue(function(){

                console.log('Yes');

                $(".main-searchbar .search").removeClass('hide');
                $(".main-searchbar .search").addClass('show');
                $(".main-searchbar .cancel").removeClass('show');
                $(".main-searchbar .cancel").addClass('hide');

                //DeQueue
                $(this).dequeue();
    
            });

            $('.ico-links').removeClass('toggle');

            $('.searchBAR-container').removeClass('toggle');

        } else {

            if(!$(".main-searchbar").hasClass('toggle')){

                $scope.$apply(function(){
                    $scope.toSearch = undefined;
                });

            }

            $(".main-searchbar").removeClass('toggle');

            $('.ico-links').removeClass('toggle');

            $('.searchBAR-container').removeClass('toggle');

        }

    });

}]);

//Home - Controller
khi.controller('dashboard', function($scope, $http, localStorageService, schedule) {

    //Congregation Pin
    $scope.pin = localStorageService.get('congPin');

    schedule.todaySchedule($scope.pin, 'life').then(function(sch) {

        $scope.lmSchedules = sch.data;

    });

    schedule.todaySchedule($scope.pin, 'attend').then(function(sch) {

        $scope.attendSchedules = sch.data;

    });

    //Print Schedules
    $scope.printSch = function(id) {

        //Construct Selector
        var selector = '#' + id;

        $(selector).printThis({
            importCSS: true,
            importStyle: true,
            base: 'true',
            pageTitle: 'www.khinfo.us | Schedule | #' + id
        });

    }

    //Check if Video
    $scope.checkVid = function(part){

        //console.log(part + ': ' + part.indexOf('Video'));

        if(part.indexOf('Video') > -1 || part.indexOf('video') > -1){

            return true;

        } else {

            return false;

        }

    }

});

//Schedules - Controller
khi.controller('schedules', function($scope, $state, localStorageService, $http, schedule) {

    //Congregation Pin
    $scope.pin = localStorageService.get('congPin');

    //Schedule Type
    $scope.type = $state.params.type;

    //Schedule ID
    $scope.id = $state.params.id;

    //Get Schedules
    if ($scope.id == '0') {

        if ($scope.type == 'life') {

            //Get Schedules
            schedule.getAll($scope.pin, $scope.type).then(function(sch) {

                //console.log(sch.data);
                $scope.schedules = sch.data;

            });

        } else if ($scope.type == 'attend') {

            //Get Schedules
            schedule.getAll($scope.pin, $scope.type).then(function(sch) {

                //console.log(sch.data);
                $scope.schedules = sch.data;

            });

        } else if ($scope.type == 'incoming') {

            //Get Schedules
            schedule.getAll($scope.pin, $scope.type).then(function(sch) {

                //console.log(sch.data);
                $scope.schedules = sch.data;

            });

        } else if ($scope.type == 'outgoing') {
            
            //Get Schedules
            schedule.getAll($scope.pin, $scope.type).then(function(sch) {

                //console.log(sch.data);
                $scope.schedules = sch.data;

            });

        }

    } else if ($scope.id) {

        if ($scope.type == 'life') {

            //Get Schedules
            schedule.getSingle($scope.pin, $scope.type, $scope.id).then(function(sch) {

                //console.log(sch.data);
                $scope.schedules = sch.data;

            });

        }

    }

    //Print Schedules
    $scope.printSch = function(id) {

        //Construct Selector
        var selector = '#' + id;

        $(selector).printThis({
            importCSS: true,
            importStyle: true,
            base: 'true',
            canvas: true,
            printDelay: 3000,
            pageTitle: 'MyKHInfo.com | Schedule | #' + id,
            removeScripts: true
        });

    }

    //Todays Date
    $scope.todayDate = new Date();

    //Check if Video
    $scope.checkVid = function(part){

        //console.log(part + ': ' + part.indexOf('Video'));

        if(part.indexOf('Video') > -1 || part.indexOf('video') > -1){

            return true;

        } else {

            return false;

        }

    }

});

//Login - Controller
khi.controller('login', function($scope, kAuth) {

    //kAuth.localKeys();

    //Under Construction
    $scope.working = false;

    $scope.login = function() {

        if (kAuth.login($scope.pin) === 'WrongPin') {
        //Add Wrong Pin Logic

        }

    }

});

//----------------------------------------
// Admin Specific | Controllers
//----------------------------------------

//Dashboard | Controller
khi.controller('dash-admin', function($scope, $http, $timeout, localStorageService, schedule) {

    ////////////////////////
    /* Grabs All Friends */
    $scope.grabAllFriends = function() {

        //Delay Before Results
        $timeout(function() {

            //Congregation Pin
            $scope.pin = localStorageService.get('congPin');

            //All Friends
            schedule.getFriends($scope.pin, 'all').then(function(friends) {

                //console.log(friends);
                $scope.allFriends = friends.data;

            });

        }, 1000);

    }

    $scope.timeSuccess = function() {

        $scope.addFriendSuccess = 'show';

        $timeout(function() {

            $scope.addFriendSuccess = 'hide';

        }, 3000);

    }

    ////////////////////////////
    /* Run: GrabAllFriends() */

    $scope.grabAllFriends();

    //Init Name Check
    $scope.newNameCheck = undefined;

    $scope.nameSaved = false;

    //Name Check
    $scope.nameCheck = function() {

        if ($scope.newFirstName === '') {

            $scope.newNameCheck = undefined;

        } else {

            $http({
                method: "GET",
                url: "kapi-v1/kapi.php",
                params: {
                    pin: $scope.pin,
                    task: "nameCheck",
                    name: $scope.newFirstName + ' ' + $scope.newLastName
                }
            }).then(function(check) {

                if (check.data === 'new') {

                    $scope.newNameCheck = true;

                } else if (check.data === 'saved') {

                    $scope.newNameCheck = false;

                }

            });

        }

    }

    //Add Friend
    $scope.addFriend = function() {

        var addFriendGo = function(brother, sister) {

            $http({
                method: "GET",
                url: "kapi-v1/kapi.php",
                params: {
                    pin: $scope.pin,
                    task: "addFriend",
                    name: $scope.newFirstName + ' ' + $scope.newLastName,
                    brother: brother,
                    sister: sister
                }
            }).then(function(friend) {

                console.log(friend.data);

                if (friend.data === 'added') {

                    $scope.grabAllFriends();
                    $scope.timeSuccess();
                    $scope.reset();

                } else {
                //Eventual Error Checking Function

                }

            });

        }

        if ($scope.newFriendGender === "brother") {

            var brother = 1;
            var sister = 0;

            addFriendGo(brother, sister);

        } else if ($scope.newFriendGender === "sister") {

            var brother = 0;
            var sister = 1;

            addFriendGo(brother, sister);

        }

    }

    //Reset Add Friends
    $scope.reset = function() {

        $scope.newFullName = '';
        $scope.newFriendGender = '';

    }

});

//Schedule Picker | Controller
khi.controller('schedule-picker', function($scope, $http, $state, localStorageService, schedule) {

    $scope.stateName = $state.current.name;

    $scope.pin = localStorageService.get('congPin');

    if ($scope.stateName === 'Admin.New') {

        //Get all source material
        //-------------------------
        $http({
            method: 'GET',
            url: 'kapi-v1/kapi.php',
            params: {
                task: 'getSource',
                sourceId: 0
            }
        }).then(function(source) {

            //console.log("Source Is: " + source);
            $scope.source = source.data;

        });

    } else if ($scope.stateName === 'Admin.All') {

        //Get all Schedules | Life and Ministry
        //-------------------------
        $http({
            method: 'GET',
            url: 'kapi-v1/kapi.php',
            params: {
                pin: $scope.pin,
                task: 'getAllSchedules',
                type: 'LifeAndMinistry'
            }
        }).then(function(source) {

            //console.log("Source Is: " + source);
            $scope.source = source.data;

        });

        //Get all schedules | Attendants
        $http({
            method: 'GET',
            url: 'kapi-v1/kapi.php',
            params: {
                pin: $scope.pin,
                task: 'getAllSchedules',
                type: 'attend'
            }
        }).then(function(source) {

            //console.log("Source Is: " + source);
            $scope.sourceAttend = source.data;

        });

        //Get all schedules | Attendants
        $http({
            method: 'GET',
            url: 'kapi-v1/kapi.php',
            params: {
                pin: $scope.pin,
                task: 'getAllSchedules',
                type: 'incoming'
            }
        }).then(function(source) {

            //console.log("Source Is: " + source);
            $scope.sourceIncoming = source.data;

        });

        //Get all schedules | Attendants
        $http({
            method: 'GET',
            url: 'kapi-v1/kapi.php',
            params: {
                pin: $scope.pin,
                task: 'getAllSchedules',
                type: 'outgoing'
            }
        }).then(function(source) {

            //console.log("Source Is: " + source);
            $scope.sourceOutgoing = source.data;

        });

    }

    //Open Options
    $(document).on('click', '.picker-button', function() {

        $(this).parent().next().addClass('options-up');

    });

    //Close Options
    $(document).on('click', '.cancel', function() {

        $(this).parent().removeClass('options-up');

    });

    //NG Add Class | Classes
    $scope.showName = function() {

        $scope.options = '';
        $scope.name = '';

    }

    $scope.futureSource = function(id) {

        $http({
            method: 'GET',
            url: 'kapi-v1/kapi.php',
            params: {
                task: 'getSource',
                sourceId: id
            }
        }).then(function(source) {

            //console.log("Source Is: " + source);
            localStorageService.set('singleSourceMaterial', source.data[0]);

        });

    }

});

//New Life And Ministy
khi.controller('lm-sch-change', function($scope, $state, localStorageService, $http, $log, $filter, schedule) {

    console.log($state.current.name);

    //Congregation Pin
    $scope.pin = localStorageService.get('congPin');

    //State Name
    $scope.stateName = $state.current.name;

    //Schedule Type
    $scope.type = $state.params.type;

    //Schedule ID
    $scope.id = $state.params.id;

    //New Schedule Source ID
    $scope.source = $state.params.source;

    //Grab Source Material
    if ($scope.source) {

        //Get Current Source Material
        //Save Source to local Var
        $http({
            method: 'GET',
            url: 'kapi-v1/kapi.php',
            params: {
                task: 'getSource',
                sourceId: $scope.source
            }
        }).then(function(source) {

            //console.log("Source Is: " + source);
            $scope.sourceMaterial = source.data[0];

        });

        //Get Schedules | Life And Ministry
        schedule.getAll($scope.pin, 'life').then(function(sch) {

            //console.log(sch.data);
            $scope.schLife = sch.data;

        });

        //Get Schedules | Life And Ministry
        schedule.getAll($scope.pin, 'attend').then(function(sch) {

            //console.log(sch.data);
            $scope.schAttend = sch.data;

        });

        //Get Schedules | Life And Ministry
        schedule.getAll($scope.pin, 'incoming').then(function(sch) {

            //console.log(sch.data);
            $scope.schIncoming = sch.data;

        });

        //Get Schedules | Life And Ministry
        schedule.getAll($scope.pin, 'outgoing').then(function(sch) {

            //console.log(sch.data);
            $scope.schOutgoing = sch.data;

        });

    }

    $('.lead-schedule').hover(function(){

        $('body').toggleClass('no-scroll');

    });

    $scope.showSchedulePanel = function(index, type){

        $scope.schTypeForPanel = undefined;

        $('.show-schedule').addClass('toggle');

        if(type === 'life'){

            //Change Schedule Type
            $scope.schTypeForPanel = 'life';

            //Add Schedule Data To Var
            $scope.schData = $scope.schLife[index];

        }

    }

    $scope.hideSchedulePanel = function(){

        $('.show-schedule').removeClass('toggle');

    }

    //----------------------------------------
    // Init Modals
    //----------------------------------------

    $scope.savedConfirm = false;
    $scope.existConfirm = false;

    $scope.doneConfirm = function() {

        $state.go('Admin.All');

    }

    //----------------------------------------
    // Configure Dropdowns
    //----------------------------------------

    $scope.dropConfig = function(val1, val2) {

        $('.search-input').focus();

        $scope.dropName = val1;

        if (val2 === 'brothers') {

            $scope.dropFriendType = $scope.allBrothers;

        } else if (val2 === 'sisters') {

            $scope.dropFriendType = $scope.allSisters;

        } else {

            $scope.dropFriendType = $scope.allFriends;

        }

    }

    //----------------------------------------
    // New Schedules
    //----------------------------------------

    //All Friends
    schedule.getFriends($scope.pin, 'all').then(function(friends) {

        //console.log(friends);
        $scope.allFriends = friends.data;

    });

    //All Brothers
    schedule.getFriends($scope.pin, 'brothers').then(function(friends) {

        //console.log(friends);
        $scope.allBrothers = friends.data;

    });

    //All Sisters
    schedule.getFriends($scope.pin, 'sisters').then(function(friends) {

        //console.log(friends);
        $scope.allSisters = friends.data;

    });

    //New Life and Ministry | Init Var
    //----------------------------------------

    //-------------------------
    //Speaker | Variables
    //-------------------------

    if ($scope.id) {

        //Get all Schedules
        //-------------------------
        $http({
            method: 'GET',
            url: 'kapi-v1/kapi.php',
            params: {
                pin: $scope.pin,
                id: $scope.id,
                task: 'getSingleSchedule',
                type: 'LifeAndMinistry'
            }
        }).then(function(src) {

            //console.log($scope.src);
            $scope.schedule = src.data[0];

            //Chariman
            $scope.lmChairman = $scope.schedule.chairmanN;

            //Talk 1
            $scope.lmTalk1 = $scope.schedule.talk1N;

            //Digging
            $scope.lmDigging = $scope.schedule.talk2N;

            //Bible Reading
            $scope.lmReading = $scope.schedule.readingN;

            //cp1
            $scope.cp1 = parseInt($scope.schedule.cp1, 10);

            //Video
            $scope.lmVideo = $scope.schedule.videoN;

            //Initial1
            $scope.lmInitial1 = $scope.schedule.initialN1;

            //Initial2
            $scope.lmInitial2 = $scope.schedule.initialN2;

            //cp2
            $scope.cp2 = parseInt($scope.schedule.cp2, 10);

            //Return1
            $scope.lmReturn1 = $scope.schedule.returnN1;

            //Return2
            $scope.lmReturn2 = $scope.schedule.returnN2;

            //cp3
            $scope.cp3 = parseInt($scope.schedule.cp3, 10);

            //Bible1
            $scope.lmBible1 = $scope.schedule.bibleN1;

            //Bible2
            $scope.lmBible2 = $scope.schedule.bibleN2;

            //cp4
            $scope.cp4 = parseInt($scope.schedule.cp4, 10);

            //Local Needs
            $scope.lmLocal = $scope.schedule.talk3N;

            //Talk 3
            $scope.lmTalk3 = $scope.schedule.talk4N;

            //CBS
            $scope.lmCBS = $scope.schedule.cbsN;

            //CBS Reader
            $scope.lmCBSR = $scope.schedule.cbsR;

        });

    } else {

        //Chariman
        $scope.lmChairman = '';

        //Talk 1
        $scope.lmTalk1 = '';

        //Digging
        $scope.lmDigging = '';

        //Bible Reading
        $scope.lmReading = '';

        //CP1
        $scope.cp1 = 0;

        //Video
        $scope.lmVideo = '';

        //Initial1
        $scope.lmInitial1 = '';

        //Initial2
        $scope.lmInitial2 = '';

        //CP2
        $scope.cp2 = 0;

        //Return1
        $scope.lmReturn1 = '';

        //Return2
        $scope.lmReturn2 = '';

        //CP3
        $scope.cp3 = 0;

        //Bible1
        $scope.lmBible1 = '';

        //Bible2
        $scope.lmBible2 = '';

        //CP4
        $scope.cp4 = 0;

        //Local Needs
        $scope.lmLocal = '';

        //Talk 3
        $scope.lmTalk3 = '';

        //CBS
        $scope.lmCBS = '';

        //CBS Reader
        $scope.lmCBSR = '';

    }

    //Counsel Change | Function
    $scope.counselChange = function(cp, newCp) {

        if (cp === 'cp1') {

            $scope.cp1 = newCp;

        } else if (cp === 'cp2') {

            $scope.cp2 = newCp;

        } else if (cp === 'cp3') {

            $scope.cp3 = newCp;

        } else if (cp === 'cp4') {

            $scope.cp4 = newCp;

        }

    }

    //Chairman - Swap | Function
    $scope.speakerSwap = function(part, speaker) {

        //Log Input Values
        //console.log("Part: "+part +" Speaker: "+ speaker);

        //-------------------------
        //Life And Ministry
        //-------------------------

        if (part === 'chairman') {

            $scope.lmChairman = speaker;

        } else if (part === 'talk1') {

            $scope.lmTalk1 = speaker;

        } else if (part === 'digging') {

            $scope.lmDigging = speaker;

        } else if (part === 'reading') {

            $scope.lmReading = speaker;

        } else if (part === 'video') {

            $scope.lmVideo = speaker;

        } else if (part === 'initial1') {

            $scope.lmInitial1 = speaker;

        } else if (part === 'initial2') {

            $scope.lmInitial2 = speaker;

        } else if (part === 'return1') {

            $scope.lmReturn1 = speaker;

        } else if (part === 'return2') {

            $scope.lmReturn2 = speaker;

        } else if (part === 'bible1') {

            $scope.lmBible1 = speaker;

        } else if (part === 'bible2') {

            $scope.lmBible2 = speaker;

        } else if (part === 'local') {

            $scope.lmLocal = speaker;

        } else if (part === 'talk3') {

            $scope.lmTalk3 = speaker;

        } else if (part === 'cbs') {

            $scope.lmCBS = speaker;

        } else if (part === 'cbsr') {

            $scope.lmCBSR = speaker;

        }

    }

    //Schedule | Life & Ministry | Save
    $scope.save = function() {

        $http({
            method: 'GET',
            url: 'kapi-v1/kapi.php',
            params: {
                //Options
                pin: $scope.pin,
                task: 'save',
                type: 'LifeAndMinistry',
                id: $scope.source,

                //Schedule Fields
                chairman: $scope.lmChairman,

                //Talk1
                talk1: $scope.lmTalk1,

                //Digging
                digging: $scope.lmDigging,

                //Reading
                reading: $scope.lmReading,

                //cp1
                cp1: $scope.cp1,

                //Video
                video: $scope.lmVideo,

                //Initial1
                initial1: $scope.lmInitial1,

                //Initial2
                initial2: $scope.lmInitial2,

                //cp2
                cp2: $scope.cp2,

                //Return1
                return1: $scope.lmReturn1,

                //Return2
                return2: $scope.lmReturn2,

                //cp3
                cp3: $scope.cp3,

                //Bible1
                bible1: $scope.lmBible1,

                //Bible2
                bible2: $scope.lmBible2,

                //cp4
                cp4: $scope.cp4,

                //Local Needs
                local: $scope.lmLocal,

                //Talk 3
                talk3: $scope.lmTalk3,

                //CBS
                cbs: $scope.lmCBS,

                //CBS Reader
                cbsr: $scope.lmCBSR
            }
        }).then(function(result) {

            //console.log(result);
            $scope.savedConfirm = true;

        });

    }

    $scope.toggleLeadSchedulePanel = function(){

        $('.container').toggleClass('toggle');
        $('.lead-schedule').toggleClass('toggle');

    }

});

//New Attendants
khi.controller('attend-sch-change', function($scope, $state, localStorageService, $http, $log, $sce, schedule) {

    console.log($state.current.name);

    //Congregation Pin
    $scope.pin = localStorageService.get('congPin');

    //State Name
    $scope.stateName = $state.current.name;

    //Schedule Type
    $scope.type = $state.params.type;

    //Schedule ID
    $scope.id = $state.params.id;

    //----------------------------------------
    // Init Modals
    //----------------------------------------

    $scope.savedConfirm = false;
    $scope.existConfirm = false;

    $scope.doneConfirm = function() {

        $state.go('Admin.All');

    }

    //----------------------------------------
    // Configure Dropdowns
    //----------------------------------------

    $scope.dropConfig = function(val1) {

        $scope.dropName = val1;

    }

    //----------------------------------------
    // New Schedules
    //----------------------------------------

    //All Brothers
    schedule.getFriends($scope.pin, 'brothers').then(function(friends) {

        //console.log(friends);
        $scope.allBrothers = friends.data;

    });

    //New Attendants | Init Var
    //----------------------------------------

    //-------------------------
    //Speaker | Variables
    //-------------------------

    if ($scope.id) {

        //Get Schedule Info
        //-------------------------
        $http({
            method: 'GET',
            url: 'kapi-v1/kapi.php',
            params: {
                pin: $scope.pin,
                id: $scope.id,
                task: 'getSingleSchedule',
                type: 'attend'
            }
        }).then(function(src) {

            //Main Schedule Date
            $scope.sDate = new Date(moment(src.data[0].sDate));

            //Mid Date 1 - 10
            $scope.mDate1 = new Date(moment(src.data[0].mDate1));
            $scope.mDate2 = new Date(moment(src.data[0].mDate2));
            $scope.mDate3 = new Date(moment(src.data[0].mDate3));
            $scope.mDate4 = new Date(moment(src.data[0].mDate4));
            $scope.mDate5 = new Date(moment(src.data[0].mDate5));
            $scope.mDate6 = new Date(moment(src.data[0].mDate6));
            $scope.mDate7 = new Date(moment(src.data[0].mDate7));
            $scope.mDate8 = new Date(moment(src.data[0].mDate8));
            $scope.mDate9 = new Date(moment(src.data[0].mDate9));
            $scope.mDate10 = new Date(moment(src.data[0].mDate10));

            //Attendant 1 - 20
            $scope.attend1 = src.data[0].atten1;
            $scope.attend2 = src.data[0].atten2;
            $scope.attend3 = src.data[0].atten3;
            $scope.attend4 = src.data[0].atten4;
            $scope.attend5 = src.data[0].atten5;
            $scope.attend6 = src.data[0].atten6;
            $scope.attend7 = src.data[0].atten7;
            $scope.attend8 = src.data[0].atten8;
            $scope.attend9 = src.data[0].atten9;
            $scope.attend10 = src.data[0].atten10;
            $scope.attend11 = src.data[0].atten11;
            $scope.attend12 = src.data[0].atten12;
            $scope.attend13 = src.data[0].atten13;
            $scope.attend14 = src.data[0].atten14;
            $scope.attend15 = src.data[0].atten15;
            $scope.attend16 = src.data[0].atten16;
            $scope.attend17 = src.data[0].atten17;
            $scope.attend18 = src.data[0].atten18;
            $scope.attend19 = src.data[0].atten19;
            $scope.attend20 = src.data[0].atten20;

            //Mics 1 -30
            $scope.mic1 = src.data[0].mic1;
            $scope.mic2 = src.data[0].mic2;
            $scope.mic3 = src.data[0].mic3;
            $scope.mic4 = src.data[0].mic4;
            $scope.mic5 = src.data[0].mic5;
            $scope.mic6 = src.data[0].mic6;
            $scope.mic7 = src.data[0].mic7;
            $scope.mic8 = src.data[0].mic8;
            $scope.mic9 = src.data[0].mic9;
            $scope.mic10 = src.data[0].mic10;
            $scope.mic11 = src.data[0].mic11;
            $scope.mic12 = src.data[0].mic12;
            $scope.mic13 = src.data[0].mic13;
            $scope.mic14 = src.data[0].mic14;
            $scope.mic15 = src.data[0].mic15;
            $scope.mic16 = src.data[0].mic16;
            $scope.mic17 = src.data[0].mic17;
            $scope.mic18 = src.data[0].mic18;
            $scope.mic19 = src.data[0].mic19;
            $scope.mic20 = src.data[0].mic20;
            $scope.mic21 = src.data[0].mic21;
            $scope.mic22 = src.data[0].mic22;
            $scope.mic23 = src.data[0].mic23;
            $scope.mic24 = src.data[0].mic24;
            $scope.mic25 = src.data[0].mic25;
            $scope.mic26 = src.data[0].mic26;
            $scope.mic27 = src.data[0].mic27;
            $scope.mic28 = src.data[0].mic28;
            $scope.mic29 = src.data[0].mic29;
            $scope.mic30 = src.data[0].mic30;

            //Platfrom 1 - 10
            $scope.plat1 = src.data[0].plat1;
            $scope.plat2 = src.data[0].plat2;
            $scope.plat3 = src.data[0].plat3;
            $scope.plat4 = src.data[0].plat4;
            $scope.plat5 = src.data[0].plat5;
            $scope.plat6 = src.data[0].plat6;
            $scope.plat7 = src.data[0].plat7;
            $scope.plat8 = src.data[0].plat8;
            $scope.plat9 = src.data[0].plat9;
            $scope.plat10 = src.data[0].plat10;

            //Sound 1 -10
            $scope.sound1 = src.data[0].sound1;
            $scope.sound2 = src.data[0].sound2;
            $scope.sound3 = src.data[0].sound3;
            $scope.sound4 = src.data[0].sound4;
            $scope.sound5 = src.data[0].sound5;
            $scope.sound6 = src.data[0].sound6;
            $scope.sound7 = src.data[0].sound7;
            $scope.sound8 = src.data[0].sound8;
            $scope.sound9 = src.data[0].sound9;
            $scope.sound10 = src.data[0].sound10;

            //Notes 1 - 10
            $scope.note1 = src.data[0].note1;
            $scope.note2 = src.data[0].note2;
            $scope.note3 = src.data[0].note3;
            $scope.note4 = src.data[0].note4;
            $scope.note5 = src.data[0].note5;
            $scope.note6 = src.data[0].note6;
            $scope.note7 = src.data[0].note7;
            $scope.note8 = src.data[0].note8;
            $scope.note9 = src.data[0].note9;
            $scope.note10 = src.data[0].note10;

        });

    } else {

        //Main Schedule Date
        $scope.sDate = new Date();

        //Mid Date 1 - 10
        $scope.mDate1 = new Date();
        $scope.mDate2 = new Date();
        $scope.mDate3 = new Date();
        $scope.mDate4 = new Date();
        $scope.mDate5 = new Date();
        $scope.mDate6 = new Date();
        $scope.mDate7 = new Date();
        $scope.mDate8 = new Date();
        $scope.mDate9 = new Date();
        $scope.mDate10 = new Date();

        //Attendant 1 - 20
        $scope.attend1 = '';
        $scope.attend2 = '';
        $scope.attend3 = '';
        $scope.attend4 = '';
        $scope.attend5 = '';
        $scope.attend6 = '';
        $scope.attend7 = '';
        $scope.attend8 = '';
        $scope.attend9 = '';
        $scope.attend10 = '';
        $scope.attend11 = '';
        $scope.attend12 = '';
        $scope.attend13 = '';
        $scope.attend14 = '';
        $scope.attend15 = '';
        $scope.attend16 = '';
        $scope.attend17 = '';
        $scope.attend18 = '';
        $scope.attend19 = '';
        $scope.attend20 = '';

        //Mics 1 -30
        $scope.mic1 = '';
        $scope.mic2 = '';
        $scope.mic3 = '';
        $scope.mic4 = '';
        $scope.mic5 = '';
        $scope.mic6 = '';
        $scope.mic7 = '';
        $scope.mic8 = '';
        $scope.mic9 = '';
        $scope.mic10 = '';
        $scope.mic11 = '';
        $scope.mic12 = '';
        $scope.mic13 = '';
        $scope.mic14 = '';
        $scope.mic15 = '';
        $scope.mic16 = '';
        $scope.mic17 = '';
        $scope.mic18 = '';
        $scope.mic19 = '';
        $scope.mic20 = '';
        $scope.mic21 = '';
        $scope.mic22 = '';
        $scope.mic23 = '';
        $scope.mic24 = '';
        $scope.mic25 = '';
        $scope.mic26 = '';
        $scope.mic27 = '';
        $scope.mic28 = '';
        $scope.mic29 = '';
        $scope.mic30 = '';

        //Platfrom 1 - 10
        $scope.plat1 = '';
        $scope.plat2 = '';
        $scope.plat3 = '';
        $scope.plat4 = '';
        $scope.plat5 = '';
        $scope.plat6 = '';
        $scope.plat7 = '';
        $scope.plat8 = '';
        $scope.plat9 = '';
        $scope.plat10 = '';

        //Sound 1 -10
        $scope.sound1 = '';
        $scope.sound2 = '';
        $scope.sound3 = '';
        $scope.sound4 = '';
        $scope.sound5 = '';
        $scope.sound6 = '';
        $scope.sound7 = '';
        $scope.sound8 = '';
        $scope.sound9 = '';
        $scope.sound10 = '';

        //Notes 1 - 10
        $scope.note1 = '';
        $scope.note2 = '';
        $scope.note3 = '';
        $scope.note4 = '';
        $scope.note5 = '';
        $scope.note6 = '';
        $scope.note7 = '';
        $scope.note8 = '';
        $scope.note9 = '';
        $scope.note10 = '';
    }

    //Maually Change Dates
    $scope.dateChange = function(date, val) {

        if (date === 'sDate') {

            $scope.sDate = new Date(moment(val));

        } else if (date === 'mDate1') {

            $scope.mDate1 = new Date(moment(val));

        } else if (date === 'mDate2') {

            $scope.mDate2 = new Date(moment(val));

        } else if (date === 'mDate3') {

            $scope.mDate3 = new Date(moment(val));

        } else if (date === 'mDate4') {

            $scope.mDate4 = new Date(moment(val));

        } else if (date === 'mDate5') {

            $scope.mDate5 = new Date(moment(val));

        } else if (date === 'mDate6') {

            $scope.mDate6 = new Date(moment(val));

        } else if (date === 'mDate7') {

            $scope.mDate7 = new Date(moment(val));

        } else if (date === 'mDate8') {

            $scope.mDate8 = new Date(moment(val));

        } else if (date === 'mDate9') {

            $scope.mDate9 = new Date(moment(val));

        } else if (date === 'mDate10') {

            $scope.mDate10 = new Date(moment(val));

        }

    }

    //Speaker Swap | Function
    $scope.speakerSwap = function(part, speaker) {

        //-------------------------
        //Attendants
        //-------------------------

        if (part === 'attend1') {

            $scope.attend1 = speaker;

        } else if (part === 'attend2') {

            $scope.attend2 = speaker;

        } else if (part === 'attend3') {

            $scope.attend3 = speaker;

        } else if (part === 'attend4') {

            $scope.attend4 = speaker;

        } else if (part === 'attend5') {

            $scope.attend5 = speaker;

        } else if (part === 'attend6') {

            $scope.attend6 = speaker;

        } else if (part === 'attend7') {

            $scope.attend7 = speaker;

        } else if (part === 'attend8') {

            $scope.attend8 = speaker;

        } else if (part === 'attend9') {

            $scope.attend9 = speaker;

        } else if (part === 'attend10') {

            $scope.attend10 = speaker;

        } else if (part === 'attend11') {

            $scope.attend11 = speaker;

        } else if (part === 'attend12') {

            $scope.attend12 = speaker;

        } else if (part === 'attend13') {

            $scope.attend13 = speaker;

        } else if (part === 'attend14') {

            $scope.attend14 = speaker;

        } else if (part === 'attend15') {

            $scope.attend15 = speaker;

        } else if (part === 'attend16') {

            $scope.attend16 = speaker;

        } else if (part === 'attend17') {

            $scope.attend17 = speaker;

        } else if (part === 'attend18') {

            $scope.attend18 = speaker;

        } else if (part === 'attend19') {

            $scope.attend19 = speaker;

        } else if (part === 'attend20') {

            $scope.attend20 = speaker;

        } else if (part === 'mic1') {

            $scope.mic1 = speaker;

        } else if (part === 'mic2') {

            $scope.mic2 = speaker;

        } else if (part === 'mic3') {

            $scope.mic3 = speaker;

        } else if (part === 'mic4') {

            $scope.mic4 = speaker;

        } else if (part === 'mic5') {

            $scope.mic5 = speaker;

        } else if (part === 'mic6') {

            $scope.mic6 = speaker;

        } else if (part === 'mic7') {

            $scope.mic7 = speaker;

        } else if (part === 'mic8') {

            $scope.mic8 = speaker;

        } else if (part === 'mic9') {

            $scope.mic9 = speaker;

        } else if (part === 'mic10') {

            $scope.mic10 = speaker;

        } else if (part === 'mic11') {

            $scope.mic11 = speaker;

        } else if (part === 'mic12') {

            $scope.mic12 = speaker;

        } else if (part === 'mic13') {

            $scope.mic13 = speaker;

        } else if (part === 'mic14') {

            $scope.mic14 = speaker;

        } else if (part === 'mic15') {

            $scope.mic15 = speaker;

        } else if (part === 'mic16') {

            $scope.mic16 = speaker;

        } else if (part === 'mic17') {

            $scope.mic17 = speaker;

        } else if (part === 'mic18') {

            $scope.mic18 = speaker;

        } else if (part === 'mic19') {

            $scope.mic19 = speaker;

        } else if (part === 'mic20') {

            $scope.mic20 = speaker;

        } else if (part === 'mic21') {

            $scope.mic21 = speaker;

        } else if (part === 'mic22') {

            $scope.mic22 = speaker;

        } else if (part === 'mic23') {

            $scope.mic23 = speaker;

        } else if (part === 'mic24') {

            $scope.mic24 = speaker;

        } else if (part === 'mic25') {

            $scope.mic25 = speaker;

        } else if (part === 'mic26') {

            $scope.mic26 = speaker;

        } else if (part === 'mic27') {

            $scope.mic27 = speaker;

        } else if (part === 'mic28') {

            $scope.mic28 = speaker;

        } else if (part === 'mic29') {

            $scope.mic29 = speaker;

        } else if (part === 'mic30') {

            $scope.mic30 = speaker;

        } else if (part === 'plat1') {

            $scope.plat1 = speaker;

        } else if (part === 'plat2') {

            $scope.plat2 = speaker;

        } else if (part === 'plat3') {

            $scope.plat3 = speaker;

        } else if (part === 'plat4') {

            $scope.plat4 = speaker;

        } else if (part === 'plat5') {

            $scope.plat5 = speaker;

        } else if (part === 'plat6') {

            $scope.plat6 = speaker;

        } else if (part === 'plat7') {

            $scope.plat7 = speaker;

        } else if (part === 'plat8') {

            $scope.plat8 = speaker;

        } else if (part === 'plat9') {

            $scope.plat9 = speaker;

        } else if (part === 'plat10') {

            $scope.plat10 = speaker;

        } else if (part === 'sound1') {

            $scope.sound1 = speaker;

        } else if (part === 'sound2') {

            $scope.sound2 = speaker;

        } else if (part === 'sound3') {

            $scope.sound3 = speaker;

        } else if (part === 'sound4') {

            $scope.sound4 = speaker;

        } else if (part === 'sound5') {

            $scope.sound5 = speaker;

        } else if (part === 'sound6') {

            $scope.sound6 = speaker;

        } else if (part === 'sound7') {

            $scope.sound7 = speaker;

        } else if (part === 'sound8') {

            $scope.sound8 = speaker;

        } else if (part === 'sound9') {

            $scope.sound9 = speaker;

        } else if (part === 'sound10') {

            $scope.sound10 = speaker;

        } else if (part === 'note1') {

            $scope.note1 = speaker;

        } else if (part === 'note2') {

            $scope.note2 = speaker;

        } else if (part === 'note3') {

            $scope.note3 = speaker;

        } else if (part === 'note4') {

            $scope.note4 = speaker;

        } else if (part === 'note5') {

            $scope.note5 = speaker;

        } else if (part === 'note6') {

            $scope.note6 = speaker;

        } else if (part === 'note7') {

            $scope.note7 = speaker;

        } else if (part === 'note8') {

            $scope.note8 = speaker;

        } else if (part === 'note9') {

            $scope.note9 = speaker;

        } else if (part === 'note10') {

            $scope.note10 = speaker;

        }

    }

    //Note Change
    $scope.noteChange = function(note, val) {

        if (note === 'note1') {

            $scope.note1 = val;

        } else if (note === 'note2') {

            $scope.note2 = val;

        } else if (note === 'note3') {

            $scope.note3 = val;

        } else if (note === 'note4') {

            $scope.note4 = val;

        } else if (note === 'note5') {

            $scope.note5 = val;

        } else if (note === 'note6') {

            $scope.note6 = val;

        } else if (note === 'note7') {

            $scope.note7 = val;

        } else if (note === 'note8') {

            $scope.note8 = val;

        } else if (note === 'note9') {

            $scope.note9 = val;

        } else if (note === 'note10') {

            $scope.note10 = val;

        }

    }

    //Schedule Check
    $scope.preCheck = function() {

        $http({
            method: 'GET',
            url: 'kapi-v1/kapi.php',
            params: {
                task: 'preCheck',
                type: 'attend',
                pin: $scope.pin,
                sDate: $scope.sDate
            }
        }).then(function(info) {

            if (info.data === 'Exist') {

                $scope.existConfirm = true;

            } else if (info.data === 'New') {

                $scope.save();

            }

        });

    }

    //Schedule | Attendants | Save
    $scope.save = function() {

        $scope.existConfirm = false;

        $http({
            method: 'GET',
            url: 'kapi-v1/kapi.php',
            params: {
                task: 'save',
                type: 'attend',
                pin: $scope.pin,
                sDate: moment($scope.sDate).format(),
                mDate1: moment($scope.mDate1).format(),
                mDate2: moment($scope.mDate2).format(),
                mDate3: moment($scope.mDate3).format(),
                mDate4: moment($scope.mDate4).format(),
                mDate5: moment($scope.mDate5).format(),
                mDate6: moment($scope.mDate6).format(),
                mDate7: moment($scope.mDate7).format(),
                mDate8: moment($scope.mDate8).format(),
                mDate9: moment($scope.mDate9).format(),
                mDate10: moment($scope.mDate10).format(),
                attend1: $scope.attend1,
                attend2: $scope.attend2,
                attend3: $scope.attend3,
                attend4: $scope.attend4,
                attend5: $scope.attend5,
                attend6: $scope.attend6,
                attend7: $scope.attend7,
                attend8: $scope.attend8,
                attend9: $scope.attend9,
                attend10: $scope.attend10,
                attend11: $scope.attend11,
                attend12: $scope.attend12,
                attend13: $scope.attend13,
                attend14: $scope.attend14,
                attend15: $scope.attend15,
                attend16: $scope.attend16,
                attend17: $scope.attend17,
                attend18: $scope.attend18,
                attend19: $scope.attend19,
                attend20: $scope.attend20,
                mic1: $scope.mic1,
                mic2: $scope.mic2,
                mic3: $scope.mic3,
                mic4: $scope.mic4,
                mic5: $scope.mic5,
                mic6: $scope.mic6,
                mic7: $scope.mic7,
                mic8: $scope.mic8,
                mic9: $scope.mic9,
                mic10: $scope.mic10,
                mic11: $scope.mic11,
                mic12: $scope.mic12,
                mic13: $scope.mic13,
                mic14: $scope.mic14,
                mic15: $scope.mic15,
                mic16: $scope.mic16,
                mic17: $scope.mic17,
                mic18: $scope.mic18,
                mic19: $scope.mic19,
                mic20: $scope.mic20,
                mic21: $scope.mic21,
                mic22: $scope.mic22,
                mic23: $scope.mic23,
                mic24: $scope.mic24,
                mic25: $scope.mic25,
                mic26: $scope.mic26,
                mic27: $scope.mic27,
                mic28: $scope.mic28,
                mic29: $scope.mic29,
                mic30: $scope.mic30,
                plat1: $scope.plat1,
                plat2: $scope.plat2,
                plat3: $scope.plat3,
                plat4: $scope.plat4,
                plat5: $scope.plat5,
                plat6: $scope.plat6,
                plat7: $scope.plat7,
                plat8: $scope.plat8,
                plat9: $scope.plat9,
                plat10: $scope.plat10,
                sound1: $scope.sound1,
                sound2: $scope.sound2,
                sound3: $scope.sound3,
                sound4: $scope.sound4,
                sound5: $scope.sound5,
                sound6: $scope.sound6,
                sound7: $scope.sound7,
                sound8: $scope.sound8,
                sound9: $scope.sound9,
                sound10: $scope.sound10,
                note1: $scope.note1,
                note2: $scope.note2,
                note3: $scope.note3,
                note4: $scope.note4,
                note5: $scope.note5,
                note6: $scope.note6,
                note7: $scope.note7,
                note8: $scope.note8,
                note9: $scope.note9,
                note10: $scope.note10,
            }
        }).then(function(info) {

            if (info.data === 'Success') {

                //Open Confrim Modal
                $scope.savedConfirm = true;

            }

        });

    }

});

//New Incoming Speakers
khi.controller('incoming-sch-change', function($scope, $state, $http, localStorageService, schedule) {

    //Congregation Pin
    $scope.pin = localStorageService.get('congPin');

    //State Name
    $scope.stateName = $state.current.name;

    //Schedule ID
    $scope.id = $state.params.id;

    //----------------------------------------
    // Init Modals
    //----------------------------------------

    $scope.savedConfirm = false;
    $scope.existConfirm = false;

    $scope.doneConfirm = function() {

        $state.go('Admin.All');

    }

    //----------------------------------------
    // Configure Dropdowns
    //----------------------------------------

    $scope.dropConfig = function(val1, val2) {
        
        $scope.dropName = val1;

        if (val2 === 'brothers') {

            $scope.dropFriendType = $scope.allBrothers;

        } else if (val2 === 'sisters') {

            $scope.dropFriendType = $scope.allSisters;

        } else {

            $scope.dropFriendType = $scope.allFriends;

        }

    }

    //All Brothers
    schedule.getFriends($scope.pin, 'brothers').then(function(friends) {
        
        //console.log(friends);
        $scope.allBrothers = friends.data;

    });

    //-------------------------
    //Speaker | Variables
    //-------------------------

    if ($scope.id) {

        //Get Schedule Info
        //-------------------------
        $http({
            method: 'GET',
            url: 'kapi-v1/kapi.php',
            params: {
                pin: $scope.pin,
                id: $scope.id,
                task: 'getSingleSchedule',
                type: 'incoming'
            }
        }).then(function(src) {

            //Main Schedule Date
            $scope.sDate = new Date(src.data[0].sDate);

            //Mid Date 1 - 10
            $scope.mDate1 = new Date(src.data[0].mDate1);
            $scope.mDate2 = new Date(src.data[0].mDate2);
            $scope.mDate3 = new Date(src.data[0].mDate3);
            $scope.mDate4 = new Date(src.data[0].mDate4);
            $scope.mDate5 = new Date(src.data[0].mDate5);

            $scope.talkNum1 = parseInt(src.data[0].talkNum1);
            $scope.talkNum2 = parseInt(src.data[0].talkNum2);
            $scope.talkNum3 = parseInt(src.data[0].talkNum3);
            $scope.talkNum4 = parseInt(src.data[0].talkNum4);
            $scope.talkNum5 = parseInt(src.data[0].talkNum5);

            $scope.talk1 = src.data[0].talk1;
            $scope.talk2 = src.data[0].talk2;
            $scope.talk3 = src.data[0].talk3;
            $scope.talk4 = src.data[0].talk4;
            $scope.talk5 = src.data[0].talk5;

            $scope.brother1 = src.data[0].brother1;
            $scope.brother2 = src.data[0].brother2;
            $scope.brother3 = src.data[0].brother3;
            $scope.brother4 = src.data[0].brother4;
            $scope.brother5 = src.data[0].brother5;

            $scope.cong1 = src.data[0].cong1;
            $scope.cong2 = src.data[0].cong2;
            $scope.cong3 = src.data[0].cong3;
            $scope.cong4 = src.data[0].cong4;
            $scope.cong5 = src.data[0].cong5;

            $scope.host1 = src.data[0].host1;
            $scope.host2 = src.data[0].host2;
            $scope.host3 = src.data[0].host3;
            $scope.host4 = src.data[0].host4;
            $scope.host5 = src.data[0].host5;

        });

    } else {

        //Main Schedule Date
        $scope.sDate = new Date();

        //Mid Date 1 - 10
        $scope.mDate1 = new Date();
        $scope.mDate2 = new Date();
        $scope.mDate3 = new Date();
        $scope.mDate4 = new Date();
        $scope.mDate5 = new Date();

        $scope.talkNum1 = 1;
        $scope.talkNum2 = 1;
        $scope.talkNum3 = 1;
        $scope.talkNum4 = 1;
        $scope.talkNum5 = 1;

        $scope.talk1 = '';
        $scope.talk2 = '';
        $scope.talk3 = '';
        $scope.talk4 = '';
        $scope.talk5 = '';

        $scope.brother1 = '';
        $scope.brother2 = '';
        $scope.brother3 = '';
        $scope.brother4 = '';
        $scope.brother5 = '';

        $scope.cong1 = '';
        $scope.cong2 = '';
        $scope.cong3 = '';
        $scope.cong4 = '';
        $scope.cong5 = '';

        $scope.host1 = '';
        $scope.host2 = '';
        $scope.host3 = '';
        $scope.host4 = '';
        $scope.host5 = '';

    }

    //DateChange
    $scope.dateChange = function(date, val) {

        if (date === 'sDate') {

            $scope.sDate = val;

        } else if (date === 'mDate1') {

            $scope.mDate1 = val;

        } else if (date === 'mDate2') {

            $scope.mDate2 = val;

        } else if (date === 'mDate3') {

            $scope.mDate3 = val;

        } else if (date === 'mDate4') {

            $scope.mDate4 = val;

        } else if (date === 'mDate5') {

            $scope.mDate5 = val;

        }

    }

    //NumChange
    $scope.numChange = function(num, val) {

        if (num === 'talkNum1') {

            $scope.talkNum1 = val;

        } else if (num === 'talkNum2') {

            $scope.talkNum2 = val;

        } else if (num === 'talkNum3') {

            $scope.talkNum3 = val;

        } else if (num === 'talkNum4') {

            $scope.talkNum4 = val;

        } else if (num === 'talkNum5') {

            $scope.talkNum5 = val;

        }

    }

    $scope.inputChange = function(input, val) {

        if (input === 'talk1') {

            $scope.talk1 = val;

        } else if (input === 'talk2') {

            $scope.talk2 = val;

        } else if (input === 'talk3') {

            $scope.talk3 = val;

        } else if (input === 'talk4') {

            $scope.talk4 = val;

        } else if (input === 'talk5') {

            $scope.talk5 = val;

        } else if (input === 'brother1') {

            $scope.brother1 = val;

        } else if (input === 'brother2') {

            $scope.brother2 = val;

        } else if (input === 'brother3') {

            $scope.brother3 = val;

        } else if (input === 'brother4') {

            $scope.brother4 = val;

        } else if (input === 'brother5') {

            $scope.brother5 = val;

        } else if (input === 'cong1') {

            $scope.cong1 = val;

        } else if (input === 'cong2') {

            $scope.cong2 = val;

        } else if (input === 'cong3') {

            $scope.cong3 = val;

        } else if (input === 'cong4') {

            $scope.cong4 = val;

        } else if (input === 'cong5') {

            $scope.cong5 = val;

        }

    }

    //Hospitality - Swap | Function
    $scope.speakerSwap = function(part, speaker) {

        //-------------------------------
        //Incoming Speaker | Hospitality
        //-------------------------------

        if (part === 'host1') {

            $scope.host1 = speaker;

        } else if (part === 'host2') {

            $scope.host2 = speaker;

        } else if (part === 'host3') {

            $scope.host3 = speaker;

        } else if (part === 'host4') {

            $scope.host4 = speaker;

        } else if (part === 'host5') {

            $scope.host5 = speaker;

        }

    }

    //Precheck
    $scope.preCheck = function() {

        $http({
            method: 'GET',
            url: 'kapi-v1/kapi.php',
            params: {
                pin: $scope.pin,
                task: 'preCheck',
                type: 'incoming',
                sDate: moment($scope.sDate).format()
            }
        }).then(function(check) {

            console.log(check);

            if (check.data === 'new') {

                $scope.save();

            } else {

                //Show Dialog
                $scope.existConfirm = true;

            }

        });

    }

    //Save
    $scope.save = function() {

        $http({
            method: 'GET',
            url: 'kapi-v1/kapi.php',
            params: {
                pin: $scope.pin,
                task: 'save',
                type: 'incoming',
                sDate: moment($scope.sDate).format(),
                mDate1: moment($scope.mDate1).format(),
                mDate2: moment($scope.mDate2).format(),
                mDate3: moment($scope.mDate3).format(),
                mDate4: moment($scope.mDate4).format(),
                mDate5: moment($scope.mDate5).format(),
                talkNum1: $scope.talkNum1,
                talkNum2: $scope.talkNum2,
                talkNum3: $scope.talkNum3,
                talkNum4: $scope.talkNum4,
                talkNum5: $scope.talkNum5,
                talk1: $scope.talk1,
                talk2: $scope.talk2,
                talk3: $scope.talk3,
                talk4: $scope.talk4,
                talk5: $scope.talk5,
                brother1: $scope.brother1,
                brother2: $scope.brother2,
                brother3: $scope.brother3,
                brother4: $scope.brother4,
                brother5: $scope.brother5,
                cong1: $scope.cong1,
                cong2: $scope.cong2,
                cong3: $scope.cong3,
                cong4: $scope.cong4,
                cong5: $scope.cong5,
                host1: $scope.host1,
                host2: $scope.host2,
                host3: $scope.host3,
                host4: $scope.host4,
                host5: $scope.host5
            }
        }).then(function(check) {

            if (check.data === 'Success') {

                $scope.existConfirm = false;
                $scope.savedConfirm = true;

            }

        });

    }

});

//New Incoming Speakers
khi.controller('outgoing-sch-change', function($scope, $state, $http, localStorageService, schedule) {
    
        //Congregation Pin
        $scope.pin = localStorageService.get('congPin');
    
        //State Name
        $scope.stateName = $state.current.name;
    
        //Schedule ID
        $scope.id = $state.params.id;
    
        //----------------------------------------
        // Init Modals
        //----------------------------------------
    
        $scope.savedConfirm = false;
        $scope.existConfirm = false;
    
        $scope.doneConfirm = function() {
    
            $state.go('Admin.All');
    
        }

        //----------------------------------------
        // Configure Dropdowns
        //----------------------------------------

        $scope.dropConfig = function(val1) {
        
            $scope.dropName = val1;
    
        }

        //All Brothers
        schedule.getFriends($scope.pin, 'brothers').then(function(friends) {
        
            //console.log(friends);
            $scope.allBrothers = friends.data;
    
        });
    
        //-------------------------
        //Speaker | Variables
        //-------------------------
    
        if ($scope.id) {
    
            //Get Schedule Info
            //-------------------------
            $http({
                method: 'GET',
                url: 'kapi-v1/kapi.php',
                params: {
                    pin: $scope.pin,
                    id: $scope.id,
                    task: 'getSingleSchedule',
                    type: 'outgoing'
                }
            }).then(function(src) {
    
                //Main Schedule Date
                $scope.sDate = new Date(src.data[0].sDate);
    
                //Mid Date 1 - 10
                $scope.mDate1 = new Date(src.data[0].mDate1);
                $scope.mDate2 = new Date(src.data[0].mDate2);
                $scope.mDate3 = new Date(src.data[0].mDate3);
                $scope.mDate4 = new Date(src.data[0].mDate4);
                $scope.mDate5 = new Date(src.data[0].mDate5);
    
                $scope.talkNum1 = parseInt(src.data[0].talkNum1);
                $scope.talkNum2 = parseInt(src.data[0].talkNum2);
                $scope.talkNum3 = parseInt(src.data[0].talkNum3);
                $scope.talkNum4 = parseInt(src.data[0].talkNum4);
                $scope.talkNum5 = parseInt(src.data[0].talkNum5);
    
                $scope.talk1 = src.data[0].talk1;
                $scope.talk2 = src.data[0].talk2;
                $scope.talk3 = src.data[0].talk3;
                $scope.talk4 = src.data[0].talk4;
                $scope.talk5 = src.data[0].talk5;
    
                $scope.brother1 = src.data[0].brother1;
                $scope.brother2 = src.data[0].brother2;
                $scope.brother3 = src.data[0].brother3;
                $scope.brother4 = src.data[0].brother4;
                $scope.brother5 = src.data[0].brother5;
    
                $scope.cong1 = src.data[0].congregation1;
                $scope.cong2 = src.data[0].congregation2;
                $scope.cong3 = src.data[0].congregation3;
                $scope.cong4 = src.data[0].congregation4;
                $scope.cong5 = src.data[0].congregation5;

                $scope.time1 = new Date(src.data[0].time1);
                $scope.time2 = new Date(src.data[0].time2);
                $scope.time3 = new Date(src.data[0].time3);
                $scope.time4 = new Date(src.data[0].time4);
                $scope.time5 = new Date(src.data[0].time5);
    
            });
    
        } else {
    
            //Main Schedule Date
            $scope.sDate = new Date();
    
            //Mid Date 1 - 10
            $scope.mDate1 = new Date();
            $scope.mDate2 = new Date();
            $scope.mDate3 = new Date();
            $scope.mDate4 = new Date();
            $scope.mDate5 = new Date();
    
            $scope.talkNum1 = 1;
            $scope.talkNum2 = 1;
            $scope.talkNum3 = 1;
            $scope.talkNum4 = 1;
            $scope.talkNum5 = 1;
    
            $scope.talk1 = '';
            $scope.talk2 = '';
            $scope.talk3 = '';
            $scope.talk4 = '';
            $scope.talk5 = '';
    
            $scope.brother1 = '';
            $scope.brother2 = '';
            $scope.brother3 = '';
            $scope.brother4 = '';
            $scope.brother5 = '';
    
            $scope.cong1 = '';
            $scope.cong2 = '';
            $scope.cong3 = '';
            $scope.cong4 = '';
            $scope.cong5 = '';

            $scope.time1 = new Date();
            $scope.time2 = new Date();
            $scope.time3 = new Date();
            $scope.time4 = new Date();
            $scope.time5 = new Date();
    
        }
    
        //DateChange
        $scope.dateChange = function(date, val) {
    
            if (date === 'sDate') {
    
                $scope.sDate = val;
    
            } else if (date === 'mDate1') {
    
                $scope.mDate1 = val;
    
            } else if (date === 'mDate2') {
    
                $scope.mDate2 = val;
    
            } else if (date === 'mDate3') {
    
                $scope.mDate3 = val;
    
            } else if (date === 'mDate4') {
    
                $scope.mDate4 = val;
    
            } else if (date === 'mDate5') {
    
                $scope.mDate5 = val;
    
            }
    
        }
    
        //NumChange
        $scope.numChange = function(num, val) {
    
            if (num === 'talkNum1') {
    
                $scope.talkNum1 = val;
    
            } else if (num === 'talkNum2') {
    
                $scope.talkNum2 = val;
    
            } else if (num === 'talkNum3') {
    
                $scope.talkNum3 = val;
    
            } else if (num === 'talkNum4') {
    
                $scope.talkNum4 = val;
    
            } else if (num === 'talkNum5') {
    
                $scope.talkNum5 = val;
    
            }
    
        }
    
        $scope.inputChange = function(input, val) {
    
            if (input === 'talk1') {
    
                $scope.talk1 = val;
    
            } else if (input === 'talk2') {
    
                $scope.talk2 = val;
    
            } else if (input === 'talk3') {
    
                $scope.talk3 = val;
    
            } else if (input === 'talk4') {
    
                $scope.talk4 = val;
    
            } else if (input === 'talk5') {
    
                $scope.talk5 = val;
    
            } else if (input === 'cong1') {
    
                $scope.cong1 = val;
    
            } else if (input === 'cong2') {
    
                $scope.cong2 = val;
    
            } else if (input === 'cong3') {
    
                $scope.cong3 = val;
    
            } else if (input === 'cong4') {
    
                $scope.cong4 = val;
    
            } else if (input === 'cong5') {
    
                $scope.cong5 = val;
    
            } else if(input === 'time1'){

                $scope.time1 = val;

            } else if(input === 'time2'){
                
                $scope.time2 = val;

            } else if(input === 'time3'){
                
                $scope.time3 = val;

            } else if(input === 'time4'){
                
                $scope.time4 = val;

            } else if(input === 'time5'){
                
                $scope.time5 = val;

            }
    
        }

        //Speaker Swap | Function
        $scope.speakerSwap = function(part, speaker) {
        
            //-------------------------
            //Speakers
            //-------------------------

            if (part === 'brother1') {

                $scope.brother1 = speaker;

            } else if (part === 'brother2') {

                $scope.brother2 = speaker;

            } else if (part === 'brother3') {

                $scope.brother3 = speaker;

            } else if (part === 'brother4') {

                $scope.brother4 = speaker;

            } else if (part === 'brother5') {
                
                $scope.brother5 = speaker;

            }

        }
    
        //Precheck
        $scope.preCheck = function() {
    
            $http({
                method: 'GET',
                url: 'kapi-v1/kapi.php',
                params: {
                    pin: $scope.pin,
                    task: 'preCheck',
                    type: 'outgoing',
                    sDate: moment($scope.sDate).format()
                }
            }).then(function(check) {
    
                if (check.data === 'new') {
    
                    $scope.save();
    
                } else {
    
                    //Show Dialog
                    $scope.existConfirm = true;
    
                }
    
            });
    
        }
    
        //Save
        $scope.save = function() {
    
            $http({
                method: 'GET',
                url: 'kapi-v1/kapi.php',
                params: {
                    pin: $scope.pin,
                    task: 'save',
                    type: 'outgoing',
                    sDate: moment($scope.sDate).format(),
                    mDate1: moment($scope.mDate1).format(),
                    mDate2: moment($scope.mDate2).format(),
                    mDate3: moment($scope.mDate3).format(),
                    mDate4: moment($scope.mDate4).format(),
                    mDate5: moment($scope.mDate5).format(),
                    talkNum1: $scope.talkNum1,
                    talkNum2: $scope.talkNum2,
                    talkNum3: $scope.talkNum3,
                    talkNum4: $scope.talkNum4,
                    talkNum5: $scope.talkNum5,
                    talk1: $scope.talk1,
                    talk2: $scope.talk2,
                    talk3: $scope.talk3,
                    talk4: $scope.talk4,
                    talk5: $scope.talk5,
                    brother1: $scope.brother1,
                    brother2: $scope.brother2,
                    brother3: $scope.brother3,
                    brother4: $scope.brother4,
                    brother5: $scope.brother5,
                    cong1: $scope.cong1,
                    cong2: $scope.cong2,
                    cong3: $scope.cong3,
                    cong4: $scope.cong4,
                    cong5: $scope.cong5,
                    time1: moment($scope.time1).format(),
                    time2: moment($scope.time2).format(),
                    time3: moment($scope.time3).format(),
                    time4: moment($scope.time4).format(),
                    time5: moment($scope.time5).format()
                }
            }).then(function(check) {
    
                if (check.data === 'Success') {
    
                    $scope.existConfirm = false;
                    $scope.savedConfirm = true;
    
                }
    
            });
    
        }
    
});

//Maps
khi.controller('maps', function($scope, $http, Upload, localStorageService){

    //Focus Search Button
    $('#mapSearchBox').focus();

    //Congregation Pin
    $scope.pin = localStorageService.get('congPin');

    //Empty Options Array
    $scope.options = [];

    //Load Maps
    $scope.loadMaps = function(){

        $http({
            method: 'GET',
            url: 'kapi-v1/territory/terMaps.api.php',
            params: {
                pin: $scope.pin
            }
        }).then(function(resp){

            console.log(resp.data);
            $scope.maps = resp.data;

        });

    }

    //Show New Map Panel
    $scope.showNewMapPanel = function(){

        //Toggle New Map Panel
        $('.new-map').toggleClass('toggle');
        $('.maps').toggleClass('toggle');


    }

    $scope.showTerOptions = function(id){

        $scope.options = [{
            id: id,
            img_url: "https://www.gumtree.com/static/1/resources/assets/rwd/images/orphans/a37b37d99e7cef805f354d47.noimage_thumbnail.png",
            tNum: "55" + id,
            tCity: "Orland Park"
        }];

        if(id === 1){

            $scope.checkedOut = [{
                user: 'Dee Gibson',
                checkedOut: 'July 2018',
                checkedIn: 'Pending'
            },{
                user: 'Deontey Gibson',
                checkedOut: 'July 2018',
                checkedIn: 'November 2018'
            }];

        } else if(id === 2){

            $scope.checkedOut = [{
                user: 'Dee Gibson',
                checkedOut: 'July 2018',
                checkedIn: 'Pending'
            }];
            
        }

    }

    //Save Territory
    $scope.saveTer = function(){

        if($scope.terCity != undefined && $scope.terNum != undefined && $scope.terType != undefined && $scope.file != undefined){

            console.log('Valid Form');

            //Upload The Territory Map
            Upload.upload({
                url: 'kapi-v1/territory/terUpload.api.php',
                data: {
                    file: $scope.file,
                    pin: $scope.pin,
                    terCity: $scope.terCity,
                    terNum: $scope.terNum,
                    terType: $scope.terType
                }
            }).then(function(resp){

                console.log(resp.data);
                if(resp.data == 1){

                    //Reset Panel
                    $scope.resetTer();
                    $scope.loadMaps();

                }

            });

        } else {
            console.log('Invalid Form');
        }

    }

    //Reset Territory Val()
    $scope.resetTer = function(){

        //Toggle New Map Panel
        $('.new-map').removeClass('toggle');
        $('.maps').removeClass('toggle');

        //Reset Values
        $scope.file = undefined;
        $scope.terCity = '';
        $scope.terNum = '';
        $scope.terType = 'Local';

    }

    //Load Maps On Inital Visit
    $scope.loadMaps();

    //Add Active Class To Inner Map Container
    $('.inner-map-container').click(function(){

        $('.inner-map-container').removeClass('active');

        $(this).toggleClass('active');

    });

});

//Login - Controller
khi.controller('login-admin', function($scope, kAuth) {

    //kAuth.localKeys();

    $scope.loginAdmin = function() {

        if (kAuth.loginAdmin($scope.email, $scope.password) === 'WrongPin') {

            console.log('Wrong Pin');

        }

    }

});

//----------------------------------------
// Master Specific | Controllers
//----------------------------------------

khi.controller('sourceMaster', function($scope, $http, schedule) {

    $scope.getSource = function() {

        //Get Current Source Material
        //Save Source to local Var
        $http({
            method: 'GET',
            url: 'kapi-v1/kapi.php',
            params: {
                task: 'getMasterSource'
            }
        }).then(function(source) {

            //console.log("Source Is: " + source);
            $scope.sourceMaterial = source.data;

        });

    }

    $scope.getSource();

});

//Source Material
khi.controller('source-add', function($scope, $state, $http, schedule) {

    //Source ID
    $scope.id = $state.params.id;

    if ($scope.id) {

        //Get all Schedules
        //-------------------------
        $http({
            method: 'GET',
            url: 'kapi-v1/kapi.php',
            params: {
                sourceId: $scope.id,
                task: 'getSource',
            }
        }).then(function(src) {

            var sc = src.data[0];

            $scope.sDate = new Date(moment(sc['mm_sdate']));

            $scope.eDate = new Date(moment(sc['mm_edate']));

            $scope.wbr = sc['mm_wbr'];

            $scope.song1 = parseInt(sc['mm_song1']);

            $scope.talk1 = sc['mm_talk1'];

            $scope.talk2 = 'Digging For Spiritual Gems';

            $scope.br = sc['mm_br'];

            $scope.videoOption = parseInt(sc['video']);

            $scope.part1 = sc['mm_ic'];
            $scope.part1M = sc['mm_icm'];

            $scope.part2 = sc['mm_rv'];
            $scope.part2M = sc['mm_rvm'];

            $scope.part3 = sc['mm_bs'];
            $scope.part3M = sc['mm_bsm'];

            $scope.song2 = parseInt(sc['mm_song2']);

            $scope.ep = parseInt(sc['ep']);

            $scope.localOnly = 0;

            $scope.local = sc['mm_ln'];
            $scope.localTime = parseInt(sc['lnTime']);

            $scope.talk4 = sc['mm_talk3'];
            $scope.talk4Time = parseInt(sc['t3Time']);

            $scope.cbs = sc['mm_cbs'];

            $scope.song3 = parseInt(sc['mm_song3']);

        });

    } else {

        $scope.sDate = undefined;

        $scope.eDate = undefined;

        $scope.wbr = '';

        $scope.song1 = 0;

        $scope.talk1 = '';

        $scope.talk2 = 'Digging For Spiritual Gems';

        $scope.br = '';

        $scope.videoOption = 0;

        $scope.part1 = '';
        $scope.part1M = '';

        $scope.part2 = '';
        $scope.part2M = '';

        $scope.part3 = '';
        $scope.part3M = '';

        $scope.song2 = 0;

        $scope.ep = 0;

        $scope.localOnly = 0;

        $scope.local = '';
        $scope.localTime = 0;

        $scope.talk4 = '';
        $scope.talk4Time = 0;

        $scope.cbs = '';

        $scope.song3 = 0;

    }

    //Maually Change Dates
    $scope.dateChange = function(date, val) {

        //console.log(val);

        if (date === 'sDate') {

            $scope.sDate = new Date(moment(val));

        } else if (date === 'eDate') {

            $scope.eDate = new Date(moment(val));

        }

    }

    //Manually Change Material Fields
    $scope.materialSwap = function(mat, val) {

        if (mat === 'wbr') {
        } else if (mat === 'song1') {

            $scope.song1 = val;

        } else if (mat === 'talk1') {

            $scope.talk1 = val;

        } else if (mat === 'br') {

            $scope.br = val;

        } else if (mat === 'videoOption') {

            $scope.videoOption = val;

        } else if (mat === 'part1') {

            $scope.part1 = val;

        } else if (mat === 'part1M') {

            $scope.part1M = val;

        } else if (mat === 'part2') {

            $scope.part2 = val;

        } else if (mat === 'part2M') {

            $scope.part2M = val;

        } else if (mat === 'part3') {

            $scope.part3 = val;

        } else if (mat === 'part3M') {

            $scope.part3M = val;

        } else if (mat === 'song2') {

            $scope.song2 = val;

        } else if (mat === 'ep') {

            $scope.ep = val;

        } else if (mat === 'local') {

            $scope.local = val;

        } else if (mat === 'localTime') {

            $scope.localTime = val;

        } else if (mat === 'talk4') {

            $scope.talk4 = val;

        } else if (mat === 'talk4Time') {

            $scope.talk4Time = val;

        } else if (mat === 'cbs') {

            $scope.cbs = val;

        }

    }

    $scope.preCheck = function() {

        $http({
            method: 'GET',
            url: 'kapi-v1/kapi.php',
            params: {
                task: 'preCheck',
                type: 'material',
                sDate: $scope.sDate,
                eDate: $scope.eDate
            }
        }).then(function(check) {

            if (check.data === 'mmNew') {

                $scope.save();

            } else {

                console.log("Already Meeting Material With Date");

            }

        });

    }

    $scope.save = function() {

        $http({
            method: 'GET',
            url: 'kapi-v1/kapi.php',
            params: {
                task: 'save',
                type: 'material',
                sDate: $scope.sDate,
                eDate: $scope.eDate,
                wbr: $scope.wbr,
                song1: $scope.song1,
                talk1: $scope.talk1,
                talk2: $scope.talk2,
                br: $scope.br,
                videoOption: $scope.videoOption,
                part1: $scope.part1,
                part1M: $scope.part1M,
                part2: $scope.part2,
                part2M: $scope.part2M,
                part3: $scope.part3,
                part3M: $scope.part3M,
                song2: $scope.song2,
                ep: $scope.ep,
                local: $scope.local,
                localTime: $scope.localTime,
                talk4: $scope.talk4,
                talk4Time: $scope.talk4Time,
                cbs: $scope.cbs,
                song3: $scope.song3
            }
        }).then(function(res) {

            console.log(res.data);
            $state.go('Master.Source');

        });

    }

    $scope.update = function() {

        console.log($scope.part1);

        $http({
            method: 'GET',
            url: 'kapi-v1/kapi.php',
            params: {
                task: 'updateMaterial',
                sourceId: $scope.id,
                sDate: $scope.sDate,
                eDate: $scope.eDate,
                wbr: $scope.wbr,
                song1: $scope.song1,
                talk1: $scope.talk1,
                br: $scope.br,
                videoOption: $scope.videoOption,
                part1: $scope.part1,
                part1M: $scope.part1M,
                part2: $scope.part2,
                part2M: $scope.part2M,
                part3: $scope.part3,
                part3M: $scope.part3M,
                song2: $scope.song2,
                ep: $scope.ep,
                local: $scope.local,
                localTime: $scope.localTime,
                talk4: $scope.talk4,
                talk4Time: $scope.talk4Time,
                cbs: $scope.cbs,
                song3: $scope.song3
            }
        }).then(function(res) {

            console.log(res.data);
            //$state.go('Master.Source');

        });

    }

});

//Login - Controller
khi.controller('login-master', function($scope, kAuth) {

    //kAuth.localKeys();

    $scope.loginMaster = function() {

        if (kAuth.loginMaster($scope.email, $scope.password) === 'WrongPin') {

            console.log('Wrong Pin');

        }

    }

});
