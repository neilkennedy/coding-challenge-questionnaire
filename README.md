# Coding Challenge - Questionnaire
This challenge was pretty simplistic on the surface and seemed to only require me to use ASP's Razor syntax 
to display the questions on the page. I decided to go a bit beyond that requirement when I realised there was
a "Part 2" to this (if I get to the next interview stage). I decided to build out the front end of this application 
a bit further to help with the future enhancements.

I decided not to just display the questions using ASP and instead used Javascript to connect to the service
and vue.js to dynamically bind the questionnaire to the page.

## Technology Used
* Typescript
* Recent Javascript features "fetch" and "Promise"
* [jest](https://facebook.github.io/jest/) for Javascript testing
* Browserify to compile & bundle the Typescript files
* [vue.js](https://vuejs.org/) for UI binding
* npm for front end package management

## Future Improvements
* Implement polyfill for Fetch and Promise to work in older browsers.
* Use vue.js to splint the UI into components.
* Implement grunt or some other task runner to run Browserify when .ts files are saved.

## Things to know before you run
* npm was used as the front end package manager.
  * Please install [node.js](https://nodejs.org/en/) to use npm.
  * Then follow [this link](https://ryanhayes.net/synchronize-node-js-install-version-with-visual-studio-2015/) to make sure Visual Studio 2015 is using the latest version of Node.js
* Install the [NPM Task Runner](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.NPMTaskRunner) extension for Visual Studio
* Install the [NUnit Test Adapter](https://marketplace.visualstudio.com/items?itemName=NUnitDevelopers.NUnit3TestAdapter) to run the C# tests
* The web project is configured to install the npm packages when the solution is first opened
* The web project is configured to bundle the Javascript and run the Javascript tests when the solution is built.

## How to Run
* Open PairingTest.sln in Visual Studio 2015 (if this is the first time it will install the npm packages)
* Build -> Build Solution (this will compile & bundle the Typescript files & run the Javascript tests)
* Debug -> Start Debugging

## Browsers Tested
* Microsoft Edge 15
* Google Chrome 55 & 56

## Brief

## Scenario
The application you will be building is a questionnaire. There is a Web API Service in the solution which will provide you with the questions. The solution uses a hardcoded/mocked repository to avoid using a real data source.

It is expected that you will produce:
* Tested maintainable code
* Clean code and OOP design

You are free to make any changes you feel necessary but it would be good to keep consistency in mind.

## Tasks
1. Using the MVC app in the solution consume the REST Web API service. Display the Questions on a web page along with UI elements for the answers.


**If you progress to the next stage you will be given more tasks to continue using your existing solution.**

