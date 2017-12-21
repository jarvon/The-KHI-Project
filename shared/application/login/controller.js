//Login - Controller
khi.controller('login', function($scope, kAuth) {
    
    //kAuth.localKeys();

    //Under Construction
    $scope.working = false;

    //Login User
    $scope.login = function() {

        if (kAuth.login($scope.pin) === 'WrongPin') {

            //Add Wrong Pin Logic

        }

    }

    $scope.loginAdmin = function() {
        
        if (kAuth.loginAdmin($scope.email, $scope.password) === 'WrongPin') {

            console.log('Wrong Pin');

        }

    }

});