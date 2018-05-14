$(document).ready(() => {
  $(".collapsible").collapsible();
  $(".modal").modal();
  $(".dropdown-trigger").dropdown();
  $("select").formSelect();
  $("input#input_text, textarea#post_title").characterCounter();
  veryImportant(() => {
    audio.play();
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

const audio = new Audio("assets/sounds/secret.mp3");
