window.addEventListener('scroll', function () {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 100) {
    navbar.classList.add("navbar-branco");
  } else {
    navbar.classList.remove("navbar-branco");
  }
});