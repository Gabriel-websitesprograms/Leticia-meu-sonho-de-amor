window.moviePageConfig = Object.freeze({
    id: "crepusculo",
    theme: "theme-twilight",
    cursorSymbol: "🌙",
    showFranchise: true
});

document.body.classList.add(window.moviePageConfig.theme);
document.body.dataset.cursorSymbol = window.moviePageConfig.cursorSymbol;
