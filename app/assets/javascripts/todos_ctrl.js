var todos = ["swipe the floor.","wash the dishes.","feed the cat"];

(function() {
  "use strict";

  angular.module("app").controller("todosCtrl", function($scope) {

    // for(var i = 0; i < todos; i++){
      $scope.message = todos;
    // }
      window.$scope = $scope;

      });
}());
