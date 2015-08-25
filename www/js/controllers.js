angular.module('starter.controllers', [])
.controller('TasksCtrl', function($scope, tasks, CONFIG) {
  
    var currentStart = 2;
    
    $scope.tasks = tasks.itens;
    
    $scope.maxItems = function(){
        return ($scope.tasks.length <= CONFIG.MAX_LIST)? true : false;
    };
    
    $scope.refreshList = function(){
        tasks.refresh();
        $scope.$broadcast('scroll.refreshComplete');
    };
    
    $scope.addItems = function (){
        tasks.add({titulo:'action '+ currentStart});              
        currentStart += 1;
        $scope.$broadcast('scroll.infiniteScrollComplete');
    };
   
});
