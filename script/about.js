let aboutData = {
    title: "About Us",
    subtitle: "Where Every Cup Has a Story",
    sections: [
        {
            heading: "Our Story",
            text: "Our Café started with a passion for crafting exceptional coffee and creating a warm, modern space for students, workers, and coffee lovers. Every cup we serve tells a story."
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

    let container = $("#about-container");

    aboutData.sections.forEach(function (section) {
        if (section.type === "features") {

        
            container.append('<div class="section-card"><h2>' + section.heading + '</h2></div>');

         
            let currentSection = container.children().last(); // get the newly added section

            
            section.features.forEach(function (e) {
                currentSection.append(
                    '<div class="feature-card">' +
                    '<h3>' + e.title + '</h3>' +
                    '<p>' + e.text + '</p>' +
                    '</div>'
                );
            });









            // let featureHTML = '<div class="feature-cards">';


            // section.features.forEach(function (e) {

            //     featureHTML +=
            //         '<div class="feature-card">' +
            //         '<h3>' + e.title + '</h3>' +
            //         '<p>' + e.text + '</p>' +
            //         '</div>';

            //     // `
            //     //     <div class="feature-card">
            //     //         <h3>${e.title}</h3>
            //     //         <p>${e.text}</p>
            //     //     </div>
            //     // `;

            // });




            // featureHTML += '</div>';
            // container.append(
            //     '<div class="section-card">' +
            //     '<h2>' + section.heading + '</h2>' +
            //     featureHTML +
            //     '</div>'
            // );

            // // container.append(`
            // //     <div class="section-card">
            // //         <h2>${section.heading}</h2>
            // //         ${featureHTML}
            // //     </div>
            // // `);



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
