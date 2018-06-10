(function(){
    angular
    .module("turtleFacts").controller("listCtrl",['$scope','quizMetrics','dataService',function($scope,quizMetrics,dataService){
       
       $scope.quizMetrics=quizMetrics;
       $scope.dataService=dataService;
       $scope.data=dataService.turtlesData;
       $scope.activeTurtle={};
       $scope.search="";
       $scope.activateQuiz = ()=>{quizMetrics.changeState(true);}
       $scope.changeActiveTurtle = (index)=>{
                $scope.activeTurtle=index;
       }
    }]);
    // listCtrl.$inject=[];
    // turtleFacts.controller('listCtrl', listCtrl);
    

})();