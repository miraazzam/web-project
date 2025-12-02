let hamburger = document.getElementById('hamburger');  
let header    = document.querySelector('.header');     

let dropdown = document.createElement('div');
dropdown.classList.add('dropdown');
header.appendChild(dropdown);


let allLinks = document.querySelectorAll('.page a, .login a');
allLinks.forEach(function(link) {
  dropdown.appendChild(link.cloneNode(true));
});

hamburger.onclick = function () {
  dropdown.classList.toggle('show');                  
};


let dropdownLinks = dropdown.querySelectorAll('a');
dropdownLinks.forEach(function(link) {
  link.onclick = function () {
    dropdown.classList.remove('show');
  };
});


document.onclick = function (event) {
  if (!header.contains(event.target)) {
    dropdown.classList.remove('show');
  }
};


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
