document.addEventListener('DOMContentLoaded', () => {

    // --- Sliding Navigation Logic ---
    const openMenuBtn = document.getElementById('open-menu');
    const closeMenuBtn = document.getElementById('close-menu');
    const slidingNav = document.getElementById('sliding-nav');
    const navLinks = document.querySelectorAll('.nav-links a');
    const navImages = document.querySelectorAll('.nav-img');

    // Open/Close Menu
    openMenuBtn.addEventListener('click', () => {
        slidingNav.classList.add('open');
    });

    closeMenuBtn.addEventListener('click', () => {
        slidingNav.classList.remove('open');
    });

    // Swap Oversized Image on Link Hover
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            // Remove active class from all images
            navImages.forEach(img => img.classList.remove('active'));
            // Add active class to corresponding image
            const targetImageId = this.getAttribute('data-image');
            document.getElementById(targetImageId).classList.add('active');
        });
    });

    // --- Modal Logic ---
    const openModalBtn = document.getElementById('open-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const modal = document.getElementById('reservation-modal');

    openModalBtn.addEventListener('click', () => {
        modal.classList.add('open');
    });

    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('open');
    });

    // Close modal if user clicks outside the modal content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('open');
        }
    });

    // --- Scroll Trigger Reveals (Intersection Observer) ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

});
