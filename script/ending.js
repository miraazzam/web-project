$(document).ready(function() {

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


});
