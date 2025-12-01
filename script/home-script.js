document.addEventListener("DOMContentLoaded", function() {

  let hamburger = document.querySelector(".hamburger");
  let pageLinks = document.querySelectorAll(".page a");
  let loginLinks = document.querySelectorAll(".login a");

  let dropdown = document.createElement("div");
  dropdown.classList.add("dropdown");

  let header = document.querySelector(".header");
  header.appendChild(dropdown);

  for (let i = 0; i < pageLinks.length; i++) {
    let clone = pageLinks[i].cloneNode(true);
    dropdown.appendChild(clone);
  }

  for (let i = 0; i < loginLinks.length; i++) {
    let clone = loginLinks[i].cloneNode(true);
    dropdown.appendChild(clone);
  }

  hamburger.addEventListener("click", function(e) {
    e.stopPropagation();
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
      hamburger.classList.remove("active");
    } else {
      dropdown.classList.add("show");
      hamburger.classList.add("active");
    }
  });

  let dropdownLinks = dropdown.querySelectorAll("a");
  for (let i = 0; i < dropdownLinks.length; i++) {
    dropdownLinks[i].addEventListener("click", function() {
      dropdown.classList.remove("show");
      hamburger.classList.remove("active");
    });
  }

  document.addEventListener("click", function(e) {
    if (!dropdown.contains(e.target) && !hamburger.contains(e.target)) {
      dropdown.classList.remove("show");
      hamburger.classList.remove("active");
    }
  });

});
