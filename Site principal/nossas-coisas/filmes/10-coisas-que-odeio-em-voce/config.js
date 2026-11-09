window.moviePageConfig = Object.freeze({
    id: "10-coisas-que-odeio-em-voce",
    theme: "theme-10-things",
    cursorSymbol: "🎸"
});

document.body.classList.add(window.moviePageConfig.theme);
document.body.dataset.cursorSymbol = window.moviePageConfig.cursorSymbol;
