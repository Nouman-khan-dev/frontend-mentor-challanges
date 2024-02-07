const hamBurger = document.querySelector(".burger");
const closeBtn = document.querySelector(".close");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".menu_overlay");

hamBurger.addEventListener("click", () => {
    closeBtn.classList.remove("hidden")
    hamBurger.classList.add("hidden")
    menu.classList.add("wrap")
    overlay.classList.remove("hidden")
    document.body.style.height = "100vh"
    document.body.style.overflow = "hidden"
})

closeBtn.addEventListener("click", () => {
    menu.classList.remove("wrap")
    closeBtn.classList.add("hidden")
    hamBurger.classList.remove("hidden")
    overlay.classList.add("hidden")
    document.body.style.height = "initial"
    document.body.style.overflow = "initial"
})