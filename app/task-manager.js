angular.module('taskManager', []).controller('MainController', function($scope){
	$scope.tasks = [];
	$scope.showDone = false;
	$scope.activeTask = null;

	this.createNew = function(){
		$scope.activeTask = {
			description: '',
			urgency: true,
			importance: true,
			done: false,
			created: new Date()
		};
		$scope.tasks.unshift($scope.activeTask);
	}
	this.setSort = function(sort){
		if (sort == 'urgency') $scope.sort = ['-urgency', '-importance', '+created'];
		else if (sort == 'importance') $scope.sort = ['-importance', '-urgency', '+created'];
	}
	this.toggleShowDone = function(){
		$scope.showDone = !$scope.showDone;
	}
	this.activate = function(task){
		$scope.activeTask = task;
	}
	
	this.setSort('urgency');
});
