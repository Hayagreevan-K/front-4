// Function to display a message when a project is clicked
document.querySelectorAll(".project h3 a").forEach((projectLink) => {
    projectLink.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default navigation for demo purposes
        alert(`You clicked on: ${projectLink.textContent}`);
        // Optionally, navigate to the link
        // window.location.href = projectLink.href;
    });
});

// Handle dynamic content for modal views or product details
document.querySelectorAll(".project-link").forEach((demoLink) => {
    demoLink.addEventListener("click", (e) => {
        e.preventDefault();
        const demoUrl = demoLink.href;
        alert(`Opening demo: ${demoUrl}`);
        // Open demo in a new tab
        window.open(demoUrl, "_blank");
    });
});

// Add smooth scrolling for navigation links (if your page has a navigation bar)
document.querySelectorAll("nav ul li a").forEach((navLink) => {
    navLink.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = navLink.getAttribute("href").slice(1); // Remove the # from href
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});
