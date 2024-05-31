const mAnimation = setInterval(() => {
  const mElements = document.getElementsByTagName("g");
  const randomNum = Math.floor(Math.random() * mElements.length) + 2;
  const currentElement = mElements[randomNum];
  const currentOpacity = currentElement.getAttributeNS(null, "opacity");
  if (currentOpacity === "0") {
    currentElement.setAttributeNS(null, "opacity", 1);
    console.log("on", currentElement);
  } else if (currentOpacity === "1") {
    currentElement.setAttributeNS(null, "opacity", 0);
    console.log("off", currentElement);
  }
}, 10);

window.onscroll = (event) => {
  console.log(event);
  const nav = document.querySelector("nav");
  const getStarted = document.querySelector("nav a:last-of-type");
  if (window.scrollY > 400) {
    nav.classList.add("changed-nav");
    getStarted.classList.remove("black-button");
    getStarted.classList.add("changed-button");
  } else {
    nav.classList.remove("changed-nav");
    getStarted.classList.remove("changed-button");
    getStarted.classList.add("black-button");
  }
};

window.onload = mAnimation;
