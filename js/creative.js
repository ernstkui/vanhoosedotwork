/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    var pageScrollFn = function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    };

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', pageScrollFn);
    $('.section-a-page-scroll a').bind('click', pageScrollFn);




    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    // Initialize WOW.js Scrolling Animations
    new WOW().init();


    // Pause button functionality for background video
    var vid = document.getElementById("bgvid"),
        pauseButton = document.getElementById("vidpause");

    function vidFade() {
        vid.classList.add("stopfade");
    }

    vid.addEventListener('ended', function() {
        // only functional if "loop" is removed
        vid.pause();
        // to capture IE10
        vidFade();
        pauseButton.innerHTML = '<i class="fa fa-play fa-lg"></i>';
    });

    pauseButton.addEventListener("click", function() {
        vid.classList.toggle("stopfade");
        if (vid.paused) {
            vid.play();
            pauseButton.innerHTML = '<i class="fa fa-pause fa-lg"></i>';
        } else {
            vid.pause();
            pauseButton.innerHTML = '<i class="fa fa-play fa-lg"></i>';
        }
    });



})(jQuery); // End of use strict
