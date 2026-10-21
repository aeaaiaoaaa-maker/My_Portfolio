const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const contactForm = document.getElementById("contactForm");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("open");

    if (navLinks.classList.contains("open")) {
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-expanded", "true");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    }
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function() {
        navLinks.classList.remove("open");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "🌙";
} else {
    themeToggle.textContent = "☀";
}

themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeToggle.textContent = "🌙";
        localStorage.setItem("portfolioTheme", "light");
    } else {
        themeToggle.textContent = "☀";
        localStorage.setItem("portfolioTheme", "dark");
    }
});

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
        alert(
            "Thank you, " + name +
            "! Your message has been entered successfully."
        );

        contactForm.reset();
    }
});

const animatedElements = document.querySelectorAll(
    ".skill-card, " +
    ".project-card, " +
    ".achievement-card, " +
    ".goal-card, " +
    ".info-card"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    animatedElements.forEach(element => {
        element.classList.add("scroll-animate");
        observer.observe(element);
    });
}

const sections = document.querySelectorAll("main section");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function() {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});

console.log("Angela Andaya Portfolio Website Loaded Successfully!");