

(function () {

    angular
        .module("turtleFacts").controller("quizCtrl", ['$scope', 'quizMetrics', 'dataService', function ($scope, quizMetrics, dataService) {

            $scope.quizMetrics = quizMetrics;
            $scope.dataService = dataService;
            $scope.activeQuestion = 0;
            var numQuestionsAnswered = 0;
            $scope.setActiveQuestion=()=>{
                var breakOut = false;
                var quizLength = dataService.quizQuestions.length - 1;
             
                while(!breakOut){
                    $scope.activeQuestion = $scope.activeQuestion < quizLength?++$scope.activeQuestion:0;
                    if(dataService.quizQuestions[$scope.activeQuestion].selected === null){
                        breakOut = true;
                    }
                }
            };
            $scope.questionAnswered = () => {
                var quizLength = dataService.quizQuestions.length;

                if (dataService.quizQuestions[$scope.activeQuestion].selected !== null) {
                    numQuestionsAnswered++;
                    if(numQuestionsAnswered >= quizLength){
                        //Finalise the quiz
                     }
                }
                $scope.setActiveQuestion();
            };

        }]);

})();