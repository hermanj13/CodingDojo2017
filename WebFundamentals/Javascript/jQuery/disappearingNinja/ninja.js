$(document).ready(function() {

    $(".spongebob").click(function() {
        $(this).fadeOut('fast');
    });

    $("#button").click(function() {
        $(".spongebob").fadeIn('fast');
    });


});
