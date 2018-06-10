
 
(function(){
 
    angular
        .module("turtleFacts")
        .controller("quizCtrl", QuizController);
      QuizController.$inject = ['quizMetrics','dataService']
    function QuizController($scope,quizMetrics,dataService){
 
        $scope.quizmetrics=quizmetrics;
        $scope.dataService=dataService;
 
    }
 
})();