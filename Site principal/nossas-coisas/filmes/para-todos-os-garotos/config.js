window.moviePageConfig = Object.freeze({
    id: "para-todos-os-garotos",
    theme: "theme-to-all-boys",
    cursorSymbol: "💌"
});

document.body.classList.add(window.moviePageConfig.theme);
document.body.dataset.cursorSymbol = window.moviePageConfig.cursorSymbol;
