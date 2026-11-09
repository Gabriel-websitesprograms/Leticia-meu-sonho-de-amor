window.moviePageConfig = Object.freeze({
    id: "a-nova-cinderela",
    theme: "theme-cinderella",
    cursorSymbol: "👠"
});

document.body.classList.add(window.moviePageConfig.theme);
document.body.dataset.cursorSymbol = window.moviePageConfig.cursorSymbol;
