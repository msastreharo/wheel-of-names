let names = ["Alisa", "Amanda", "Ana García", "Ana Lissette", "Angie", "Clau", "Daniela R.", "Daniela T.", "Eliana", "Flo", "Gaby", "Leo", "Inga", "Pepi", "María Laura", "Marta", "Nicole", "Olga", "Yeraldin", "Ranju", "Rosangely", "Sònia", "Taiza", "Yasmín"];
let namesAlreadyPicked = [];

const spinnerBtn = document.getElementById("spin");
spinnerBtn.addEventListener("click", showRandomName);

const namePickedDiv = document.getElementById("namePicked");
const listOfNames = document.getElementById("listOfNames")

function showRandomName() {
    let randomName = names[Math.floor(Math.random()*names.length)];
    namePickedDiv.innerHTML = randomName;
    namesAlreadyPicked.push(randomName);
    displayChosen();
    deleteChosenFromArray(randomName);
    if (names.length === 0) {
        restart();
    }
}

function displayChosen() {
   listOfNames.innerText = namesAlreadyPicked.join(", ");
}

function deleteChosenFromArray(randomName) {
    names.splice(names.indexOf(randomName), 1);
}

function restart() {
    names = [...namesAlreadyPicked];
    // console.log(names === namesAlreadyPicked);
    namesAlreadyPicked = [];
}


