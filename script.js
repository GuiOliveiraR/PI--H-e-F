$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 100) {
        $("#header-sroll").addClass("small")
    } else {
        $("#header-sroll").removeClass("small")

        $(window).on('scroll', _.debounce(function() {
            var $nav = $('nav'),
                navHeight = $nav.outerHeight(),
                windowTop = $(this).scrollTop();
            
            if (windowTop > navHeight) {
                $nav.addClass('small');
                $('nav > a').text('TC');
            } else {
                $nav.removeClass('small');
                $('nav > a').text('The Company');
            }
        }, 200));
    }})