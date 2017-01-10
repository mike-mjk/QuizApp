"use strict";

var state = {

	questions: [
	{
		question: "What is the big orange thing in the sky?",
		answers: ["moon", "sun" "Donald Trump"],
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
var questionNumber = 0;
//console.log(state);
var renderState = function(state) {
	var element = $('.questions')
	var itemsToRender = state.questions.[questionNumber].map(function(question){
		return '<li>' + question + '</li>';
	});
	element.html(itemsToRender);
};

renderState(state);