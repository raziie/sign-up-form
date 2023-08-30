$("form").on("submit", function (event) {
    event.preventDefault();

    if ($("#Fname").val() === "") {
        $("#Fname").addClass("wrong");
        $("#Fname").next().text("First Name cannot be empty");
    } else {
        $("#Fname").addClass("correct");
    }

    if ($("#Lname").val() === "") {
        $("#Lname").addClass("wrong");
        $("#Lname").next().text("Last Name cannot be empty");
    } else {
        $("#Lname").addClass("correct");
    }

    const email = $("#email").val();
    if (IsEmail(email) == false) {
        $("#email").addClass("wrong");
        $("#email").next().text("Looks like this is not an email!");
    } else {
        $("#email").addClass("correct");
    }

    if ($("#password").val() === "") {
        $("#password").addClass("wrong");
        $("#password").next().text("Password cannot be empty");
    } else {
        $("#password").addClass("correct");
    }
});

$("input").focus(function() {
    $(this).removeClass("wrong");
    $(this).removeClass("correct");
    $(this).next().text("");
});

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (regex.test(email)) {
        return true;
    }else {
        return false;
    }
}