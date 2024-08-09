const divChar = document.querySelector(".divChar");
const divCharImg = document.querySelector(".divCharImg");
const divCharInfo = document.querySelector(".divCharInfo");

function generateChar() {
  // 826 = total de personagens
  const apiURL =
    "https://rickandmortyapi.com/api/character/" + randomNumber(1, 826);
  fetch(apiURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Requisiton error");
      }
      return response.json();
    })
    .then((character) => {
      divChar.style.display = "flex";

      divCharImg.innerHTML = `<img src = ${character.image} alt="${character.name}"/>`;

      divCharInfo.innerHTML = `
        <h2>${character.name}</h2>
        <h4>Species: </h4> 
        <p>${character.species}</p>
        <h4>Origin: </h4>
        <p>${character.origin.name}</p>
        <h4>Status: </h4>
        <p>${character.status}</p>`;
    });
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
