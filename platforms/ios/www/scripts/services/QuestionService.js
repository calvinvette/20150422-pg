/**
 * QuestionService - categories, questions
 */
// Use DT Angular (pre-defined TS types for Angular)
// var angular = angular || {};
//import Question = require("Question");
"use strict";
angular.module("tApp").service("QuestionService", function ($rootScope) {
    var lastQuestionId = 0;
    var nextId = function () {
        return ++lastQuestionId;
    };
    var categories = ["World History", "Pop Music", "Geography", "Technology", "Movies"];
    var questions = [];
    $rootScope.$on("QuestionUpdatedEvent", function (evt, question) {
        var originalQuestion = _.find(questions, function (q) {
            return q.questionId == question.questionId;
        });
        angular.extend(originalQuestion, question);
        window.localStorage.setItem("questions", JSON.stringify(questions));
    });
    $rootScope.$on("QuestionAddRequestEvent", function (evt, question) {
        try {
            var exception = new Object();
            exception.message = "ID Generator Failed";
            throw exception;
            question.questionId = nextId();
            questions.push(question);
            window.localStorage.setItem("questions", JSON.stringify(questions));
            $rootScope.$broadcast("QuestionAddedEvent", question);
        }
        catch (e) {
            $rootScope.$broadcast("QuestionAddFailedEvent", {
                failedQuestion: question,
                exception: e
            });
        }
    });
    $rootScope.$on("QuestionDeleteRequestEvent", function (evt, question) {
        questions = _.without(questions, question);
        window.localStorage.setItem("questions", JSON.stringify(questions));
        $rootScope.$broadcast("QuestionDeletedEvent", question);
    });
    //this.addQuestion = function(question : Question) {
    //  questions.push(question);
    //  window.localStorage.setItem("questions", JSON.stringify(questions));
    //};
    this.addCategory = function (category) {
        categories.push(category);
        window.localStorage.setItem("categories", JSON.stringify(category));
    };
    this.getCategoryList = function () {
        return categories;
    };
    this.getQuestions = function () {
        return questions;
    };
    this.init = function () {
        var wlsQuestions = window.localStorage.getItem("questions");
        if (wlsQuestions) {
            questions = JSON.parse(wlsQuestions);
            /*  , function(name, value) {
             var q = new Question();
             angular.extend(q, value);
             return q;
             });
             */
            _.each(questions, function (data, idx) {
                questions[idx] = new Question();
                console.log(data);
                if (data._questionId > lastQuestionId) {
                    lastQuestionId = data._questionId;
                }
                angular.extend(questions[idx], data);
            });
        }
        var wlsCategories = window.localStorage.getItem("categories");
        if (wlsCategories) {
            categories = JSON.parse(wlsCategories);
        }
    };
    this.init();
});
//# sourceMappingURL=QuestionService.js.map