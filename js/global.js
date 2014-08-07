$(document).ready(function() {

// ME LINK
    $('#me-li').click(function() {
        console.log("me click");
        $('html, body').animate({
            scrollTop: ($('#Me').offset().top -70)
        },700,'easeInOutExpo');
    });

// CONTACT LINK
    $('#contact-li').click(function() {
        console.log("me click");
        $('html, body').animate({
            scrollTop: ($('#Contact').offset().top -70)
        },700,'easeInOutExpo');
    });

// PROJECTS LINK
    $('#projects-li').click(function() {
        console.log("me click");
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
        $this = $(this);
        //i sets the index in the project list which we will worry about later for prev/next implementations
        i = $this.data('num');
        $('#ProjectDetail .grid').load($this.data('url'), function() {

            $('html, body').animate({
                scrollTop: ($('#ProjectDetail .grid').offset().top -70)
            },700,'easeInOutExpo');

        });

    });

});