const names = ["Alisa", "Amanda", "Ana García", "Ana Lissette", "Angie", "Clau", "Daniela R.", "Daniela T.", "Eliana", "Flo", "Gaby", "Leo", "Inga", "Pepi", "María Laura", "Marta", "Nicole", "Olga", "Yeraldin", "Ranju", "Rosangely", "Sònia", "Taiza", "Yasmín"];
let namesAlreadyPicked = [];

const spinnerBtn = document.getElementById("spin");
spinnerBtn.addEventListener("click", showRandomName);

const namePickedDiv = document.getElementById("namePicked");
const listOfNames = document.getElementById("listOfNames")

function showRandomName() {
    let randomName = names[Math.floor(Math.random()*names.length)];
    namePickedDiv.innerHTML = randomName;
    namesAlreadyPicked.push(randomName);
    displayChosen(randomName);
    deleteChosenFromArray(randomName);
}

function displayChosen(randomName) {
   listOfNames.innerText = namesAlreadyPicked;
}

function deleteChosenFromArray(randomName) {
    console.log(names);
    //console.log(names.indexOf(randomName));
    if (namesAlreadyPicked[i] == names[randomName]) {
        names.splice(names.indexOf(randomName), 1);
    }

}

/* let deletedPerson = remainingNames.indexOf(randomName);
let deleted = remainingNames.splice(deletedPerson, 1);

if (remainingNames.length === 0) {
    remainingNames = names;
}
*/
