
let searchBar = document.getElementById("searchBar");
let items = document.querySelectorAll(".item-card");

searchBar.addEventListener("input", function () {

    let searchValue = searchBar.value.toLowerCase();
    items.forEach(card => {

        let itemName = card.getAttribute("data-name").toLowerCase();
        if (itemName.includes(searchValue)) {
            card.style.display = "block";
        }
        else {
            card.style.display = "none";    
        }
    });
});
