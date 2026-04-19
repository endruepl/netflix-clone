const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    const isScrolled = window.scrollY > 200;
    backToTopBtn.classList.toggle("back-to-top--visible", isScrolled);
});