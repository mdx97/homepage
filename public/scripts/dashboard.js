// TODO: Populate sidebar from JSON.
$(document).ready(function() {
    var jqxhr = $.getJSON("/json", function(data) {
        $.each(data.sections, function(sectionName, section) {
            var append = "<h2 class='dashboardSectionTitle' id='" + sectionName.split(' ').join('_') + "'>" + sectionName + "</h2><div class='dashboardSection'>";
            var appendLink = "<button class='sidebarLink'>" + sectionName + "</button>";

            $.each(section, function(linkID, link) {
                append += "<div class='dashboardLink'><h4><img src='https://www.google.com/s2/favicons?domain=" + link.link + "'><a href='" + link.link + "' target='_blank'>" + link.linkTitle + "</a></h4>";
                append += "<p>" + link.description + "</p></div>";
            })

            append += "</div>";
            $(append).appendTo(".dashboard");
            $(appendLink).appendTo('.sidebarJump');
        });

        jqxhr.done(function () {
            // Sidebar links hovering
            $('.sidebarLink').mouseenter(function() {
                $(this).animate({opacity: 1}, 250);
                $(this).css({"background-color": "#111"});
            });

            $('.sidebarLink').mouseleave(function() {
                $(this).animate({opacity: 0.5}, 250);
                $(this).css({"background-color": "#000"});
            });

            $('.sidebarLink').click(function() {
                console.log("clicked");
                var id = "#" + $(this).text().split(' ').join('_');
                console.log(id);
                $('html, body').stop().animate({scrollTop: $(id).offset().top}, 2000);
            });
        });
    });
});