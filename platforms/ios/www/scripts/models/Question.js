var Question = (function () {
    function Question(questionText, answerText, category, pointValue, contextNotes, questionId) {
        this.questionText = questionText;
        this.answerText = answerText;
        this.category = category;
        this.pointValue = pointValue;
        this.contextNotes = contextNotes;
        this._questionId = -1; // Primary Key
        this.equals = function (otherQuestion) {
            if (this === otherQuestion) {
                return true;
            }
            if ((this.questionText == otherQuestion.questionText) && (this.answerText == otherQuestion.answerText) && (this.category == otherQuestion.category) && (this.pointValue == otherQuestion.pointValue)) {
                return true;
            }
            return false;
        };
        this.questionId = questionId;
    }
    Object.defineProperty(Question.prototype, "questionId", {
        get: function () {
            return this._questionId;
        },
        set: function (questionId) {
            if (questionId > 0) {
                this._questionId = questionId;
            } // reject 0 or negative numbers as a valid questionId
        },
        enumerable: true,
        configurable: true
    });
    return Question;
})();
// export = Question;
//# sourceMappingURL=Question.js.map