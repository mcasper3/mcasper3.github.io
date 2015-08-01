$(document).ready(function () {
    $("#github")
        .mouseover(function () {
            $(this).attr("src", "/Images/GitHub-Mark-Highlighted.png");
        })
        .mouseout(function () {
            $(this).attr("src", "/Images/GitHub-Mark.png");
        });
});