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
formTitle.addEventListener("keyup", toggleButton);
formBody.addEventListener("keyup", toggleButton);

//functions:
function toggleButton() {
  if(formTitle.value && formBody.value) {
    saveButton.removeAttribute("disabled");
  } else {
    saveButton.setAttribute("disabled", "");
  }
}

function addIdeaCard(idea) {
  var ideaCard = document.createElement("section");
  ideaCard.classList.add("card");
  ideaCard.setAttribute("id", idea.id);
  ideaCard.innerHTML = 
    `<div class="top-bar">
      <button class="star-btn" type="submit">
        <img src="assets/star-active.svg" alt="star button">
      </button>
      <button class="delete-btn" type="submit">
        <img class="delete" src="assets/delete-active.svg" alt="delete button">
      </button>
    </div>
    <div class="body-section">
      <h3 class="idea-title">${idea.title}</h3>
      <p class="idea-body">${idea.body}</p>
    </div>
    <div class="bottom-bar">
      <button class="comment-btn" type="submit"><img src="assets/comment.svg" alt="comment button"></button>
      <label for="comment-btn">Comment</label>
    </div>`;
  ideaCards.appendChild(ideaCard);
}


  function saveIdea(event) {
    event.preventDefault();
    var idea = new Ideas(formTitle.value, formBody.value);
    ideas.push(idea);
    addIdeaCard(idea);
    clearInputFields();
    toggleButton();
}

function clearInputFields(){
    formTitle.value = '';
    formBody.value = '';
}

