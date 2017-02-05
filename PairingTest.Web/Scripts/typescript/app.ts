
import Questionnaire from './classes/questionnaire';
import * as fetchHelpers from './helpers/fetchHelpers';

export default class App {

  // The URL for the Web API app
  serviceURL: string = '//localhost:50014/api/questions'
  questionnaire: Questionnaire = new Questionnaire();

  // Configure the vue.js application
  constructor(elementId: string) {
    let app = new Vue({
      el: elementId,
      data: {
        questionnaire: this.questionnaire
      },
      methods: {
        next: () => {
          alert("This hasn't been implemented yet");
        }
      }
    });
  }

  // Connect to the service endpoint and download the questions
  download() {
    // the Typescript binding doesn't yet have "fetch"
    (window as any).fetch(this.serviceURL)
      .then(fetchHelpers.checkStatus)
      .then(fetchHelpers.parseJSON)
      .then((json: any) => {
        this.questionnaire.title = json.QuestionnaireTitle;
        this.questionnaire.setQuestions(json.QuestionsText);
      })
      .catch(function (error: Error) {
        console.log('request failed', error);
      });
  }
}