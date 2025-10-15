window.addEventListener("load", () => {
  const title = document.querySelector(".title");
  const subtitle = document.querySelector(".subtitle");
  const line = document.getElementById("line");
  const content = document.getElementById("content");
  const body = document.body;

  // Animazione finale: Alessandro e Space verso posizione alta
  setTimeout(() => {
    // Stop rainbow
    subtitle.style.animation = "none";

    // Muovi testi
    title.classList.add("move-title");
    subtitle.classList.add("move-subtitle");

    // Sfondo diventa chiaro
    body.style.backgroundColor = "#f8f8f8";

    // Mostra linea con animazione
    setTimeout(() => {
      line.style.width = "100%";
    }, 700);

  }, 4000);

  // Mostra contenuto dopo 5.5s
  setTimeout(() => {
    content.style.display = "block";
    document.body.style.overflow = "auto";
  }, 5500);
});
