/* =========================
   TYPING EFFECT
========================= */

const words = [
    "FULL STACK DEVELOPER",
    "WEB DEVELOPER",
    "BACKEND DEVELOPER",
    "CREATIVE CODER"
];

const typing = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === current.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typing.textContent = current.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 45 : 90);
}

typeEffect();


/* =========================
   MOUSE GLOW
========================= */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", function(e) {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


/* =========================
   TERMINAL PARALLAX
========================= */

const terminal = document.querySelector(".terminal");

document.addEventListener("mousemove", function(e) {

    if (window.innerWidth < 900) return;

    const x = (window.innerWidth / 2 - e.clientX) / 50;
    const y = (window.innerHeight / 2 - e.clientY) / 50;

    terminal.style.transform =
        `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;

});


/* =========================
   SCROLL REVEAL
========================= */

const elements = document.querySelectorAll(
    ".skill-card, .project, .timeline-item, .about-grid"
);

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "1s ease";

    observer.observe(element);

});


/* =========================
   NAV CLICK
========================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function() {

        document.querySelectorAll(".nav-links a")
            .forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});
