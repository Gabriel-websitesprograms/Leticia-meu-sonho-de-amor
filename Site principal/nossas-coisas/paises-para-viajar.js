(() => {
    const countries = [
        { name: "Itália", flag: "🇮🇹", region: "Europa", color: "#17764b", description: "Arte, ruínas romanas, pequenas praças e sabores que mudam de região para região." },
        { name: "França", flag: "🇫🇷", region: "Europa", color: "#3265a8", description: "Museus, vilarejos, paisagens alpinas e a atmosfera inesquecível de Paris." },
        { name: "Espanha", flag: "🇪🇸", region: "Europa", color: "#c7363e", description: "Praças cheias de vida, arquitetura marcante, praias e tradições diversas." },
        { name: "Portugal", flag: "🇵🇹", region: "Europa", color: "#157448", description: "Cidades históricas, miradouros, litoral atlântico e uma língua tão familiar." },
        { name: "Grécia", flag: "🇬🇷", region: "Europa", color: "#3479b7", description: "Ilhas, sítios arqueológicos e vilas brancas diante do mar azul." },
        { name: "Suíça", flag: "🇨🇭", region: "Europa", color: "#d83942", description: "Montanhas, lagos transparentes, trens panorâmicos e vilarejos alpinos." },
        { name: "Reino Unido", flag: "🇬🇧", region: "Europa", color: "#334e83", description: "Castelos, museus, paisagens verdes e bairros cheios de personalidade." },
        { name: "Irlanda", flag: "🇮🇪", region: "Europa", color: "#23794d", description: "Falésias, campos verdes, música e cidades acolhedoras." },
        { name: "Países Baixos", flag: "🇳🇱", region: "Europa", color: "#d76535", description: "Canais, bicicletas, arte e cidades para explorar sem pressa." },
        { name: "Alemanha", flag: "🇩🇪", region: "Europa", color: "#393a3b", description: "História, castelos, florestas e centros urbanos cheios de cultura." },
        { name: "Islândia", flag: "🇮🇸", region: "Europa", color: "#386c98", description: "Vulcões, geleiras, cachoeiras e paisagens que parecem de outro planeta." },
        { name: "Croácia", flag: "🇭🇷", region: "Europa", color: "#3974a8", description: "Costa adriática, cidades antigas e ilhas para descobrir." },
        { name: "Estados Unidos", flag: "🇺🇸", region: "América do Norte", color: "#3f5e91", description: "Parques nacionais, cidades emblemáticas e paisagens de costa a costa." },
        { name: "Canadá", flag: "🇨🇦", region: "América do Norte", color: "#c63b43", description: "Florestas, lagos, montanhas e cidades multiculturais." },
        { name: "México", flag: "🇲🇽", region: "América do Norte", color: "#2b865b", description: "Ruínas antigas, praias, mercados e uma culinária cheia de história." },
        { name: "Brasil", flag: "🇧🇷", region: "América do Sul", color: "#238447", description: "Um país imenso de praias, florestas, cidades e culturas muito diversas." },
        { name: "Argentina", flag: "🇦🇷", region: "América do Sul", color: "#4b8db2", description: "Buenos Aires, montanhas andinas, vinhedos e paisagens patagônicas." },
        { name: "Chile", flag: "🇨🇱", region: "América do Sul", color: "#3e6392", description: "Deserto, montanhas, geleiras e uma longa costa no Pacífico." },
        { name: "Peru", flag: "🇵🇪", region: "América do Sul", color: "#c63842", description: "História inca, trilhas andinas e sabores reconhecidos no mundo todo." },
        { name: "Japão", flag: "🇯🇵", region: "Ásia", color: "#bf4148", description: "Templos, jardins, cidades vibrantes e tradições que atravessam gerações." },
        { name: "Coreia do Sul", flag: "🇰🇷", region: "Ásia", color: "#426c9c", description: "Palácios, bairros modernos, mercados e cultura pop." },
        { name: "Tailândia", flag: "🇹🇭", region: "Ásia", color: "#3d6998", description: "Templos, ilhas tropicais, mercados e uma culinária aromática." },
        { name: "China", flag: "🇨🇳", region: "Ásia", color: "#c63a43", description: "Uma história milenar, cidades imensas e paisagens muito variadas." },
        { name: "Indonésia", flag: "🇮🇩", region: "Ásia", color: "#cc414a", description: "Ilhas, vulcões, praias e culturas diferentes em um arquipélago enorme." },
        { name: "Vietnã", flag: "🇻🇳", region: "Ásia", color: "#c63c44", description: "Montanhas, cidades históricas, campos verdes e vida à beira dos rios." },
        { name: "Singapura", flag: "🇸🇬", region: "Ásia", color: "#bf3e48", description: "Jardins, arquitetura contemporânea e uma mistura de culturas e sabores." },
        { name: "Turquia", flag: "🇹🇷", region: "Europa e Ásia", color: "#c63b45", description: "Mercados, ruínas, mesquitas e paisagens entre dois continentes." },
        { name: "Egito", flag: "🇪🇬", region: "África", color: "#bf3f45", description: "Templos, museus e monumentos ligados à história do Nilo." },
        { name: "Marrocos", flag: "🇲🇦", region: "África", color: "#be3d45", description: "Medinas, arquitetura, montanhas e mercados cheios de cores e aromas." },
        { name: "África do Sul", flag: "🇿🇦", region: "África", color: "#268353", description: "Parques naturais, litoral, vinhedos e cidades de muitas culturas." },
        { name: "Austrália", flag: "🇦🇺", region: "Oceania", color: "#41638d", description: "Praias, recifes, paisagens naturais e cidades à beira-mar." },
        { name: "Nova Zelândia", flag: "🇳🇿", region: "Oceania", color: "#385778", description: "Montanhas, lagos, trilhas e cenários naturais impressionantes." }
    ];

    const countryGrid = document.querySelector(".country-grid");
    const searchInput = document.querySelector("#country-search");
    const countryCount = document.querySelector(".country-count");
    const countryEmpty = document.querySelector(".country-empty");
    const itineraryList = document.querySelector(".itinerary-list");
    const itinerarySummary = document.querySelector(".itinerary-summary");
    const itineraryEmpty = document.querySelector(".itinerary-empty");
    const itineraryStatus = document.querySelector(".itinerary-status");
    const customCountryForm = document.querySelector(".custom-country-form");
    const customCountryInput = document.querySelector("#custom-country");
    const storageKey = "projeto-leticia-destinos-de-viagem";
    const itinerary = [{ name: "Itália", visited: false, isItaly: true }];

    const findInItinerary = (name) =>
        itinerary.find((destination) => destination.name.toLocaleLowerCase("pt-BR") === name.toLocaleLowerCase("pt-BR"));

    function saveItinerary() {
        try {
            localStorage.setItem(storageKey, JSON.stringify(itinerary));
            itineraryStatus.textContent = "";
        } catch (error) {
            itineraryStatus.textContent = "Não foi possível salvar seu roteiro neste navegador.";
            console.error("Não foi possível salvar o roteiro de viagem.", error);
        }
    }

    function renderCountries() {
        const query = searchInput.value.trim().toLocaleLowerCase("pt-BR");
        const matches = countries.filter((country) =>
            `${country.name} ${country.region}`.toLocaleLowerCase("pt-BR").includes(query)
        );

        countryGrid.replaceChildren();
        matches.forEach((country) => {
            const selected = Boolean(findInItinerary(country.name));
            const card = document.createElement("article");
            card.className = "country-card";
            card.style.setProperty("--country-color", country.color);

            const top = document.createElement("div");
            top.className = "country-card-top";
            const flag = document.createElement("span");
            flag.className = "country-flag";
            flag.setAttribute("aria-hidden", "true");
            flag.textContent = country.flag;
            const region = document.createElement("span");
            region.className = "country-region";
            region.textContent = country.region;
            top.append(flag, region);

            const heading = document.createElement("h3");
            heading.textContent = country.name;
            const description = document.createElement("p");
            description.textContent = country.description;

            const action = document.createElement("button");
            action.className = "country-card-button";
            action.classList.toggle("is-added", selected);
            action.type = "button";
            action.textContent = selected ? "✓ Incluído no pacote" : "＋ Reservar esse sonho";
            action.setAttribute("aria-pressed", String(selected));
            action.addEventListener("click", () => {
                if (findInItinerary(country.name)) {
                    removeDestination(country.name);
                    return;
                }

                itinerary.push({ name: country.name, visited: false, isItaly: country.name === "Itália" });
                saveItinerary();
                renderAll();
            });

            card.append(top, heading, description, action);
            countryGrid.append(card);
        });

        countryCount.textContent = query
            ? `${matches.length} ${matches.length === 1 ? "destino encontrado" : "destinos encontrados"}`
            : `${countries.length} destinos na vitrine da nossa agência`;
        countryEmpty.hidden = matches.length > 0;
    }

    function removeDestination(name) {
        const index = itinerary.findIndex((destination) =>
            destination.name.toLocaleLowerCase("pt-BR") === name.toLocaleLowerCase("pt-BR")
        );
        if (index < 0) return;

        itinerary.splice(index, 1);
        renderAll();
        saveItinerary();
    }

    function renderItinerary() {
        itineraryList.replaceChildren();
        itinerarySummary.textContent = `${itinerary.length} ${itinerary.length === 1 ? "destino reservado" : "destinos reservados"} no nosso pacote de sonhos`;
        itineraryEmpty.hidden = itinerary.length > 0;

        itinerary.forEach((destination) => {
            const item = document.createElement("li");
            item.className = "itinerary-item";
            if (destination.visited) item.classList.add("is-visited");

            const label = document.createElement("label");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = destination.visited;
            checkbox.setAttribute("aria-label", `Marcar ${destination.name} como visitado`);
            checkbox.addEventListener("change", () => {
                destination.visited = checkbox.checked;
                renderAll();
                saveItinerary();
            });

            const country = document.createElement("span");
            country.className = "itinerary-country";
            const knownCountry = countries.find((entry) => entry.name === destination.name);
            country.textContent = `${knownCountry?.flag ?? "✈️"} ${destination.name}`;
            label.append(checkbox, country);

            const removeButton = document.createElement("button");
            removeButton.className = "itinerary-remove";
            removeButton.type = "button";
            removeButton.textContent = "Remover";
            removeButton.setAttribute("aria-label", `Remover ${destination.name} do roteiro`);
            removeButton.addEventListener("click", () => removeDestination(destination.name));
            item.append(label, removeButton);
            itineraryList.append(item);
        });
    }

    function renderAll() {
        renderCountries();
        renderItinerary();
    }

    try {
        const savedItinerary = localStorage.getItem(storageKey);
        if (savedItinerary !== null) {
            const parsedItinerary = JSON.parse(savedItinerary);
            if (!Array.isArray(parsedItinerary) ||
                parsedItinerary.some((destination) =>
                    !destination ||
                    typeof destination.name !== "string" ||
                    typeof destination.visited !== "boolean" ||
                    typeof destination.isItaly !== "boolean"
                )) {
                throw new TypeError("O formato salvo para o roteiro de destinos é inválido.");
            }

            itinerary.splice(0, itinerary.length, ...parsedItinerary);
            if (!itinerary.some((destination) => destination.isItaly)) {
                itinerary.unshift({ name: "Itália", visited: false, isItaly: true });
            }
        }
    } catch (error) {
        itineraryStatus.textContent = "Não foi possível carregar o roteiro salvo. A Itália continua no passaporte.";
        console.error("Não foi possível carregar o roteiro de viagem.", error);
    }

    searchInput.addEventListener("input", renderCountries);
    customCountryForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = customCountryInput.value.trim();
        if (!name) {
            customCountryInput.focus();
            return;
        }

        if (findInItinerary(name)) {
            itineraryStatus.textContent = "Esse destino já está no nosso pacote de sonhos.";
            customCountryInput.focus();
            return;
        }

        itinerary.push({ name, visited: false, isItaly: false });
        customCountryInput.value = "";
        renderAll();
        saveItinerary();
        customCountryInput.focus();
    });

    renderAll();
})();
