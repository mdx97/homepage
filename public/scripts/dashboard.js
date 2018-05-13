$(document).ready(function() {
    $.getJSON("/json", function(data) {
        console.log(data);
        $.each(data.sections, function(sectionName, section) {
            var append = "<h2 class='dashboardSectionTitle'>" + sectionName + "</h2><div class='dashboardSection'>";
            
            $.each(section, function(linkID, link) {
                append += "<div class='dashboardLink'><h4><img src='https://www.google.com/s2/favicons?domain=" + link.link + "'><a href='" + link.link + "' target='_blank'>" + link.linkTitle + "</a></h4>";
                append += "<p>" + link.description + "</p></div>";
            })

            append += "</div>";
            $(append).appendTo(".dashboard");
        });
    });
});