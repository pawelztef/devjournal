$(document).ready(function() {
  toggleMenu();
  appendFooter();
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

  closeBtn.on('click', function() {
    target.css('width', '0%'); 
    openBtn.css('visibility', 'initial');
    closeBtn.css('display', 'none');
  });

  $('.menu-list a').on('click', function(e) {
    let link = $(this);
    if(link.hasClass('hover-active')) {
    } else {
      link.addClass('hover-active');
      $('a').not(this).removeClass('hover-active');
    }
  });
}


let appendFooter = function() {
  $(window).on('change load resize',  function() {
    let target = $(window).width() >= 768 ? 'aside.sidebar' : 'div.wrp';
    $('footer').remove();
    $(target).append('<footer> ' + 
      '<section class="contact"> ' + 
      '<a href="#" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a>' + 
      '<a href="#" target="_blank"><i class="fab fa-facebook" aria-hidden="true"></i></a>' +
      '<a href="#" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a>' + 
      '<a href="#" target="_blank"><i class="fab fa-linkedin" aria-hidden="true"></i></a>' + 
      '<a href="mailto:example.pavel@blog.com"><i class="fas fa-envelope-square"></i></a>' +
      '</section>' + 
      '<div class="copyright"> <p>2018 © Pawel Stefaniak</p> </div>' +
      '</footer>');
  });
}
