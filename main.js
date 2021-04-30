const names = ["Alisa", "Amanda", "Ana García", "Ana Lissette", "Angie", "Clau", "Daniela R.", "Daniela T.", "Eliana", "Flo", "Gaby", "Leo", "Inga", "Pepi", "María Laura", "Marta", "Nicole", "Olga", "Yeraldin", "Ranju", "Rosangely", "Sònia", "Taiza", "Yasmín"];
let remainingNames = names;

let spinner = document.getElementById("spin");

function showRandomName() {
    let randomName = remainingNames[Math.floor(Math.random()*remainingNames.length)];

    let chosenPerson = document.getElementById("chosenName");
    chosenPerson.innerHTML = randomName;

    let deletedPerson = remainingNames.indexOf(randomName);
    let deleted = remainingNames.splice(deletedPerson, 1);

    if (remainingNames.length === 0) {
        remainingNames = names;
    }


}

spinner.addEventListener("click", showRandomName);

