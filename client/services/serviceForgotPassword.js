/*****************************************************************************************************
 *@Purpose -CHATAPP
 *@file    - serviceForgotPassword.js
 *@author  - Vaibhaw Tikhile <vaibhawatikhile@gmail.com>
 *@version - 1.0
 *@since   - 13/04/2019
 **************************************************************************************************/

app.service('serviceForgotPassword', function ($http, $location) {


    this.forgotPassword = function (data, $scope) {
        $http({
            method: 'POST',
            url: 'http://localhost:3000/forgotPassword',
            data: data,
        }).then(
            function successCallback(response) {
                console.log("forgotPassword successful ");
                var userid = response.data.message[0]._id;
                var name = response.data.message[0].firstname;
                var token = response.data.token;
                localStorage.setItem("userid", userid);
                localStorage.setItem("name", name);
                localStorage.setItem("token",token);
                $location.path('/dashboard');
                $scope.loginMessage = "login successful";
            },
            function errorCallback(response) {

                console.log("registration Unsuccessful ");
                console.log(response);
                $scope.loginMessage = 'EmailId Incorrect ';


            }
        );
    }

});
