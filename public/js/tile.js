
document.addEventListener("DOMContentLoaded", () => {
  const tiles = document.querySelectorAll(".tile");

  // Dodawanie klasy z opóźnieniem dla każdego kafelka
  tiles.forEach((tile, index) => {
    setTimeout(() => {
      tile.classList.add("active");
    }, index * 200); // Opóźnienie dla każdego kafelka (200ms)
  });
});


