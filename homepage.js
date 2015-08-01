$(document).ready(function () {
    $("#headerContent").load("SiteFeatures/header.html", function () {
        $("#homeLink").attr("id", "currentTab");

    });
});