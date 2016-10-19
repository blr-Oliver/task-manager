angular.module('taskManager').factory('taskLoader', ['$http', function($http){
	return {
		load: function(){
			return $http({
				url: '/data.json',
				method: 'GET'
			})
		},
		save: function(tasks){
			return $http({
				url: '/data.json',
				method: 'POST',
				data: JSON.stringify(tasks)
			});
		}
	}
}]);