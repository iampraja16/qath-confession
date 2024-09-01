// Smooth scroll to section
function scrollToSection(section) {
  const contentSection = document.querySelector(section);
  contentSection.classList.remove('hidden'); // Reveal the content
  contentSection.scrollIntoView({
      behavior: 'smooth'
  });
}

// Detect when elements are in the viewport for animations
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateOnScroll() {
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

// Trigger animation on page load
window.addEventListener('load', animateOnScroll);
