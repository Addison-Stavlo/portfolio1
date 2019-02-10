const triangle = document.querySelector(".slide-angle");
const body = document.querySelector("body");
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
window.onload = () => {
  setSlideWidth();
  triangle.style.borderBottom = `${window.innerHeight}px solid #555`;
};

window.onresize = () => {
  setSlideWidth();
  triangle.style.borderBottom = `${window.innerHeight}px solid #555`;
};
