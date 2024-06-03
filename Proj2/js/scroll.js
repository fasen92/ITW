/*
* login: xmahut01
*  meno: Ivan Mahút
*/
$(document).ready(function() {
    var navbar = $("#header");
    var sticky = navbar.offset().top;

    $(window).scroll(function() {
        if ($(window).scrollTop() >= sticky) {
            navbar.addClass("sticky");
            $("body").css("margin-top", navbar.outerHeight());
        } else {
            navbar.removeClass("sticky");
            $("body").css("margin-top", 0);
        }
    });
});

$(document).ready(function() {
    $(".menu li a").click(function(event) {
        event.preventDefault();
        var target = $(this).attr("href");
        var headerHeight = $("#header").outerHeight();
        $("html, body").animate({
            scrollTop: $(target).offset().top - headerHeight + 50 // added 50 to smoothly transition active menu item 
        }, 1000);
    });
});