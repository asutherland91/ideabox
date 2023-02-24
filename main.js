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
var ideaCards = document.querySelector(".idea-cards");
//event listeners:
saveButton.addEventListener("click", saveIdea);

//functions:



function saveIdea(event) {
    event.preventDefault();
    var newCard = new Ideas(formTitle.value, formBody.value);
    ideaCards.innerHTML += `<section class="card">
    <div class="top-bar">
      <button class="star-btn" type="submit"><img src="assets/star-active.svg" alt="star button"></button>
      <button class="delete-btn" type="submit"><img src="assets/delete-active.svg" alt="delete button"></button>
    </div>
    <div class="body-section">
      <h3 class="idea-title">${formTitle.value}</h3>
      <p class="idea-body">${formBody.value}</p>
    </div>
    <div class="bottom-bar">
      <button class="comment-btn" type="submit"><img src="assets/comment.svg" alt="comment button"></button>
      <label for="comment-btn">Comment</label>
    </div>
  </section>`
    ideas.push(newCard);
    clearInputFields();
}

function clearInputFields(){
    formTitle.value = '';
    formBody.value = '';
}

