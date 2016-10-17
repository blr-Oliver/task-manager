angular.module('taskManager').component('taskList', {
  templateUrl: '/task-list.html',
  controller: ['$scope', function($scope){
    this.currentSortAscending = false;
    this.currentSortProperty = null;
    this.toggleSort = function(property){
      if(this.currentSortProperty == property)
        this.currentSortAscending = !this.currentSortAscending;
      else{
        this.currentSortProperty = property;
        this.currentSortAscending = false;
      }
    }
  }],
  bindings: {
    tasks: '=',
    edit: '='
  }
})
