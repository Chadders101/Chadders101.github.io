document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Function to show the selected section and hide others
    function showSection(id) {
        sections.forEach(section => {
            if (section.id === id) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    }

    // Attach event listeners to each nav link
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default jump to section
            const targetId = this.getAttribute("href").substring(1); // Get section ID
            showSection(targetId);
        });
    });

    // Show "About" section by default
    showSection("about");
});
