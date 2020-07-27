const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//LÕPP
const section = document.querySelector("section");
const end = section.querySelector("h1");

//RULLIMINE
const controller = new ScrollMagic.Controller();

//Stseenid
const scene = new ScrollMagic.Scene({
    duration: 17000,
    triggerElement: intro,
    triggerHook:0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

//Animatsioon
let accelAmount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
})

setInterval(() => {
    delay += (scrollpos -delay) * accelAmount;

    video.currentTime = delay;
}, 16.6);