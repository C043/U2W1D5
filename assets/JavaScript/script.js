// Filtro le m in modo da prendere solo quelle che mi servono

const mElements = document.getElementsByTagName("g");
const mElementsFiltered = Array.from(mElements).filter(
  (element) => element.getAttribute("opacity") === "0"
);
mElementsFiltered.shift();

// Funzione che anima le m
const mAnimation = setInterval(() => {
  const randomNum = Math.floor(Math.random() * mElementsFiltered.length);
  const currentElement = mElementsFiltered[randomNum];
  const currentOpacity = currentElement.getAttribute("opacity");
  if (currentOpacity === "0") {
    currentElement.setAttribute("opacity", 1);
  } else if (currentOpacity === "1") {
    currentElement.setAttribute("opacity", 0);
  }
}, 10);

// Funzione che anima la navbar
window.onscroll = () => {
  const nav = document.querySelector("nav");
  const getStarted = document.querySelector("nav a:last-of-type");
  if (window.scrollY > 350) {
    nav.classList.add("changed-nav");
    getStarted.classList.remove("black-button");
    getStarted.classList.add("changed-button");
  } else {
    nav.classList.remove("changed-nav");
    getStarted.classList.remove("changed-button");
    getStarted.classList.add("black-button");
  }
};
