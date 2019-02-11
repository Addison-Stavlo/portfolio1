{
  const triangle = document.querySelector(".slide-angle");
  const body = document.querySelector("body");
  const navBar = document.querySelector(".nav-bar");
  const slideAngle = document.querySelector(".slide-angle");
  const myName = document.querySelector(".my-name");
  const myTrade = document.querySelector(".my-trade");
  const ctaBtn = document.querySelector(".cta-btn");
  const wideViewStart = 1100;

  function setSlideWidth() {
    if (window.innerWidth >= wideViewStart) {
      triangle.style.borderLeft = `${body.clientWidth *
        0.7}px solid transparent`;
    } else {
      triangle.style.borderLeft = `${body.clientWidth}px solid transparent`;
    }
  }

  ctaBtn.addEventListener("click", () => {
    window.scroll({ top: body.clientHeight, behavior: "smooth" });
  });

  //   document.onreadystatechange = () => {
  //   };
  window.onload = () => {
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
    setSlideWidth();
    triangle.style.borderBottom = `${window.innerHeight}px solid #555`;
  };
}
