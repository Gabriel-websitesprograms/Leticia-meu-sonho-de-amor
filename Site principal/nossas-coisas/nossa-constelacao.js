(() => {
    const memories = [
        {
            id: "caminhos-cruzados",
            title: "Onde nossos caminhos se cruzaram",
            date: "08 de agosto de 2026",
            description: "Na formatura da minha mãe, você me viu pela primeira vez. Não tenho lembranças muito claras daquele dia, mas gosto de pensar que foi o primeiro capítulo da nossa história.",
            photo: "",
            category: "gold",
            happened: true,
            position: { x: 8, y: 24 },
            connections: ["solicitacao"]
        },
        {
            id: "solicitacao",
            title: "A solicitação inesperada",
            date: "26 de agosto de 2026",
            description: "Uma conta diferente começou a me seguir. Fiquei na dúvida e demorei um pouquinho para aceitar. Ainda bem que aceitei!",
            photo: "",
            category: "gold",
            happened: true,
            position: { x: 22, y: 55 },
            connections: ["cantada"]
        },
        {
            id: "cantada",
            title: "Nossa primeira conversa",
            date: "27 de agosto de 2026",
            description: "Respondi ao seu story com uma cantada improvisada sobre o seu sorriso. Foi nossa primeira interação pelo Instagram e o começo das nossas conversas.",
            photo: "",
            category: "gold",
            happened: true,
            position: { x: 36, y: 25 },
            connections: ["primeiro-encontro"]
        },
        {
            id: "primeiro-encontro",
            title: "Nosso primeiro encontro",
            date: "10 de outubro de 2026",
            description: "Depois do curso, comprei uma rosa para te dar de surpresa e cheguei cedo ao Açaí Pará. Quando você chegou, nos abraçamos, demos um beijo no rosto e eu te entreguei a rosa. Depois, andamos de mãos dadas, rimos e tivemos nosso primeiro selinho.",
            photo: "../../Fotos-nossas/WhatsApp%20Image%202026-10-10%20at%2016.46.03.jpeg",
            category: "gold",
            happened: true,
            position: { x: 50, y: 57 },
            connections: ["vida"]
        },
        {
            id: "vida",
            title: "A primeira vez que você me chamou de “vida”",
            date: "21 de outubro de 2026",
            description: "Depois de uma ligação em que conversamos sobre os nossos dias, você me chamou de “vida” pela primeira vez. Você também contou que a Luana disse ter visto um dos palhaços do Alô, Juca!, mas ninguém acreditou nela.",
            photo: "",
            category: "gold",
            happened: true,
            position: { x: 64, y: 24 },
            connections: ["primeiro-eu-te-amo"]
        },
        {
            id: "primeiro-eu-te-amo",
            title: "O primeiro “eu te amo”",
            date: "24 de outubro de 2026",
            description: "Durante uma ligação, você contou que a Karol brincou dizendo que estava sendo mal amada. No meio da conversa, eu disse meu primeiro “eu te amo” — palavras que estava guardando havia duas semanas — e você foi recíproca.",
            photo: "",
            category: "gold",
            happened: true,
            position: { x: 78, y: 56 },
            connections: ["conhecer-sogros"]
        },
        {
            id: "conhecer-sogros",
            title: "Um dia cheio de momentos especiais",
            date: "01 de novembro de 2026",
            description: "O dia começou com o batizado do Allan e um café na Ilha de Santorini. Depois, conheci a Sky, a cachorrinha que não desgrudou de mim. À tarde, você me chamou para conhecer seus pais. Fiquei nervoso, mas fui recebido com carinho. Mais tarde, fomos à sorveteria, conversamos e você fez cafuné em mim no carro.",
            photo: "../../Fotos-nossas/Encontro inesperado kkkkk/01-11-2026.Chiquinhos.jpeg",
            category: "gold",
            happened: true,
            position: { x: 92, y: 25 },
            connections: []
        },
    ];

    const sky = document.querySelector("#constellation-sky");
    const starsContainer = document.querySelector(".memory-stars");
    const connectionsSvg = document.querySelector(".memory-connections");
    const layout = document.querySelector(".constellation-layout");
    const card = document.querySelector("#memory-card");
    const closeButton = document.querySelector(".memory-card-close");
    const hint = document.querySelector(".constellation-hint");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!sky || !starsContainer || !connectionsSvg || !layout || !card || !closeButton || !hint) {
        console.error("Não foi possível iniciar a constelação: faltam elementos necessários na página.");
        return;
    }

    const categoryNames = {
        gold: "Momento vivido",
        white: "Pequeno detalhe",
        blue: "Sonho para o futuro"
    };

    const memoryById = new Map();
    const starById = new Map();
    let activeStar = null;

    const validateMemory = (memory) => {
        if (!memory || typeof memory !== "object"
            || typeof memory.id !== "string" || !memory.id.trim()
            || typeof memory.title !== "string" || !memory.title.trim()
            || typeof memory.date !== "string" || !memory.date.trim()
            || typeof memory.description !== "string"
            || typeof memory.photo !== "string"
            || !["gold", "white", "blue"].includes(memory.category)
            || typeof memory.happened !== "boolean"
            || (memory.category === "blue" && memory.happened)
            || (memory.category !== "blue" && !memory.happened)
            || !memory.position
            || !Number.isFinite(memory.position.x) || memory.position.x < 0 || memory.position.x > 100
            || !Number.isFinite(memory.position.y) || memory.position.y < 0 || memory.position.y > 100
            || !Array.isArray(memory.connections)
            || memory.connections.some((targetId) => typeof targetId !== "string" || !targetId.trim())) {
            throw new TypeError("A memória precisa ter dados válidos, uma categoria reconhecida, posição e conexões.");
        }
        if (memoryById.has(memory.id)) {
            throw new TypeError(`Já existe uma memória com o ID "${memory.id}".`);
        }
    };

    const getPosition = (memory) => {
        const isMobile = window.matchMedia("(max-width: 760px)").matches;
        if (isMobile) {
            const memoryIndex = memories.indexOf(memory);
            const row = Math.floor(memoryIndex / 2);
            const rowCount = Math.ceil(memories.length / 2);
            const rowsApart = Math.max(rowCount - 1, 1);
            return {
                x: memoryIndex % 2 === 0 ? 24 : 76,
                y: 6 + (row / rowsApart) * 88
            };
        }
        return {
            x: memory.position.x,
            y: memory.position.y
        };
    };

    const updateSkySize = () => {
        if (!window.matchMedia("(max-width: 760px)").matches) {
            sky.style.minHeight = "";
            return;
        }

        const rowCount = Math.ceil(memories.length / 2);
        const minimumHeight = Math.max(37, rowCount * 6 + 4);
        sky.style.minHeight = `${minimumHeight}rem`;
    };

    const renderConnections = () => {
        connectionsSvg.replaceChildren();
        memories.forEach((memory) => {
            memory.connections.forEach((targetId) => {
                const target = memoryById.get(targetId);
                if (!target) {
                    console.error(`A conexão da memória "${memory.id}" aponta para "${targetId}", que não existe.`);
                    return;
                }

                const sourcePosition = getPosition(memory);
                const targetPosition = getPosition(target);
                const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                line.classList.add("memory-connection");
                line.dataset.category = memory.category;
                line.setAttribute("x1", String(sourcePosition.x * 10));
                line.setAttribute("y1", String(sourcePosition.y * 5));
                line.setAttribute("x2", String(targetPosition.x * 10));
                line.setAttribute("y2", String(targetPosition.y * 5));
                connectionsSvg.append(line);
            });
        });
    };

    const positionStar = (memory, star) => {
        const position = getPosition(memory);
        star.style.left = `${position.x}%`;
        star.style.top = `${position.y}%`;
    };

    const renderMemory = (memory) => {
        const star = document.createElement("button");
        star.type = "button";
        star.className = "memory-star";
        star.dataset.memoryId = memory.id;
        star.dataset.category = memory.category;
        star.setAttribute("aria-label", `${memory.title}, ${memory.date}. ${categoryNames[memory.category]}`);

        const orb = document.createElement("span");
        orb.className = "memory-star-orb";
        orb.setAttribute("aria-hidden", "true");
        const label = document.createElement("span");
        label.className = "memory-star-label";
        label.textContent = memory.title;
        star.append(orb, label);
        positionStar(memory, star);
        star.addEventListener("click", () => openMemory(memory, star));
        starsContainer.append(star);
        starById.set(memory.id, star);
        updateSkySize();
    };

    const registerMemory = (memory) => {
        validateMemory(memory);
        memoryById.set(memory.id, memory);
        memories.push(memory);
        renderMemory(memory);
        renderConnections();
    };

    const openMemory = (memory, star) => {
        activeStar = star;
        card.dataset.category = memory.category;
        card.querySelector(".memory-card-category").textContent = categoryNames[memory.category];
        card.querySelector("#memory-title").textContent = memory.title;
        card.querySelector(".memory-card-date").textContent = memory.date;
        card.querySelector(".memory-card-description").textContent = memory.description;

        const photo = card.querySelector(".memory-card-photo");
        const image = photo.querySelector("img");
        const photoError = card.querySelector(".memory-card-photo-error");
        photo.hidden = !memory.photo;
        photoError.hidden = true;
        image.onerror = null;
        image.removeAttribute("src");
        image.alt = "";

        if (memory.photo) {
            image.alt = `Fotografia relacionada a ${memory.title}`;
            image.onerror = () => {
                photo.hidden = true;
                photoError.hidden = false;
            };
            image.src = memory.photo;
            photo.querySelector("figcaption").textContent = memory.title;
        }

        card.hidden = false;
        layout.classList.add("has-selected-memory");
        hint.textContent = `${categoryNames[memory.category]}${memory.happened ? "" : " · Ainda por viver"}.`;
        if (window.matchMedia("(max-width: 760px)").matches) {
            card.scrollIntoView({ behavior: prefersReducedMotion.matches ? "auto" : "smooth", block: "center" });
        }
    };

    const closeMemory = () => {
        card.hidden = true;
        layout.classList.remove("has-selected-memory");
        hint.textContent = "Escolha uma estrela para abrir uma lembrança.";
        if (activeStar) activeStar.focus();
        activeStar = null;
    };

    memories.forEach((memory) => {
        validateMemory(memory);
        memoryById.set(memory.id, memory);
        renderMemory(memory);
    });
    renderConnections();

    closeButton.addEventListener("click", closeMemory);
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !card.hidden) closeMemory();
    });
    window.addEventListener("resize", () => {
        updateSkySize();
        memories.forEach((memory) => {
            const star = starById.get(memory.id);
            if (star) positionStar(memory, star);
        });
        renderConnections();
    });

    window.nossaConstelacao = Object.freeze({ cadastrarMemoria: registerMemory });
})();
