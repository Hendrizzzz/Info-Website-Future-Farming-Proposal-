document.addEventListener('DOMContentLoaded', function () {
    // Get the toggle button and the collapsible navbar
    var toggleButton = document.getElementById('navbar-toggler');
    var navbarCollapse = document.getElementById('collapsibleNavbar');

    // Toggle the visibility of the collapsible navbar on button click
    toggleButton.addEventListener('click', function () {
        navbarCollapse.style.display = (navbarCollapse.style.display === 'block') ? 'none' : 'block';
    });

    // Close the navbar if a link is clicked (optional)
    var navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navbarCollapse.style.display = 'none';
        });
    });
});
