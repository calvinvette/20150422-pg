/**
 * QuestionEditor Controller - categories, questions
 */
// import Question = require("Question");
// import QuestionService = require("QuestionService");
angular.module("tApp").controller("QuestionEditor", function ($scope, QuestionService, $rootScope, $filter) {
    $scope.categories = QuestionService.getCategoryList();
    $scope.questions = QuestionService.getQuestions();
    $scope.startDate = new Date();
    $scope.score = 1234.56;
    $scope.filterCategory = "";
    $scope.filteredQuestions = $scope.questions;
    /*
    TODO-CV - fix filter
    $scope.$watch("filterCategory", function() {
      $scope.filteredQuestions = $filter('CategoryFilter')($scope.questions, $scope.filterCategory);
    });
    */
    $rootScope.$on("QuestionDeletedEvent", function (data) {
        $scope.questions = QuestionService.getQuestions();
    });
    //$rootScope.$on("QuestionAddedEvent", function(data) {
    //  $scope.questions = QuestionService.getQuestions();
    //});
    $scope.currentlyEditingQuestion = new Question();
    $scope.isEditing = function (question) {
        if (question.questionId == $scope.currentlyEditingQuestion.questionId) {
            return true;
        }
        if (question.equals($scope.currentlyEditingQuestion)) {
            return true;
        }
        return false;
    };
    $scope.setEditing = function (question, indexPosition) {
        question.indexPosition = indexPosition;
        angular.extend($scope.currentlyEditingQuestion, question);
    };
    $scope.keyHandler = function (evt, question) {
        switch (evt.keyCode) {
            case 13:
                angular.extend(question, $scope.currentlyEditingQuestion);
                $scope.currentlyEditingQuestion = new Question();
                if (question.questionId <= 0) {
                    $rootScope.$broadcast("QuestionAddRequestEvent", question);
                }
                else {
                    $rootScope.$broadcast("QuestionUpdatedEvent", question);
                }
                break;
            case 27:
                $scope.currentlyEditingQuestion = new Question();
                break;
            default:
        }
    };
    $scope.delete = function (question) {
        $rootScope.$broadcast("QuestionDeleteRequestEvent", question);
    };
    $scope.addQuestion = function () {
        $scope.currentlyEditingQuestion = new Question();
        //$scope.questions.push($scope.currentlyEditingQuestion);
        $rootScope.$broadcast("QuestionAddRequestEvent", $scope.currentlyEditingQuestion);
    };
    $scope.showFront = true;
    $scope.swipeLeft = function (evt) {
        console.log("Left Swipe");
        $scope.showFront = true;
    };
    $scope.swipeRight = function (evt) {
        console.log("Right Swipe");
        $scope.showFront = false;
    };
    $scope.swipeUp = function (evt) {
        console.log("Up Swipe");
        $scope.showFront = false;
    };
    $scope.swipeDown = function (evt) {
        console.log("Down Swipe");
        $scope.showFront = true;
    };
    $scope.pinchIn = function (evt) {
        console.log("Pinch in");
        $scope.showFront = true;
    };
    $scope.pinchOut = function (evt) {
        console.log("Pinch out");
        $scope.showFront = false;
    };
});
//# sourceMappingURL=QuestionEditor.controller.js.map