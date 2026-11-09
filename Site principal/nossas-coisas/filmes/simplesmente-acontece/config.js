window.moviePageConfig = Object.freeze({
    id: "simplesmente-acontece",
    theme: "theme-love-rosie",
    cursorSymbol: "✈️"
});

document.body.classList.add(window.moviePageConfig.theme);
document.body.dataset.cursorSymbol = window.moviePageConfig.cursorSymbol;
