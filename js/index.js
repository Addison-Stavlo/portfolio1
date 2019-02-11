const triangle = document.querySelector(".slide-angle");
const body = document.querySelector("body");
const navBar = document.querySelector(".nav-bar");
const slideAngle = document.querySelector(".slide-angle");
const myName = document.querySelector(".my-name");
const myTrade = document.querySelector(".my-trade");
const ctaBtn = document.querySelector(".cta-btn");
// console.log(triangle);
// triangle.style.borderLeft = `${window.innerWidth * 0.7}px solid transparent`;
// triangle.style.borderBottom = `${window.innerHeight}px solid #555`;
// console.log(window.innerWidth);
const wideViewStart = 1100;

function setSlideWidth() {
  if (window.innerWidth >= wideViewStart) {
    triangle.style.borderLeft = `${body.clientWidth * 0.7}px solid transparent`;
  } else {
    triangle.style.borderLeft = `${body.clientWidth}px solid transparent`;
  }
}

document.onreadystatechange = () => {
  setSlideWidth();
  triangle.style.borderBottom = `${window.innerHeight}px solid #555`;
  TweenMax.from(navBar, 1.2, {
    y: -5000,
    ease: Sine.easeOut,
    onComplete: () => {
      ctaBtn.style.display = `inline-block`;
      TweenMax.from(ctaBtn, 1, { opacity: 0 });
    }
  });
  TweenMax.from(slideAngle, 0.6, { right: -1000, ease: Sine.easeOut });
  TweenMax.from(myName, 2, { opacity: 0 });
  TweenMax.from(myTrade, 2, {
    opacity: 0,
    onComplete: () => {}
  });
};
window.onload = () => {
  //   triangle.style.borderBottom = `${window.innerHeight}px solid #555`;
  // TweenMax.from(navBar, 2, { height: 0, opacity: 0 });
};

window.onresize = () => {
  setSlideWidth();
  triangle.style.borderBottom = `${window.innerHeight}px solid #555`;
};
