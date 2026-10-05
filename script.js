// Dark / light theme toggle
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    document.getElementById('themeBtn').innerText =
        document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

// Mobile hamburger menu
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
});
navMenu.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => navMenu.classList.remove('open'))
);

// Typing effect in hero — only runs if the library loaded
if (typeof Typed !== 'undefined') {
    new Typed('#typed', {
        strings: ['Software Engineering Student.', 'Dedicated Web Development Learner.', 'Python Enthusiast.'],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    });
} else {
    // Fallback so the subtitle is never blank
    document.getElementById('typed').innerText = 'Software Engineering Student.';
}
