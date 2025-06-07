window.addEventListener('scroll', function () {
  const navbar = document.querySelector("#navbar nav");

  if (window.scrollY > 100) {
    navbar.classList.add("navbar-branco");
  } else {
    navbar.classList.remove("navbar-branco");
  }
});
