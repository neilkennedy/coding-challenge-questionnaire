const Questionnaire = require('../typescript/classes/questionnaire');

test('parse one question text', () => {
  
  let questionTexts = ['What is the capital of Cuba?'];
  let questionnaire = new Questionnaire.default();

  expect(questionnaire.questions.length).toBe(0);
  questionnaire.setQuestions(questionTexts);

  expect(questionnaire.questions.length).toBe(1);
  expect(questionnaire.questions[0].title).toBe(questionTexts[0]);
});

test('parse multiple question text', () => {
  let questionTexts = ['What is the capital of Cuba?', 'What is the capital of Ireland?', 'What is the capital of the UK?'];
  let questionnaire = new Questionnaire.default();

  expect(questionnaire.questions.length).toBe(0);
  questionnaire.setQuestions(questionTexts);

  expect(questionnaire.questions.length).toBe(3);
  expect(questionnaire.questions[0].title).toBe(questionTexts[0]);
  expect(questionnaire.questions[1].title).toBe(questionTexts[1]);
  expect(questionnaire.questions[2].title).toBe(questionTexts[2]);
});