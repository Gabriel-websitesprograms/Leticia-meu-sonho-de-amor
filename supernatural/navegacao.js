const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

if (!menuButton || !menu) {
    throw new Error("Não foi possível inicializar o menu de Supernatural.");
}

menu.querySelectorAll("a").forEach((link) => {
    const destino = new URL(link.href, window.location.href);
    if (destino.pathname === window.location.pathname && destino.hash === window.location.hash) {
        link.setAttribute("aria-current", "page");
    }
});

menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    menu.hidden = isExpanded;
});

document.addEventListener("click", (event) => {
    if (event.target instanceof Element && !event.target.closest(".menu-container")) {
        menu.hidden = true;
        menuButton.setAttribute("aria-expanded", "false");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        menu.hidden = true;
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.focus();
    }
});
