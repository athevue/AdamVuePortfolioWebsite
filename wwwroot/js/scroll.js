window.scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};

window.scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
