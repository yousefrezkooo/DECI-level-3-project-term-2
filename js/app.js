document.addEventListener("DOMContentLoaded", function () {
    let sections = Array.from(document.querySelectorAll("section"));
    let navList = document.querySelector("#navbar__list");
    let form = document.querySelector("form");
    // Build the navigation bar
    sections.forEach((section) => {
        let itemList = document.createElement("li");
        let itemLink = document.createElement("a");

        itemLink.textContent = section.getAttribute("data-nav");
        itemLink.setAttribute("href", `#${section.id}`);
        itemList.appendChild(itemLink);
        navList.appendChild(itemList);

        itemLink.addEventListener("click", (e) => {
            e.preventDefault();
            section.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        });
    });

    // Function to set active class based on scroll position
    function setActiveSection() {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            // Check if the section is in the viewport
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                // Remove active class from all sections
                sections.forEach(s => s.classList.remove("active"));
                // Add active class to the currently visible section
                section.classList.add("active");
            }
        });
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let nameInput = document.querySelector("#name");
        let emailInput = document.querySelector("#email");
        let commentInput = document.querySelector("#comment");
        let commentsList = document.querySelector("#comments");

        if (!nameInput || !emailInput || !commentInput || !commentsList) {
            alert("Form elements are missing from the page.");
            return;
        }

        let name = nameInput.value;
        let email = emailInput.value;
        let comment = commentInput.value;
        if (email.includes("@") && email.includes(".com")) {
            if (name && comment) {
                alert("Form submitted successfully!");
                let commentItem = document.createElement("li");
                commentItem.textContent = `${name}: ${comment} : ${email}`;
                commentsList.appendChild(commentItem);
                form.reset();
            }
        }
    });
    // Add scroll event listener to update active section
    window.addEventListener("scroll", setActiveSection);

});


