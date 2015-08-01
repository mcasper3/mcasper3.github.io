$(document).ready(function () {
    $("#github")
        .mouseover(function () {
            $(this).attr("src", "GitHub-Mark-Highlighted.png");
        })
        .mouseout(function () {
            $(this).attr("src", "GitHub-Mark.png");
        });

    $("#headerContent").load("SiteFeatures/header.html")
});