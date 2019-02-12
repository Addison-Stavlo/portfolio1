{
  const body = document.querySelector("body");
  const navBar = document.querySelector(".nav-bar");
  const slideAngle = document.querySelector(".slide-angle");
  const myName = document.querySelector(".my-name");
  const myTrade = document.querySelector(".my-trade");
  const ctaBtn = document.querySelector(".cta-btn");
  const wideViewStart = 1100;
  const minHeight = 500;

  function setSlideDimensions() {
    if (window.innerWidth >= wideViewStart) {
      slideAngle.style.borderLeft = `${body.clientWidth *
        0.7}px solid transparent`;
    } else {
      slideAngle.style.borderLeft = `${body.clientWidth}px solid transparent`;
    }
    if (window.innerHeight <= minHeight) {
      slideAngle.style.borderBottom = `${window.innerHeight}px solid #555`;
    } else {
      slideAngle.style.borderBottom = `${window.innerHeight}px solid #555`;
    }
  }

  ctaBtn.addEventListener("click", () => {
    window.scroll({ top: window.innerHeight, behavior: "smooth" });
  });

  //   document.onreadystatechange = () => {
  //   };
  window.onload = () => {
    setSlideDimensions();
    // slideAngle.style.borderBottom = `${window.innerHeight}px solid #555`;
    TweenMax.from(navBar, 1.2, {
      y: -5000,
      ease: Sine.easeOut,
      onComplete: () => {
        ctaBtn.style.display = `inline-block`;
        TweenMax.from(ctaBtn, 1, { opacity: 0 });
      }
    });
    TweenMax.from(slideAngle, 0.6, {
      right: -1000,
      ease: Sine.easeOut,
      onComplete: () => {
        myName.style.display = `inline-block`;
        TweenMax.from(myName, 1, { opacity: 0 });
      }
    });
    TweenMax.from(myTrade, 2, { opacity: 0 });
  };

  window.onresize = () => {
    setSlideDimensions();
    // slideAngle.style.borderBottom = `${window.innerHeight}px solid #555`;
  };
}
