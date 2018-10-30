$(document).ready(function() {
  menuToggle(); 
});

let menuToggle = function() {
  let target = $("section.menu");
  let burger = $(".burger");
  burger.on("click", function() {
    target.toggleClass("menu-open");
  });
};
