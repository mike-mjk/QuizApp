"use strict";

var state = {

	questions: [
	{
		question: "What is the big orange thing in the sky?",
		answers: ["moon", "sun", "Donald Trump"],
		correctAnswer: "sun",
		questionNumber: 1
	},

	{
		question: "Where do I live?",
		answer: ["Wylie", "Richardson"],
		correctAnswer: "Wylie",
		questionNumber: 2
	}

]};
console.log(state.questions[0].question);
var renderState = function(state) {
	var element = $('.questions')
	var itemsToRender = state.questions.map(function(item){
		return '<li>' + item + '</li>';
	});
	element.html(itemsToRender);
};

renderState(state);