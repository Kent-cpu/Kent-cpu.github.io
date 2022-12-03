document.querySelectorAll(".drum").forEach((button, index) => {
    const listSounds = ["crash", "snare", "kick-bass", "tom-1", "tom-2", "tom-3", "tom-4"];
    button.addEventListener("click", () => {
        new Audio(`sounds/${listSounds[index]}.mp3`).play();
    });
})