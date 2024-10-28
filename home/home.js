const headerContainerRef = document.querySelector(".header-container");
const menuHamburguerRef = document.querySelector(".menu-hamburguer");

menuHamburguerRef.addEventListener("click", () => {
    console.log(headerContainerRef)
    headerContainerRef.classList.toggle("active");
})