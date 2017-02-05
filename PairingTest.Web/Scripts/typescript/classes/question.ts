export default class Question {
  id: number;// not used (yet)
  title: string;
  answer: string;

  constructor(question: string) {
    this.title = question;
    this.answer = '';
  }
}