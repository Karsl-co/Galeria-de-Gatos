let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;

    if (currentScroll <= 0) {
        header.classList.remove("header-hidden");
        return;
    }

    if (currentScroll > lastScroll) {
        header.classList.add("header-hidden");
    } else {
        header.classList.remove("header-hidden");
    }

    lastScroll = currentScroll;
});

const elements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

elements.forEach(el => observer.observe(el));
