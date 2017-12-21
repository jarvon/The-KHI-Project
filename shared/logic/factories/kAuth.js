//kAuth - Authentication
khi.factory('kAuth', function($http, $state, localStorageService) {
    
        //Init KAuth Object
        var kAuth = {};
    
        //Login | Guest
        kAuth.login = function(pin) {
    
            //HTTP Call
            $http({

                //Method
                method: 'GET',

                //Paths Should Down One Folder
                url: '../kapi-v1/kapi.php',

                //Params
                params: {

                    //Task To Complete
                    task: 'login',

                    //Corresponds To Action
                    pin: pin
                }

            }).then(function(log) {
    
                console.log(log);
    
                if (log.data !== 'false') {
    
                    //1 - Set Local Storage
                    localStorageService.set('congPin', pin);
                    localStorageService.set('logged', true);
                    localStorageService.set('token', log.data);
    
                    //2 - Redirect - Up One Folder
                    window.location.assign("../");
    
                } else {
    
                    return 'WrongPin';
    
                }
    
            }, function() {
    
                return 'Error';
    
            });
    
        }
    
        //Login | Admin
        kAuth.loginAdmin = function(email, password) {
    
            //Login Script here
            $http({
                method: 'GET',
                url: '../kapi-v1/kapi.php',
                params: {
                    task: 'loginAdmin',
                    email: email,
                    password: password
                }
            }).then(function(log) {
    
                if (log.data === 'true') {
    
                    //1 - Set Local Storage
                    localStorageService.set('user', email);
                    localStorageService.set('creds', password);
                    localStorageService.set('loggedAdmin', true);

                    logMeIn();
    
                } else if (log.data === 'false') {
    
                    return 'WrongPin';
    
                }
    
            }, function() {
    
                return 'Error';
    
            });

            //Log Me In Function
            var logMeIn = function(){

                //Login Script here
                $http({
                    method: 'GET',
                    url: '../kapi-v1/kapi.php',
                    params: {
                        task: 'getAdminPin',
                        email: localStorageService.get('user')
                    }
                }).then(function(log) {

                    console.log(log.data);
                    localStorageService.set('congPin', log.data);

                    //2 - Redirect
                    window.location.assign("../#!/admin/dashboard");

                });

            }
    
        }
    
        //Login | Master
        kAuth.loginMaster = function(email, password) {
    
            //Login Script here
            $http({
                method: 'GET',
                url: 'kapi-v1/kapi.php',
                params: {
                    task: 'loginMaster',
                    email: email,
                    password: password
                }
            }).then(function(log) {
    
                if (log.data === 'true') {
    
                    //1 - Set Local Storage
                    localStorageService.set('user', email);
                    localStorageService.set('creds', password);
                    localStorageService.set('loggedMaster', true);
    
                    //2 - Redirect
                    $state.go('Master.Source');
    
                } else if (log.data === 'false') {
    
                    return 'WrongPin';
    
                }
    
            }, function() {
    
                return 'Error';
    
            });
    
        }
    
        //LogOut
        kAuth.logout = function(type) {
    
            if (type === 'guest') {
    
                //Remove Keys
                localStorageService.remove('logged', 'congPin', 'token');
    
            } else if (type === 'admin') {
    
                //Remove Keys
                localStorageService.remove('user', 'creds', 'loggedAdmin', 'congPin', 'singleSourceMaterial', 'sourceMaterial');
    
            } else if (type === 'master') {
    
                //Remove Keys
                localStorageService.remove('user', 'creds', 'loggedMaster');
    
            }
    
        }
    
        //Check if Logged In
        kAuth.loginCheck = function(type) {
    
            if (type === 'Guest') {
    
                //Checks if user is logged in
                if (localStorageService.get('logged') === true) {
    
                    //This value needs to be returned in order for the login check to work on Angular.Run()
                    return true;
    
                } else {
    
                    //User Access Denied
                    return false;
    
                }
    
            } else if (type === 'Admin') {
    
                //Checks if user is logged in
                if (localStorageService.get('loggedAdmin') === true) {
    
                    //This value needs to be returned in order for the login check to work on Angular.Run()
                    return true;
    
                } else {
    
                    //User Access Denied
                    return false;
    
                }
    
            } else if (type === 'Master') {
    
                //Checks if user is logged in
                if (localStorageService.get('loggedMaster') === true) {
    
                    //This value needs to be returned in order for the login check to work on Angular.Run()
                    return true;
    
                } else {
    
                    //User Access Denied
                    return false;
    
                }
    
            }
    
        }
    
        //Check Local Keys
        kAuth.localKeys = function() {
    
            //Check all local keys saved to local storage
            console.log(localStorageService.keys());
    
        }
    
        //Return KAuth Object
        return kAuth;
    
    });