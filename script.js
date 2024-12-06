// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Add smooth scrolling to links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Highlight active section in navigation
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.6,
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const navLink = document.querySelector(
                `a[href="#${entry.target.id}"]`
            );
            if (entry.isIntersecting) {
                navLink.classList.add("active");
            } else {
                navLink.classList.remove("active");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Dynamic back-to-top button
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
    backToTopButton.style.transition = "opacity 0.3s ease";

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
