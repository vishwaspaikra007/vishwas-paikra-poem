//creating a module
var myApp2 = angular.module("myTitleModule", []);
//creating controller
myApp2.controller("myTitleController", function ($scope, $http) {
    var url = "data/title.json";
    $http.get(url)
        .then(function (response) {
            $scope.titles = response.data;
            } ,
          function(error) {
            alert(error);
            });
});