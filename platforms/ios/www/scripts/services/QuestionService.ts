/**
 * QuestionService - categories, questions
 */

// Use DT Angular (pre-defined TS types for Angular)
// var angular = angular || {};

//import Question = require("Question");
"use strict";
angular.module("tApp").service("QuestionService", function($rootScope) {
  var lastQuestionId:number = 0;
  var nextId = function():number {
    return ++lastQuestionId;
  };
  var categories:Array<string> = ["World History", "Pop Music", "Geography", "Technology", "Movies"];
  var questions:Array<Question> = [
    /*
    new Question("Question1", "Answer1", categories[0], 100, "none", nextId()),
    new Question("Question2", "Answer2", categories[0], 200, "none", nextId()),
    new Question("Question3", "Answer3", categories[0], 300, "none", nextId()),
    new Question("Question4", "Answer4", categories[0], 400, "none", nextId()),
    new Question("Question5", "Answer5", categories[0], 500, "none", nextId()),
    new Question("Question6", "Answer6", categories[1], 100, "none", nextId()),
    new Question("Question7", "Answer7", categories[2], 200, "none", nextId()),
    new Question("Question8", "Answer8", categories[3], 300, "none", nextId()),
    new Question("Question9", "Answer9", categories[4], 400, "none", nextId()),
    new Question("Question10", "Answer10", categories[4], 500, "none", nextId())
    */
  ];


  $rootScope.$on("QuestionUpdatedEvent", function(evt, question) {
    var originalQuestion = _.find(questions, function(q) {
      return q.questionId == question.questionId;
    });
    angular.extend(originalQuestion, question);
    window.localStorage.setItem("questions", JSON.stringify(questions));
  });

  $rootScope.$on("QuestionAddRequestEvent", function(evt, question) {
    try {

      var exception = new Object();
      exception.message = "ID Generator Failed";
      throw exception;
      question.questionId = nextId();
      questions.push(question);
      window.localStorage.setItem("questions", JSON.stringify(questions));
      $rootScope.$broadcast("QuestionAddedEvent", question);

    } catch (e) {
      $rootScope.$broadcast("QuestionAddFailedEvent", {
        failedQuestion: question,
        exception: e
      });
    }
  });

  $rootScope.$on("QuestionDeleteRequestEvent", function(evt, question) {
    questions = _.without(questions, question);
    window.localStorage.setItem("questions", JSON.stringify(questions));
    $rootScope.$broadcast("QuestionDeletedEvent", question);
  });

  //this.addQuestion = function(question : Question) {
  //  questions.push(question);
  //  window.localStorage.setItem("questions", JSON.stringify(questions));
  //};

  this.addCategory = function(category:string) {
    categories.push(category);
    window.localStorage.setItem("categories", JSON.stringify(category));
  };

  this.getCategoryList = function() : Array<string> {
    return categories;
  };

  this.getQuestions = function() : Array<Question> {
    return questions;
  };

  this.init = function() {

    var wlsQuestions = window.localStorage.getItem("questions");
    if (wlsQuestions) {
      questions = JSON.parse(wlsQuestions);
      /*  , function(name, value) {
       var q = new Question();
       angular.extend(q, value);
       return q;
       });
       */
      _.each(questions, function(data, idx) {
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
  }
  this.init();

});
