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


$(document).ready(function () {

    let total = 0;

   
    $(".add-btn").click(function () {

        let name = $(this).data("name");
        let price = parseFloat($(this).data("price"));

        $("#cart-list").append(`
            <li>
                <span>${name}</span>
                <span>$${price.toFixed(2)}</span>
                <button class="remove-btn">x</button>
            </li>
        `);

      
        total += price;
        $("#total-price").text(total.toFixed(2));
    });

    $("#cart-list").on("click", ".remove-btn", function () {

        let priceText = $(this).prev().text().replace("$", "");
        let price = parseFloat(priceText);

        total -= price;
        $("#total-price").text(total.toFixed(2));

        $(this).parent().remove();
    });

   
    $("#btn-cash").click(function () {

        if ($("#cart-list li").length === 0) {
            alert("Your cart is empty!");
            return;
        }

        alert("Thank you! Your order will be paid by cash on delivery ☕");

      
        $("#cart-list").empty();
        total = 0;
        $("#total-price").text("0.00");
    });

});
