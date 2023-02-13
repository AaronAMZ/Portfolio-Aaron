const naveToggle = document.querySelector(".nave__toggle");
const naveMenu = document.querySelector(".nave__menu");

naveToggle.addEventListener("click", () => {
    naveMenu.classList.toggle("nave__menu__visible")
})