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


$(function () {

    let total = 0;

    $(".add-btn").click(function () {

        let name = $(this).data("name");
        let price = parseFloat($(this).data("price"));

        $("#cart-list").append(`
            <li>
                ${name} - $${price.toFixed(2)}
                <button class="remove">x</button>
            </li>
        `);

        total += price;
        $("#total-price").text(total.toFixed(2));
    });


    $(document).on("click", ".remove", function () {

        let text = $(this).parent().text();
        let value = parseFloat(text.split("$")[1]);

        total -= value;
        $("#total-price").text(total.toFixed(2));

        $(this).parent().remove();
    });

   
$("#btn-cash").on("click", function() {
    alert("Please login to continue with Cash on Delivery.");
});


});
