const headerContainerRef = document.querySelector(".header-container");
const menuHamburguerRef = document.querySelector(".menu-hamburguer");

menuHamburguerRef.addEventListener("click", () => {
    headerContainerRef.classList.toggle("active");
})