//creating a module
var myApp = angular.module("myPoemModule",[]);
//creating controller
var myPoemController = function($scope,$http) {
    var TitId;
// authors list................................................authors list    
    var urlAuthor = "data/author.json";
        $http.get(urlAuthor)
        .then(function(response) {
            $scope.poets = response.data;
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
        var chgMenu = document.getElementById("mainMenu1");
        var chgCon = document.getElementById("box1");
        var chgNav = document.getElementById("navBar1");
        chgMenu.classList.remove("shi");
        chgNav.classList.remove("changeC");
        chgCon.classList.remove("changeLeft");
    }
// upload section................................................................
    $scope.livepoem = "Once upon a time"; 
};
myApp.controller("myPoemController",myPoemController);
window.onload = function() {
    alert("PLease select author and poem from the menu{the three bars inside a circle}");
}



