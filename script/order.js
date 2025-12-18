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
