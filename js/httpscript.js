//creating a module
var myApp = angular.module("myPoemModule",[]);
//creating controller
var myPoemController = function($scope,$http) {
    var TitId;
// authors list................................................authors list    
    var urlAuthor = "data/author.json";
        $http.get(urlAuthor)
        .then(function(response) {
            $scope.authors = response.data;
            },
          function(error) {
            alert(error);
            }); 
// id calll ................................................................. 
    $scope.titleL = function (i) {
        TitId = i;
// title list................................................title list 
        var urlTitle = "data/" + i +"/title.json";
            $http.get(urlTitle)
            .then(function(response) {
                $scope.titles = response.data;
                },
              function(error) {
                alert("Sorry the author has no Poems" + error);
                }); 
    }
// id calll ................................................................. 
    $scope.poem = function (a) {
// poem ................................................poem 
        var urlPoem = "data/"+ TitId +"/" + a +"/poem.json";
            $http.get(urlPoem)
            .then(function(response) {
                $scope.poems = response.data;
                },
              function(error) {
                alert("Sorry the author has no Poems" + error);
                }); 
        
    }
};
myApp.controller("myPoemController",myPoemController);
 /*   function changeC(x) {
        x.classList.toggle("changeC");
    }
    function sohi() {
        document.getElementById('mainMenu').classList.toggle("shi");
    } */



