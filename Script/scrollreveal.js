function initializeScrollReveal() {
    new ScrollReveal({
        reset: true,
        distance: '100px',
        duration: 1000,
    });

    // Reveal the main title after a delay
    ScrollReveal().reveal('.holder', {
        delay: 10,
        origin: 'bottom'
    });
}

// Call the initialization function
initializeScrollReveal();
