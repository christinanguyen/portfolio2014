$(document).ready(function() {

// NEXT/PREV

    // var $myProjectLinks = ["wctl.html"];
    // var i = 0;

    // $next.click(function() {
    //     if (i >= $myProjectLinks.length -1) {
    //         i=0;
    //     }

    //     else {
    //         i++;
    //     }
    //     setTimeout(function(){

    //         $('#ProjectDetail .grid').load($myProjectLinks[i] + ' #project', function() {

    //             $('html, body').delay(2000).animate({
    //                 scrollTop: ($('#ProjectDetail .grid').offset().top +2)
    //             },700,'easeInOutExpo');

    //             // $loader.delay(2000).animate({opacity:"0",},"slow", function() {
    //             //     $loadicon.stop(true).animate({top:"60%"},500,'easeOutExpo');
    //             //     $loader.css('display', 'none');
    //             // });
    //         });
    //     }, 600);

    //     $loader.css('display', 'block');
    //     $loadicon.stop(true).animate({top:"50%"},500,'easeOutExpo');
    //     $loader.animate({opacity:"1",},400,'easeOutCubic');

    // });

    // $prev.click(function() {
    //     if (i <= 0) {
    //         i=$myProjectLinks.length -1;
    //     }

    //     else {
    //         i--;
    //     }

    //     setTimeout(function(){

    //         $('#project_container').load($myProjectLinks[i] + ' #project', function() {

    //             $('html, body').delay(2000).animate({
    //                 scrollTop: ($('#project_container').offset().top)
    //             },700,'easeInOutExpo');

    //             $loader.delay(2000).animate({opacity:"0",},"slow", function() {
    //                 $loadicon.stop(true).animate({top:"60%"},500,'easeOutExpo');
    //                 $loader.css('display', 'none');
    //             });
    //         });
    //     }, 600);

    //     $loader.css('display', 'block');
    //     $loadicon.stop(true).animate({top:"50%"},500,'easeOutExpo');
    //     $loader.animate({opacity:"1",},400,'easeOutCubic');
    // });



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
            scrollTop: ($('#Projects').offset().top -70)
        },700,'easeInOutExpo');
    });

// BACK TO TOP
    $('.logo').click(function() {
        $('html, body').animate({
            scrollTop: ($('#Top').offset().top -70)
        },700,'easeInOutExpo');
    });

// PROJECT CLOSE

    // $project_close.click(function() {
    //     $('html, body').animate({
    //         scrollTop: ($('#all_projects').offset().top -70)
    //     },700,'easeInOutExpo', function() {
    //         $project_open = false;
    //         $about_open = false;
    //         $('#project').remove();
    //         $fin.css('display', 'none');
    //     });

    //     i=0;
    // });

    // THUMB CLICK

    $('.thumb').click(function() {
        //i sets the index in the project list which we will worry about later for prev/next implementations
        i = $(this).data('num');
        $('#ProjectDetail .grid').load($(this).data('url'), function() {

            $('html, body').delay(2000).animate({
                scrollTop: ($('#ProjectDetail .grid').offset().top +2)
            },700,'easeInOutExpo');

        });

    });

});