using NUnit.Framework;
using PairingTest.Unit.Tests.QuestionServiceWebApi.Stubs;
using QuestionServiceWebApi;
using QuestionServiceWebApi.Controllers;
using System.Collections.Generic;

namespace PairingTest.Unit.Tests.QuestionServiceWebApi
{
  [TestFixture]
  public class QuestionsControllerTests
  {
    [Test]
    public void ShouldGetQuestions()
    {
      //Arrange
      var expectedTitle = "My expected questions";
      var expectedTexts = new List<string>();
      expectedTexts.Add("What is the capital of Cuba?");
      expectedTexts.Add("What is the capital of Ireland?");
      expectedTexts.Add("What is the capital of the UK?");

      var expectedQuestions = new Questionnaire() { QuestionnaireTitle = expectedTitle, QuestionsText = expectedTexts };
      var fakeQuestionRepository = new FakeQuestionRepository() { ExpectedQuestions = expectedQuestions };
      var questionsController = new QuestionsController(fakeQuestionRepository);

      //Act
      var questions = questionsController.Get();

      //Assert
      Assert.That(questions.QuestionnaireTitle, Is.EqualTo(expectedTitle));
      Assert.That(questions.QuestionsText.Count, Is.EqualTo(expectedTexts.Count));
      Assert.That(questions.QuestionsText[0], Is.EqualTo(expectedTexts[0]));
      Assert.That(questions.QuestionsText[1], Is.EqualTo(expectedTexts[1]));
      Assert.That(questions.QuestionsText[2], Is.EqualTo(expectedTexts[2]));
    }
  }
}