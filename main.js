var ideas = [];

//query selectors:
var saveButton = document.querySelector(".save-btn");
var deleteButton = document.querySelector(".idea-cards");
var formTitle = document.querySelector("#title-form");
var formBody = document.querySelector("#body-form");
var ideaTitle = document.querySelector(".idea-title");
var ideaBody = document.querySelector(".idea-body");
var ideaCards = document.querySelector(".idea-cards");

//event listeners:
formTitle.addEventListener("keyup", toggleButton);
formBody.addEventListener("keyup", toggleButton);
ideaCards.addEventListener("click", favoriteIdea);
saveButton.addEventListener("click", saveIdea);
deleteButton.addEventListener("click", function(event){
  deleteIdea(event);
});

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
          <img class="star-favorite" src="assets/star.svg" alt="star button">
        </button>
        <button class="delete-btn" id="deleteBtn"></button>
      </div>
      <div class="body-section">
        <h3 class="idea-title">${idea.title}</h3>
        <p class="idea-body">${idea.body}</p>
      </div>
      <div class="bottom-bar">
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

  function deleteIdea(event) {
    if(event.target.className === "delete-btn") {
      var cardToRemove = event.target.parentNode.parentNode;
      var cardId = Number(cardToRemove.id);
      for (var i = 0; i < ideas.length; i++) {
        if (cardId === ideas[i].id) {
          ideas.splice(i, 1);
        }
      }
      cardToRemove.remove();
    }
  }

  function favoriteIdea(event) {
    if(event.target.className === "star-favorite") {
      var cardToFavorite = event.target.parentNode.parentNode.parentNode;
      var starFavoriteButton = cardToFavorite.querySelector(".star-favorite");
      var cardId = Number(cardToFavorite.id);
      for (var i = 0; i < ideas.length; i++) {
        if (cardId === ideas[i].id && ideas[i].star === false) {
          ideas[i].star = true;
          starFavoriteButton.setAttribute("src", "assets/star-active.svg");
        } else if (cardId === ideas[i].id &&  ideas[i].star === true) {
          ideas[i].star = false;
          starFavoriteButton.setAttribute("src", "assets/star.svg");
        }
      }
    }
  }

  function clearInputFields() {
    formTitle.value = "";
    formBody.value = "";
  }

