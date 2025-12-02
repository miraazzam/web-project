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


let aboutData = {
    title: "About Us",
    subtitle: "Where Every Cup Has a Story",
    sections: [
        {
            heading: "Our Story",
            text: "Our Café started with a passion for crafting exceptional coffee and creating a warm, modern space for students, workers, and coffee lovers. Every cup we serve tells a story.We opened our doors several years ago with one simple goal; to serve the finest quality coffee with pasion and care.Our team is more like a family, either if you are here for morning coffe or relaxing afternoon, we promise our workers will create a welcoming atmospere."
        },
        {
            heading: "What Makes Us Special",
            type: "features",
            features: [
                { title: "Freshly Brewed Coffee", text: "We select premium beans and brew every cup with care." },
                { title: "Cozy Atmosphere", text: "Soft lights, calm music, and a relaxing environment." },
                { title: "Friendly Staff", text: "Our team makes every guest feel at home." },
                { title: "Community Focus", text: "A space where people connect and enjoy together." }
            ]
        },
        {
            heading: "Our Promise",
            text: "We promise high-quality drinks, a welcoming space, and a memorable café experience, whether you visit us in-store or online."
        },
        {
            heading: "Thank You",
            text: "We appreciate our customers and invite you to visit, take a sip, and enjoy every moment."
        }
    ]
};

$(function () {

    $("#about-title").text(aboutData.title);
    $("#about-subtitle").text(aboutData.subtitle);

    const container = $("#about-container");

    aboutData.sections.forEach(section => {

        if (section.type === "features") {

            container.append(`
                <div class="section-card">
                    <h2>${section.heading}</h2>
                </div>
            `);

            const currentSection = container.children().last();

            section.features.forEach(feature => {
                currentSection.append(`
                    <div class="feature-card">
                        <h3>${feature.title}</h3>
                        <p>${feature.text}</p>
                    </div>
                `);
            });

        } else {
            container.append(`
                <div class="section-card">
                    <h2>${section.heading}</h2>
                    <p>${section.text}</p>
                </div>
            `);
        }
    });

});
