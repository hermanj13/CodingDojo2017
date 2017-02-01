$($(document).ready(function() {

    $("#clickButton").click(function() {
        alert("You have clicked a button!");
    });

    $("#hideButton").click(function() {
        $("#hideButton").hide("slow", function() {
            alert("OH NO! I AM HIDDEN!");
        });
    });

    $("#showButton").click(function() {
        $("#showText").show("fast");
    });

    $("#toggleButton").click(function() {
        $("#toggleText").toggle("fast");
    });

    $("#slideDownButton").click(function() {
        $("#slideDownImg").slideDown("slow");
    });

    $("#slideUpButton").click(function() {
        $("#slideUpImg").slideUp("slow");
    });

    $("#slideToggleButton").click(function() {
        $("#slideToggleImg").slideToggle("slow");
    });

    $("#fadeInButton").click(function() {
        $("#fadeInImg").fadeIn("slow");
    });

    $("#fadeOutButton").click(function() {
        $("#fadeOutImg").fadeOut("slow");
    });

    $("#addClassButton").click(function() {
        $(".base").removeClass("base").addClass("red");
    });

    $("#beforeButton").click(function() {
        $("#beforeImg").before("I AM BEFORE YOU!!!!");
    });


}));
