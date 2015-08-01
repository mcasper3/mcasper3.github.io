$(document).ready(function () {
    $("#headerContent").load("/SiteFeatures/header.html", function () {
        $("#aboutMeLink").attr("id", "currentTab");
    });
});