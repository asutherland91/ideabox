var ideas = [];

//query selectors:
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
function saveIdea(event) {
    event.preventDefault();
    var newCard = new Ideas(formTitle.value, formBody.value);
    ideaTitle.innerText = newCard.title;
    ideaBody.innerText = newCard.body;
    ideas.push(newCard);
    clearInputFields();
}

function clearInputFields(){
    formTitle.value = '';
    formBody.value = '';
}

