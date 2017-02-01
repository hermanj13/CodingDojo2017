$(document).ready(function() {
    $("#beach").hover(function() {
        $("#wrapper").css("background-image", "url(beach.jpg)");
    });

    $("#planet").hover(function() {
        $("#wrapper").css("background-image", "url(earth.jpg)");
    });

    $("#dojo").hover(function() {
        $("#wrapper").css("background-image", "url(dojo.jpg)");
    });

    $("#forest").hover(function() {
        $("#wrapper").css("background-image", "url(forest.jpg)");
    });

    $("#matrix").hover(function() {
        $("#wrapper").css("background-image", "url(matrix.jpg)");
    });

    $("#snow").hover(function() {
        $("#wrapper").css("background-image", "url(snow.jpg)");
    });

    $("#buttonBox").click(function() {
        $("#selectArena").css("display", "none");
        $("#totalPlayer").css("display", "block");
    });

    $("#leftNinjas").on("change", function() {
        if ($(this).val() == "Raphael") {
            $("#leftPlayer img").attr("src", "raphael.png");
            $("#leftPlayer").css("display", "block");
        }
        if ($(this).val() == "Leonardo") {
            $("#leftPlayer img").attr("src", "leo.png");
            $("#leftPlayer").css("display", "block");
        }
        if ($(this).val() == "Donatello") {
            $("#leftPlayer img").attr("src", "donny.png");
            $("#leftPlayer").css("display", "block");
        }
        if ($(this).val() == "Michelangelo") {
            $("#leftPlayer img").attr("src", "mikey.png");
            $("#leftPlayer").css("display", "block");
        }
    });

    $("#rightNinjas").on("change", function() {
        if ($(this).val() == "Raphael") {
            $("#rightPlayer img").attr("src", "raphael.png");
            $("#rightPlayer").css("display", "block");
        }
        if ($(this).val() == "Leonardo") {
            $("#rightPlayer img").attr("src", "leo.png");
            $("#rightPlayer").css("display", "block");
        }
        if ($(this).val() == "Donatello") {
            $("#rightPlayer img").attr("src", "donny.png");
            $("#rightPlayer").css("display", "block");
        }
        if ($(this).val() == "Michelangelo") {
            $("#rightPlayer img").attr("src", "mikey.png");
            $("#rightPlayer").css("display", "block");
        }
    });


});
