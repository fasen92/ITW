/*
* login: xmahut01
*  meno: Ivan Mahút
*/
$(document).ready(function() {
  $('.menu-btn').click(function() {
      $('.menu-btn').toggleClass('open');
  });

  // Remove open class to hide menu after cliking the link
  $('.menu a').click(function() { 
      $('.menu-btn').removeClass('open');
  });
});

$(document).ready(function() {
  function highlightMenu() {
      var scrollPosition = $(document).scrollTop();
      $('.menu li').each(function() {
          var currentLink = $(this);
          var refElement = $(currentLink.find('a').attr("href"));
          // Based on top and bottom position of the section compared to scroll position add active class
          if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
              $('.menu li').removeClass("active");
              currentLink.addClass("active");
          }
      });
  }
  
  highlightMenu(); // Initial call to highlight active item
  
  $(window).scroll(function() { // Call function on scroll
      highlightMenu();
  });
});