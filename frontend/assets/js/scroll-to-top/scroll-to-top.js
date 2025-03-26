function scrollToTop() {
  const scrollToTopButton = document.querySelector("#up-arrow");
  const heroHeader = document.querySelector("#hero-header");
  //   console.log(heroHeader);
  //   console.log(heroHeader.offsetHeight);

  window.addEventListener("scroll", () => {
    if (scrollY >= heroHeader.offsetHeight) {
      scrollToTopButton.style.display = "block";
    } else if (scrollY == 0) {
      scrollToTopButton.style.display = "none";
    }
  });

  scrollToTopButton.addEventListener("click", () => window.scrollTo(0, 0));
}

window.addEventListener("DOMContentLoaded", scrollToTop);
