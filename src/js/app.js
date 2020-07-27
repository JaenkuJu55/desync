function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", function() {
    parallax(".desync", window.scrollY, 0.6);
    parallax(".prod", window.scrollY, 0.67);
})