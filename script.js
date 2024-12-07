// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Highlight active section in navigation
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.6 };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const navLink = document.querySelector(`a[href="#${entry.target.id}"]`);
            if (entry.isIntersecting) {
                navLink.classList.add("active");
            } else {
                navLink.classList.remove("active");
            }
        });
    }, options);

    sections.forEach(section => observer.observe(section));
});

// Back to Top functionality
window.onscroll = () => {
    const button = document.getElementById("backToTop");
    button.style.display = window.scrollY > 300 ? "block" : "none";
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Back-to-top button
document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.createElement("button");
    backToTopButton.innerText = "⬆ Top";
    backToTopButton.id = "backToTop";
    document.body.appendChild(backToTopButton);

    backToTopButton.style.display = "none";
    backToTopButton.style.position = "fixed";
    backToTopButton.style.bottom = "20px";
    backToTopButton.style.right = "20px";
    backToTopButton.style.padding = "10px 15px";
    backToTopButton.style.backgroundColor = "#0073e6";
    backToTopButton.style.color = "#fff";
    backToTopButton.style.border = "none";
    backToTopButton.style.borderRadius = "5px";
    backToTopButton.style.cursor = "pointer";
    backToTopButton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)";
    backToTopButton.style.transition = "opacity 0.3s ease, transform 0.3s ease";

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
            backToTopButton.style.opacity = "1";
            backToTopButton.style.transform = "scale(1)";
        } else {
            backToTopButton.style.opacity = "0";
            backToTopButton.style.transform = "scale(0.8)";
        }
    });

    backToTopButton.addEventListener("click", scrollToTop);
});

// Animate sections on scroll
document.addEventListener("DOMContentLoaded", () => {
    const animatedSections = document.querySelectorAll("section");
    const sectionObserverOptions = { threshold: 0.2 };

    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, sectionObserverOptions);

    animatedSections.forEach(section => {
        section.classList.add("fade-out"); // Initially hidden
        sectionObserver.observe(section);
    });
});
