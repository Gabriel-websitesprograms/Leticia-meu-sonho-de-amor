// Adicione faixas no formato { titulo: "Nome", arquivo: "trilhas-sonoras/arquivo.mp3" }.
const trilhasSonoras = [];
const soundtrackSection = document.createElement("section");
const soundtrackTitle = document.createElement("h2");
const soundtrackStatus = document.createElement("p");
const soundtrackPlayer = document.createElement("audio");

soundtrackSection.className = "soundtrack-player";
soundtrackSection.style.cssText = "width:min(800px,100%);margin:24px auto;padding:18px;border:1px solid #c9a85b;border-radius:14px;background:linear-gradient(150deg,#230a11,#0d090b);color:#f3e8d0;text-align:center";
soundtrackTitle.textContent = "Trilha sonora de The Vampire Diaries";
soundtrackTitle.style.cssText = "margin:0 0 10px;color:#e8cf91";
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
