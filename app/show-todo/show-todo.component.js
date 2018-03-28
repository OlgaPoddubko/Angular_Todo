angular.module('showTodo').component('showTodo', {
  templateUrl: 'app/show-todo/show-todo.template.html',
  controller: [
    '$scope',
    'todoFactory',
    ($scope, todoFactory) => {
      $scope.todos = todoFactory.getTodos();
      $scope.removeTodo = todo => {
        todoFactory.removeTodo(todo);
      };

      $scope.editTodo = todo => {
        todoFactory.setEditState(todo);
      };

      $scope.toggleDone = function(todo) {
        todoFactory.toggleDone(todo);
      };

      $scope.sortParam = 'created | todoDays';
      $scope.sortBy = function(sortParam) {
        $scope.sortParam = sortParam;
      };
    }
  ]
});
