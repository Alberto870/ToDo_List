var app=angular.module("myApp", [])
app.controller("todoCtrl", function($scope) {
  $scope.todoList = [];

if (localStorage.getItem("todoList")) {
  var localTodoToJson = JSON.parse(localStorage.getItem("todoList"));
  $scope.todoList = localTodoToJson;
}

  $scope.todoAdd=function() {
    $scope.todoList.push({texto:$scope.todoInput});
    var localTodo = JSON.stringify(angular.copy($scope.todoList));
    localStorage.setItem("todoList", localTodo);
    $scope.todoInput="";
  };

  $scope.remove = function() {
    $scope.todoList = [];
    localStorage.setItem("todoList", "");
  };

  $scope.delete=function(destroy) {
    $scope.todoList.splice(destroy, 1);
    var localTodo = JSON.stringify(angular.copy($scope.todoList));
    localStorage.setItem("todoList", localTodo);


  }

});
