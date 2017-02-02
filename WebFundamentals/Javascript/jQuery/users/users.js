$(document).ready(function() {
    $("#userForm").submit(function(event) {
        var firstName = $("#userForm input[name=first_name]").val();
        var lastName = $("#userForm input[name=last_name]").val();
        var emails = $("#userForm input[name=email]").val();
        var phones = $("#userForm input[name=phone]").val();
        console.log($("#table").append('<tr><td>' + firstName + '</td><td>' + lastName + '</td> <td>' + emails + '</td> <td>' + phones + '</td></tr>'));
        return false;
    });
});
