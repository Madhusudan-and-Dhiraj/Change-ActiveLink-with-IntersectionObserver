const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");
const allAnchor = document.querySelectorAll(`[data-page]`);
const gradients = [
  "linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)",
  "linear-gradient(to right, #4776e6, #8e54e9)",
  "linear-gradient(to right, #ff512f, #dd2476)",
  "linear-gradient(to right, #33001b, #ff0084)",
  "linear-gradient(to right, #fcb045, #fd1d1d, #833ab4)",
];
const options = {
  threshold: 0.85,
};
let observer = new IntersectionObserver(navCheck, options);
function navCheck(entries) {
  // console.log(entries);
  entries.forEach((entry) => {
    // console.log(entry.target.id);
    const className = entry.target.id;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const gradientIndex = entry.target.getAttribute("data-index");
    const coords = activeAnchor.getBoundingClientRect();
    const directtions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left,
    };
    if (entry.isIntersecting) {
      bubble.style.height = directtions.height + "px";
      bubble.style.width = directtions.width + "px";
      bubble.style.top = directtions.top + "px";
      bubble.style.left = directtions.left + "px";
      bubble.style.background = gradients[gradientIndex];
      allAnchor.forEach((a) => {
        a.classList.remove("active");
      });
      activeAnchor.classList.add("active");
    }
  });
}
sections.forEach((section) => {
  observer.observe(section);
});
