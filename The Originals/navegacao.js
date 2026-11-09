document.querySelectorAll(".cabecalho").forEach((cabecalho) => {
    const navegacao = cabecalho.querySelector(".navegacao-serie");
    if (!navegacao) return;

    const emSubpagina = window.location.pathname.includes("/ligacao-entre-series/");
    const raiz = new URL(emSubpagina ? "../" : "./", window.location.href);
    const links = [
        ["Início", "the-originals.html"],
        ["História", "historia.html"],
        ["Personagens", "personagens.html"],
        ["Temporadas", "temporadas.html"],
        ["Criaturas", "criaturas.html"],
        ["Artefatos", "artefatos.html"],
        ["Família Mikaelson", "familia-mikaelson.html"],
        ["Relações", "relacoes.html"],
        ["Nova Orleans e comunidades", "nova-orleans.html"],
        ["Linha do tempo", "linha-do-tempo.html"],
        ["Glossário", "glossario.html"],
        ["Trilha sonora", "trilha-sonora.html"],
        ["Ligação com The Vampire Diaries", "ligacao-entre-series/index.html"],
        ["Séries favoritas", "../Site principal/nossas-coisas/Suas series favoritos.html"],
    ];
    navegacao.replaceChildren(...links.map(([rotulo, destino]) => {
        const link = document.createElement("a");
        link.href = new URL(destino, raiz).href;
        link.textContent = rotulo;
        if (new URL(link.href).pathname === window.location.pathname) {
            link.setAttribute("aria-current", "page");
        }
        return link;
    }));
    navegacao.setAttribute("aria-label", "Navegação de The Originals");

    if (navegacao.closest("details.menu-serie")) return;

    const menu = document.createElement("details");
    const resumo = document.createElement("summary");
    menu.className = "menu-serie";
    resumo.textContent = "Menu da série";
    resumo.setAttribute("aria-label", "Abrir menu de The Originals");
    menu.append(resumo);
    navegacao.before(menu);
    menu.append(navegacao);
});

document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    document.querySelectorAll(".menu-serie[open]").forEach((menu) => {
        if (!menu.contains(event.target)) menu.open = false;
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const menu = document.querySelector(".menu-serie[open]");
    if (!menu) return;
    menu.open = false;
    menu.querySelector("summary")?.focus();
});
