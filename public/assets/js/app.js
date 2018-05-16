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
