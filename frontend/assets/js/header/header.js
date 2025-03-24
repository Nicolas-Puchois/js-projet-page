const toggleNavMobile = () => {
  // INFO : affiche / cache la navigation telephone
  let navMobile = document.querySelector("nav > #nav");

  navMobile.classList.toggle("mobile");

  menuIcon(navMobile);
};

const closeMenu = () => {
  // INFO : cache la navigation telephone lors de l'appuie sur la page ou click sur un lien ou lors du scroll

  // balise <main>
  let closeMenuMain = document.querySelector("main");

  // balise <div id="nav"> dans la <nav>
  let navMobile = document.querySelector("nav > #nav");

  // Toutes les balises <a> dans les <li> dans les <ul> dans la <div id="nav"
  let links = document.querySelectorAll("#nav > ul > li > a");

  // ferme le menu quand touche sur le main
  closeMenuMain.addEventListener("click", () => {
    navMobile.classList.remove("mobile");
    menuIcon(navMobile);
  });

  // ferme le menu lors de l'appuie d'un lien
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navMobile.classList.remove("mobile");
      menuIcon(navMobile);
    });
  });

  // ferme le menu lors de l'appuie d'un lien
  window.addEventListener("scroll", () => {
    navMobile.classList.remove("mobile");
    menuIcon(navMobile);
  });

  // window.addEventListener("resize", () => {
  //   navMobile.classList.remove("mobile");
  //   menuIcon(navMobile);
  // });
};

const menuIcon = (navMobile) => {
  // INFO : change l'icone en fonction de l'ouverture/fermeture de la nav mobile
  let iconMenu = document.querySelector("nav > #toggle-nav");
  iconMenu.setAttribute(
    "class",
    navMobile.classList.contains("mobile")
      ? "fas fa-plane-slash"
      : "fas fa-plane"
  );
};

window.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia("(max-width:768px").matches) {
    let toggleNav = document.querySelector("#toggle-nav");
    toggleNav.addEventListener("click", toggleNavMobile);
    toggleNav.addEventListener("click", closeMenu);
  }
});
