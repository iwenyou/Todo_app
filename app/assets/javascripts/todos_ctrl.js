var todos = ["swipe the floor.", "wash the dishes.", "feed the cat"];

(function() {
    "use strict";

    angular.module("app").controller("todosCtrl", function($scope) {

        $scope.message = "hello world!";

        $scope.tasks = todos;

        $scope.addTask = function(newTask) {
            if (newTask) {
                $scope.tasks.push(newTask);
                $scope.newTask = null;
            }
        };

        $scope.removeTask = function(index){
          $scope.tasks.splice(index,1);
        };

        window.$scope = $scope;

    });
}());
