$(document).ready(function () {

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

});
