var Ideas = require('../Idea.js');
var ideas = [];

//query selector go here:
var showStarredIdeas = document.querySelector(".show-star-btn");
var saveButton = document.querySelector(".save-btn");
var searchButton = document.querySelector(".search-btn");
var starButton = document.querySelector(".star-btn");
var deleteButton = document.querySelector(".delete-btn");
var commentButton = document.querySelector(".comment-btn");
var ideaTitle = document.querySelector(".idea-title");
var ideaBody = document.querySelector(".idea-body");
var formTitle = document.querySelector("#title-form");
var formBody = document.querySelector("#body-form");
var formSearch = document.querySelector("#search-form");

//event listeners:
saveButton.addEventListener("click", saveIdea);

//functions:
// we need a save function
    // needs to be able to update the card title and body input field
function saveIdea(){
    var newCard = new Ideas(formTitle.value, formBody.value) {

    }
}