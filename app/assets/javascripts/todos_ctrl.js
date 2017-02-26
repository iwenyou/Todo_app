var todos = ["swipe the floor.","wash the dishes.","feed the cat"];

(function() {
  "use strict";

  angular.module("app").controller("todosCtrl", function($scope) {

      $scope.message = "hello world!";

      $scope.tasks = todos;

      $scope.addTask = function(newTask){
        $scope.tasks.push(newTask);
      };

      window.$scope = $scope;

      });
}());
