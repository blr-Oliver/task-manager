angular.module('taskManager', []).controller('TabController', TabController);

TabController.$inject = ['$scope'];
TabController.id = 0;
function TabController($scope){
  this.tasks = []; //TODO задачи должны загружаться
  this.tabs = [];
  this.activeTask = null;
}

TabController.prototype = {
  /**
   * Добавляет вкладку с задачей и активирует ее (создает задачу, если необходимо)
   */
  add: function(task){
    if(!task){
      task = {
        id: ++TabController.id,
        name: 'Новая задача'
      };
      this.tasks.push(task);
    }
    var index = this.tabs.findIndex(function(e){
      return e.id == task.id;
    });
    if(!~index)
      this.tabs.push(task);
    this.activate(task);
    return this;
  },
  /**
   * Закрывает вкладку задачи
   */
  close: function(task){
    var index = this.tabs.findIndex(function(e){
      return e.id == task.id;
    });
    if(~index){
      this.tabs.splice(index, 1);
      if(this.activeTask == task.id){
        if(this.tabs.length)
          this.activate(this.tabs[index < this.tabs.length ? index : this.tabs.length - 1]);
      }
    }
    if(!this.tabs.length)
      this.activate(null);
    return this;
  },
  /**
   * Активирует вкладку с задачей среди уже открытых
   */
  activate: function(task){
    this.activeTask = task && task.id;
    return this;
  }
}