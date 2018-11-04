$(document).ready(function() {
  openNav();
  closeNav();
});

let openNav = function() {
  let openBtn = $(".burger");
  let target = $(".overlay");
  openBtn.on('click', function() {
    target.css('width', '100%'); 
    openBtn.css('visibility', 'hidden');
  });
}
let closeNav = function() {
  let closeBtn = $(".closeBtn");
  let openBtn = $(".burger");
  let target = $(".overlay");
  closeBtn.on('click', function() {
    target.css('width', '0%'); 
    openBtn.css('visibility', 'initial');
  });
}
