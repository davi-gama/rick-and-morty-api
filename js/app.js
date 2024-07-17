const divChar = document.querySelector(".divChar");
const divCharImg = document.querySelector(".divCharImg");
const divCharInfo = document.querySelector(".divCharInfo");

function generateChar() {
  const characterTotal = 826;
  const randomNumber = Math.floor(Math.random() * characterTotal);
  const apiURL = "https://rickandmortyapi.com/api/character/" + randomNumber;

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
