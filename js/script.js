"use script";

// DOM elements
const DOMEL = document.documentElement;
const body = document.body;
const pageLoadingEL = document.querySelector(".page-load");
const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".nav__menu-icon");

// DOM changes
pageLoadingEL.classList.remove("end-loading");

// Event Listener functions
const pageLoad = () => {
  body.style.overflowY = "scroll";
  body.style.width = "100%";
  body.style.position = "fixed";
  pageLoadingEL.classList.add("start-loading");

  setTimeout(() => {
    pageLoadingEL.classList.add("end-loading");
    body.style.position = "relative";
  }, 1700);
};

const moveSapes = (event) => {
  const { clientX: mouseX, clientY: mouseY } = event;
  const { innerWidth: viewportWidth, innerHeight: viewportHeight } =
    window;
  const mouseXPercent = (mouseX / viewportWidth) * 15;
  const mouseYPercent = (mouseY / viewportHeight) * 15;

  DOMEL.style.cssText = `
    --move-x: ${mouseXPercent}%;
    --move-y: ${mouseYPercent}%;
    --move-hero-x: ${mouseXPercent / 4}%;
    --move-hero-y: ${mouseYPercent / 8}%;
  `;
};

const openNav = function () {
  nav.classList.toggle("nav-open");
};

// Event Listeners
window.addEventListener("load", pageLoad);
window.addEventListener("mousemove", moveSapes);
menuBtn.addEventListener("click", openNav);
