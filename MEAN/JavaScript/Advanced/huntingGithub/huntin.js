$(document).ready(function() {
    $('#button').click(function() {
        $.get("https://api.github.com/users/hermanj13", displayName)
    })

    function displayName(data) {
        $("h1").append(data.name)
    }
});
