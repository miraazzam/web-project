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



$(function() {

  $(".feedback, #map").hide().fadeIn(1200);
  $(".feedback button").on("click", function() {
    alert("Thank you for your feedback!");
  });

  
$("#coffeeLoader").fadeIn(300);

setTimeout(function() {
  $("#coffeeLoader").fadeOut(300);
}, 2000);
const quotes = [
  "A good day starts with a good coffee.",
  "Coffee is a hug in a mug.",
  "Everything gets better with coffee.",
  "But first, coffee."
];

document.getElementById("coffeeQuote").textContent =
  quotes[Math.floor(Math.random() * quotes.length)];


  $(".feedback button").on("click", function() {
    alert("Thank you for your feedback!");
    $(".feedback input, .feedback textarea").val("");
});


});


