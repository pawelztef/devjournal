$(document).ready(function() {
  openNav();
  closeNav();
  swapHover();
});

let openNav = function() {
  let openBtn = $('.burger');
  let target = $('.overlay');
  openBtn.on('click', function() {
    target.css('width', '100%'); 
    openBtn.css('visibility', 'hidden');
  });
}
let closeNav = function() {
  let closeBtn = $('.closeBtn');
  let openBtn = $('.burger');
  let target = $('.overlay');
  closeBtn.on('click', function() {
    target.css('width', '0%'); 
    openBtn.css('visibility', 'initial');
  });
}
let swapHover = function() {
  $('.menu-list a').on('click', function(e) {
    let link = $(this);
    if(link.hasClass('hover-active')) {
      console.log('one');
      return true;
    } else {
      link.addClass('hover-active');
      $('a').not(this).removeClass('hover-active');
      console.log('two');
      console.log($('a').not(this));
      return true;
    }
  });
}
