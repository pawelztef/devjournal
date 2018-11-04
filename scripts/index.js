$(document).ready(function() {
  toggleMenu();
});



let toggleMenu = function() {

  let openBtn = $('.burger');
  let closeBtn = $('.closeBtn');
  let target = $('.overlay');

  openBtn.on('click', function() {
    target.css('width', '100%'); 
    openBtn.css('visibility', 'hidden');
    closeBtn.css('display', 'initial');
  });

  closeBtn.on('click', function(e) {
    e.preventDefault();
    target.css('width', '0%'); 
    openBtn.css('visibility', 'initial');
    closeBtn.css('display', 'none');
  });

  $('.menu-list a').on('click', function(e) {
    e.preventDefault();
    let link = $(this);
    if(link.hasClass('hover-active')) {
    } else {
      link.addClass('hover-active');
      $('a').not(this).removeClass('hover-active');
    }
    window.setTimeout(function() {
      target.css('width', '0%'); 
      openBtn.css('visibility', 'initial');
      closeBtn.css('display', 'none');
    }, 100);
  });
}
