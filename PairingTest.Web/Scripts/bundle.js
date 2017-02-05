(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.App = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var questionnaire_1 = require("./classes/questionnaire");
var fetchHelpers = require("./helpers/fetchHelpers");
var App = (function () {
    // Configure the vue.js application
    function App(elementId) {
        // The URL for the Web API app
        this.serviceURL = '//localhost:50014/api/questions';
        this.questionnaire = new questionnaire_1["default"]();
        var app = new Vue({
            el: elementId,
            data: {
                questionnaire: this.questionnaire
            },
            methods: {
                next: function () {
                    alert("This hasn't been implemented yet");
                }
            }
        });
    }
    // Connect to the service endpoint and download the questions
    App.prototype.download = function () {
        var _this = this;
        // the Typescript binding doesn't yet have "fetch"
        window.fetch(this.serviceURL)
            .then(fetchHelpers.checkStatus)
            .then(fetchHelpers.parseJSON)
            .then(function (json) {
            _this.questionnaire.title = json.QuestionnaireTitle;
            _this.questionnaire.setQuestions(json.QuestionsText);
        })["catch"](function (error) {
            console.log('request failed', error);
        });
    };
    return App;
}());
exports.__esModule = true;
exports["default"] = App;
},{"./classes/questionnaire":3,"./helpers/fetchHelpers":4}],2:[function(require,module,exports){
"use strict";
var Question = (function () {
    function Question(question) {
        this.title = question;
        this.answer = '';
    }
    return Question;
}());
exports.__esModule = true;
exports["default"] = Question;
},{}],3:[function(require,module,exports){
"use strict";
var question_1 = require("./question");
var Questionnaire = (function () {
    function Questionnaire() {
        this.title = '';
        this.questions = new Array();
    }
    Questionnaire.prototype.setTitle = function (title) {
        this.title = title;
    };
    // Create Question objects from a string array of questions
    Questionnaire.prototype.setQuestions = function (initialQuestions) {
        var _this = this;
        if (initialQuestions !== undefined) {
            initialQuestions.forEach(function (questionText) {
                _this.questions.push(new question_1["default"](questionText));
            });
        }
    };
    return Questionnaire;
}());
exports.__esModule = true;
exports["default"] = Questionnaire;
},{"./question":2}],4:[function(require,module,exports){
"use strict";
// A helper function to throw an error if the fetch request was not successful
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}
exports.checkStatus = checkStatus;
// A helper function to parse the fetch response into JSON
function parseJSON(response) {
    return response.json();
}
exports.parseJSON = parseJSON;
},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHRzL3R5cGVzY3JpcHQvYXBwLnRzIiwic2NyaXB0cy90eXBlc2NyaXB0L2NsYXNzZXMvcXVlc3Rpb24udHMiLCJzY3JpcHRzL3R5cGVzY3JpcHQvY2xhc3Nlcy9xdWVzdGlvbm5haXJlLnRzIiwic2NyaXB0cy90eXBlc2NyaXB0L2hlbHBlcnMvZmV0Y2hIZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0NBLHlEQUFvRDtBQUNwRCxxREFBdUQ7QUFFdkQ7SUFNRSxtQ0FBbUM7SUFDbkMsYUFBWSxTQUFpQjtRQUw3Qiw4QkFBOEI7UUFDOUIsZUFBVSxHQUFXLGlDQUFpQyxDQUFBO1FBQ3RELGtCQUFhLEdBQWtCLElBQUksMEJBQWEsRUFBRSxDQUFDO1FBSWpELElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDO1lBQ2hCLEVBQUUsRUFBRSxTQUFTO1lBQ2IsSUFBSSxFQUFFO2dCQUNKLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTthQUNsQztZQUNELE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7Z0JBQzVDLENBQUM7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw2REFBNkQ7SUFDN0Qsc0JBQVEsR0FBUjtRQUFBLGlCQVlDO1FBWEMsa0RBQWtEO1FBQ2pELE1BQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQzthQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQzthQUM1QixJQUFJLENBQUMsVUFBQyxJQUFTO1lBQ2QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQ25ELEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FDRCxPQUFLLENBQUEsQ0FBQyxVQUFVLEtBQVk7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDSCxVQUFDO0FBQUQsQ0FuQ0EsQUFtQ0MsSUFBQTs7Ozs7QUN2Q0E7SUFLQyxrQkFBWSxRQUFnQjtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ0gsZUFBQztBQUFELENBVEMsQUFTQSxJQUFBOzs7OztBQ1RBLHVDQUFrQztBQUVuQztJQUlFO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssRUFBWSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsMkRBQTJEO0lBQzNELG9DQUFZLEdBQVosVUFBYSxnQkFBK0I7UUFBNUMsaUJBTUM7UUFMQyxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ25DLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxVQUFBLFlBQVk7Z0JBQ25DLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUkscUJBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2xELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFDSCxvQkFBQztBQUFELENBckJBLEFBcUJDLElBQUE7Ozs7O0FDdEJELDhFQUE4RTtBQUM5RSxxQkFBNEIsUUFBYTtJQUN2QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLFFBQVEsQ0FBQTtJQUNqQixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLEtBQUssR0FBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDL0MsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7UUFDekIsTUFBTSxLQUFLLENBQUE7SUFDYixDQUFDO0FBQ0gsQ0FBQztBQVJELGtDQVFDO0FBRUQsMERBQTBEO0FBQzFELG1CQUEwQixRQUFhO0lBQ3JDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUE7QUFDeEIsQ0FBQztBQUZELDhCQUVDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIu+7v1xyXG5pbXBvcnQgUXVlc3Rpb25uYWlyZSBmcm9tICcuL2NsYXNzZXMvcXVlc3Rpb25uYWlyZSc7XHJcbmltcG9ydCAqIGFzIGZldGNoSGVscGVycyBmcm9tICcuL2hlbHBlcnMvZmV0Y2hIZWxwZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XHJcblxyXG4gIC8vIFRoZSBVUkwgZm9yIHRoZSBXZWIgQVBJIGFwcFxyXG4gIHNlcnZpY2VVUkw6IHN0cmluZyA9ICcvL2xvY2FsaG9zdDo1MDAxNC9hcGkvcXVlc3Rpb25zJ1xyXG4gIHF1ZXN0aW9ubmFpcmU6IFF1ZXN0aW9ubmFpcmUgPSBuZXcgUXVlc3Rpb25uYWlyZSgpO1xyXG5cclxuICAvLyBDb25maWd1cmUgdGhlIHZ1ZS5qcyBhcHBsaWNhdGlvblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRJZDogc3RyaW5nKSB7XHJcbiAgICBsZXQgYXBwID0gbmV3IFZ1ZSh7XHJcbiAgICAgIGVsOiBlbGVtZW50SWQsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBxdWVzdGlvbm5haXJlOiB0aGlzLnF1ZXN0aW9ubmFpcmVcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgIG5leHQ6ICgpID0+IHtcclxuICAgICAgICAgIGFsZXJ0KFwiVGhpcyBoYXNuJ3QgYmVlbiBpbXBsZW1lbnRlZCB5ZXRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIENvbm5lY3QgdG8gdGhlIHNlcnZpY2UgZW5kcG9pbnQgYW5kIGRvd25sb2FkIHRoZSBxdWVzdGlvbnNcclxuICBkb3dubG9hZCgpIHtcclxuICAgIC8vIHRoZSBUeXBlc2NyaXB0IGJpbmRpbmcgZG9lc24ndCB5ZXQgaGF2ZSBcImZldGNoXCJcclxuICAgICh3aW5kb3cgYXMgYW55KS5mZXRjaCh0aGlzLnNlcnZpY2VVUkwpXHJcbiAgICAgIC50aGVuKGZldGNoSGVscGVycy5jaGVja1N0YXR1cylcclxuICAgICAgLnRoZW4oZmV0Y2hIZWxwZXJzLnBhcnNlSlNPTilcclxuICAgICAgLnRoZW4oKGpzb246IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25uYWlyZS50aXRsZSA9IGpzb24uUXVlc3Rpb25uYWlyZVRpdGxlO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25uYWlyZS5zZXRRdWVzdGlvbnMoanNvbi5RdWVzdGlvbnNUZXh0KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcjogRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBmYWlsZWQnLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufSIsIu+7v2V4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9uIHtcclxuICBpZDogbnVtYmVyOy8vIG5vdCB1c2VkICh5ZXQpXHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBhbnN3ZXI6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocXVlc3Rpb246IHN0cmluZykge1xyXG4gICAgdGhpcy50aXRsZSA9IHF1ZXN0aW9uO1xyXG4gICAgdGhpcy5hbnN3ZXIgPSAnJztcclxuICB9XHJcbn0iLCLvu79pbXBvcnQgUXVlc3Rpb24gZnJvbSAnLi9xdWVzdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdGlvbm5haXJlIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHF1ZXN0aW9uczogQXJyYXk8UXVlc3Rpb24+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGl0bGUgPSAnJztcclxuICAgIHRoaXMucXVlc3Rpb25zID0gbmV3IEFycmF5PFF1ZXN0aW9uPigpO1xyXG4gIH1cclxuXHJcbiAgc2V0VGl0bGUodGl0bGU6IHN0cmluZykge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIFF1ZXN0aW9uIG9iamVjdHMgZnJvbSBhIHN0cmluZyBhcnJheSBvZiBxdWVzdGlvbnNcclxuICBzZXRRdWVzdGlvbnMoaW5pdGlhbFF1ZXN0aW9uczogQXJyYXk8c3RyaW5nPikge1xyXG4gICAgaWYgKGluaXRpYWxRdWVzdGlvbnMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpbml0aWFsUXVlc3Rpb25zLmZvckVhY2gocXVlc3Rpb25UZXh0ID0+IHtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9ucy5wdXNoKG5ldyBRdWVzdGlvbihxdWVzdGlvblRleHQpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59Iiwi77u/XHJcbi8vIEEgaGVscGVyIGZ1bmN0aW9uIHRvIHRocm93IGFuIGVycm9yIGlmIHRoZSBmZXRjaCByZXF1ZXN0IHdhcyBub3Qgc3VjY2Vzc2Z1bFxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTdGF0dXMocmVzcG9uc2U6IGFueSkge1xyXG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgfSBlbHNlIHtcclxuICAgIHZhciBlcnJvcjogYW55ID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpXHJcbiAgICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlXHJcbiAgICB0aHJvdyBlcnJvclxyXG4gIH1cclxufVxyXG5cclxuLy8gQSBoZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgdGhlIGZldGNoIHJlc3BvbnNlIGludG8gSlNPTlxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VKU09OKHJlc3BvbnNlOiBhbnkpIHtcclxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpXHJcbn1cclxuIl19
