function parallaxAlla(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
    
}

function parallaxYles(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * -speed}px)`;
}

function parallaxParemale(element, distance, speed, sync) {
    const item = document.querySelector(element);
    item.style.transform = `translate(${distance * speed}px, ${distance * sync}px)`;
}


function backToHome() {
    window.scrollTo(0,0);
}

const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
    //Burgeri anim.
    burger.classList.toggle('toggle');
});



window.addEventListener("scroll", function() {
    parallaxYles(".film", window.scrollY, 3);
    parallaxAlla(".prod", window.scrollY, 0.7);
    parallaxParemale(".service", window.scrollY, 3,0.7);
})