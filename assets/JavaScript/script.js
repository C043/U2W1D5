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
