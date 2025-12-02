let hamburgerData = {
    links: [
        { selector: ".page a.home" },
        { selector: ".page a.menu" },
        { selector: ".page a.about" },
        { selector: ".login a.login" },
        { selector: ".login a.signup" }
    ]
};


$(function () {
  let $hamburger = $(".hamburger");
  let $header = $(".header");
  
  let $dropdown = $("<div class='dropdown'></div>");
  $header.append($dropdown);

  $(".page a, .login a").each(function () {
    $dropdown.append($(this).clone());
  });

  $hamburger.on("click", function (e) {
    e.stopPropagation();
    $dropdown.toggleClass("show");
  });

  $dropdown.find("a").on("click", function () {
    $dropdown.removeClass("show");
  });

  $(document).on("click", function (e) {
    if (!$header.is(e.target) && $header.has(e.target).length === 0) {
      $dropdown.removeClass("show");
    }
  });
});


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





