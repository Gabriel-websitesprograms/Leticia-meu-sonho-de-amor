// Adicione faixas no formato { titulo: "Nome", arquivo: "trilhas-sonoras/arquivo.mp3" }.
const trilhasSonoras = [];
const soundtrackSection = document.createElement("section");
const soundtrackTitle = document.createElement("h2");
const soundtrackStatus = document.createElement("p");
const soundtrackPlayer = document.createElement("audio");

soundtrackSection.className = "soundtrack-player";
soundtrackSection.style.cssText = "width:min(800px,100%);margin:24px auto;padding:18px;border:1px solid #8a7650;border-radius:12px;background:linear-gradient(145deg,#f5f0e6,#e7dcc1);color:#332b1d;text-align:center";
soundtrackTitle.textContent = "Trilha sonora de Supernatural";
soundtrackTitle.style.cssText = "margin:0 0 10px;color:#5b3c17";
soundtrackPlayer.controls = false;
soundtrackPlayer.preload = "metadata";
soundtrackPlayer.autoplay = true;
soundtrackPlayer.hidden = true;
soundtrackStatus.setAttribute("aria-live", "polite");
soundtrackSection.append(soundtrackTitle, soundtrackStatus, soundtrackPlayer);
document.body.append(soundtrackSection);

if (trilhasSonoras.length === 0) {
    soundtrackStatus.textContent = "Adicione as faixas na lista trilhasSonoras deste arquivo para ativar a música automática.";
} else {
    soundtrackPlayer.src = trilhasSonoras[0].arquivo;

    soundtrackPlayer.addEventListener("play", () => {
        document.querySelectorAll("audio").forEach((otherPlayer) => {
            if (otherPlayer !== soundtrackPlayer) {
                otherPlayer.pause();
            }
        });
    });

    soundtrackPlayer.play().then(() => {
        soundtrackStatus.textContent = "";
    }).catch((error) => {
        soundtrackStatus.textContent = "O navegador bloqueou a reprodução automática desta trilha.";
        console.error("Não foi possível iniciar a trilha sonora automaticamente.", error);
    });
}
