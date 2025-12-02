$("#loginBtn").click(function () {
    $("#studentLoginForm").addClass("pop");
});

$("#cancelBtn").click(function () {
    $("#studentLoginForm").removeClass("pop");
    $("#loginMessage").text("");
});

$("#studentLoginForm").submit(function (e) {
    e.preventDefault();
    const email = $("#studentEmail").val();
    const pass = $("#studentPassword").val();

    if ((email.endsWith(".edu.lb") || email.endsWith(".edu")) && pass === "123456") {
        $("#loginMessage").css("color", "green").text("Login successful! Discounts unlocked.");
        $(".discountPrice").show();
        $("#studentLoginForm").removeClass("pop");
    } else {
        $("#loginMessage").css("color", "red").text("Invalid login.");
    }
});



