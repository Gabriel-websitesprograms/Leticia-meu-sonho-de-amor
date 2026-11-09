window.moviePageConfig = Object.freeze({
    id: "crepusculo-lua-nova",
    theme: "theme-new-moon",
    cursorSymbol: "🌘"
});

document.body.classList.add(window.moviePageConfig.theme);
document.body.dataset.cursorSymbol = window.moviePageConfig.cursorSymbol;
