//TODO: Animate sidebar instead of showing/hiding.

$(document).ready(function() {
    // Collapse and show sidebar mouseenter and leave handlers
    $('.arrowButton').mouseenter(function() {
        $(this).animate({opacity: 1.0}, 250);
    });

    $('.arrowButton').mouseleave(function() {
        $(this).animate({opacity: 0.5}, 250);
    });

    // Collapse and show sidebar button click handlers.
    $('#collapseSidebar').click(function() {
        $('.sidebar').animate({
            width: 0
        }, 500, function() {
            $('.sidebar').hide();
        });

        $('.sidebar').children().animate({
            opacity: 0
        }, 250);

        $('.dashboardWrapper').animate({
            "margin-left": "0px"
        }, 500, function() {
            $('#collapseSidebar').hide();
            $('#showSidebar').show();
        });
    });

    $('#showSidebar').click(function() {
        $('.sidebar').show();
        $('#showSidebar').hide();

        $('.sidebar').animate({
            width: "100%"
        }, 500);

        $('.sidebar').children().delay(250).animate({
            opacity: 1
        }, 250, function() {
            $('#collapseSidebar').css('opacity', '0.5');
        });

        $('.dashboardWrapper').animate({
            "margin-left": "15%"
        }, 500, function() {
            $('#collapseSidebar').show();
        });
    })
});