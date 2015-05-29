class Question {
	private _author : string;
	private _lastEditDate : Date;
	private _editHistory : Object[]; // Change to an EditLog class array
  private _questionId : number = -1; // Primary Key


	constructor( public questionText : string, public answerText : string, public category : string,
               public pointValue : number, public contextNotes : string, questionId : number) {
    this.questionId = questionId;
	}

  get questionId() : number {
    return this._questionId;
  }

  set questionId(questionId : number) {
    if (questionId > 0) {
      this._questionId = questionId;
    } // reject 0 or negative numbers as a valid questionId
  }

  equals = function(otherQuestion:Question):boolean {
    if (this === otherQuestion) {
      return true;
    }
    if (
      (this.questionText == otherQuestion.questionText) &&
      (this.answerText == otherQuestion.answerText) &&
      (this.category == otherQuestion.category) &&
      (this.pointValue == otherQuestion.pointValue)
    ) {
      return true;
    }
    return false;
  }

}

// export = Question;
