$(document).ready(function() {

// this shitty javascript was done by Chris Bautista ;;
    var i = 0,
    $myProjectLinks = ["wctl.html", "pier2934.html", "cahca.html", "gt.html", "lg.html", "hc.html", "cd.html", "printOther.html"];
// ME LINK
    $('#me-li').click(function() {
        $('html, body').animate({
            scrollTop: ($('#Me').offset().top -70)
        },700,'easeInOutExpo');
    });

// CONTACT LINK
    $('#contact-li').click(function() {
        $('html, body').animate({
            scrollTop: ($('#Contact').offset().top -70)
        },700,'easeInOutExpo');
    });

// PROJECTS LINK
    $('#projects-li').click(function() {
        $('html, body').animate({
            scrollTop: ($('#Projects').offset().top -130)
        },700,'easeInOutExpo');
    });

// BACK TO TOP
    $('.logo').click(function() {
        $('html, body').animate({
            scrollTop: ($('#Top').offset().top -70)
        },700,'easeInOutExpo');
    });

// THUMB CLICK
    $('.thumb').click(function(event) {
        event.preventDefault();
        $('#ProjectDetail .grid').show();
        $this = $(this);
        //i sets the index in the project list which we will worry about later for prev/next implementations
        i = $this.data('num');
        $('#ProjectDetail .grid').load($this.data('url'), function() {

            $('html, body').animate({
                scrollTop: ($('#ProjectDetail .grid').offset().top -100)
            },700,'easeInOutExpo');

        });

        $('.projectNav').show();

    });

// PROJECT CLOSE
    $('.close').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: ($('#Projects').offset().top -70)
        },700,'easeInOutExpo', function() {
            $('#ProjectDetail .grid').hide();
            $('.projectNav').hide();
        });

        i=0;
    });

// PROJECT NAV

    $('.next').click(function(event) {
        event.preventDefault();
        if (i >= $myProjectLinks.length -1) {
            i = 0;
        } else {
            i++;
        }
        setTimeout(function(){
            $('#ProjectDetail .grid').load($myProjectLinks[i], function() {

                $('html, body').animate({
                    scrollTop: ($('#ProjectDetail .grid').offset().top -100)
                },700,'easeInOutExpo');

            });
        }, 600);
    });

    $('.prev').click(function(event) {
        event.preventDefault();
        if (i <= 0) {
            i=$myProjectLinks.length -1;
        }

        else {
            i--;
        }

        setTimeout(function(){

            $('#ProjectDetail .grid').load($myProjectLinks[i], function() {

                $('html, body').animate({
                    scrollTop: ($('#ProjectDetail .grid').offset().top -100)
                },700,'easeInOutExpo');

            });
        }, 600);
    });

});