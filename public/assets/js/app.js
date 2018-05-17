$(document).ready(() => {
  $(".collapsible").collapsible();
  $(".modal").modal();
  $(".dropdown-trigger").dropdown();
  $("select").formSelect();
  $("input#input_text, textarea#post_title").characterCounter();
  veryImportant(() => {
    audio.play();
  });
  $(".collection-item").on("click", event => {
    if ($(event.target).hasClass("active red accent-1")) {
      $(".collection-item").removeClass("active red accent-1");
      console.log("no toggle");
    } else {
      $(".collection-item").removeClass("active red accent-1");
      $(event.target).toggleClass("active red accent-1");
    }
  });
});

veryImportant = cb => {
  let input = "";
  const key = "38384040373937396665";
  document.addEventListener("keydown", e => {
    input += "" + e.keyCode;
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = "" + e.keyCode;
  });
};

const audio = new Audio("sounds/secret.mp3");

$("#new_post_form").on("submit", function(event) {
  event.preventDefault();
  const currentURL = window.location.origin;
  const postData = {
    subj_id: 1,
    post_title: $("#new_post_title")
      .val()
      .trim(),
    post_body: $("#new_post_body")
      .val()
      .trim()
  };
  $.ajax({
    url: currentURL + "/api/posts",
    method: "POST",
    data: postData
  });
});

$(".create-form").on("submit", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();
  var newCat = {
    name: $("#ca")
      .val()
      .trim(),
    sleepy: $("[name=sleepy]:checked")
      .val()
      .trim()
  };
  // Send the POST request.
  $.ajax("/api/cats", {
    type: "POST",
    data: newCat
  }).then(function() {
    console.log("created new cat");
    // Reload the page to get the updated list
    location.reload();
  });
});
