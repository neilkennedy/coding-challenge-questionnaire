import Question from './question';

export default class Questionnaire {
  title: string;
  questions: Array<Question>;

  constructor() {
    this.title = '';
    this.questions = new Array<Question>();
  }

  setTitle(title: string) {
    this.title = title;
  }

  // Create Question objects from a string array of questions
  setQuestions(initialQuestions: Array<string>) {
    if (initialQuestions !== undefined) {
      initialQuestions.forEach(questionText => {
        this.questions.push(new Question(questionText));
      });
    }
  }
}