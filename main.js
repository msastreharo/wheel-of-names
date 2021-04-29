let names = ["Alisa", "Amanda", "Ana García", "Ana Lissette", "Angie", "Clau", "Daniela R.", "Daniela T.", "Eliana", "Flo", "Gaby", "Leo", "Inga", "Pepi", "María Laura", "Marta", "Nicole", "Olga", "Yeraldin", "Ranju", "Rosangely", "Sònia", "Taiza", "Yasmín"];

let spinner = document.getElementById("spin");

function randomize() {
    let randomName = names[Math.floor(Math.random()*names.length)];
    console.log(randomName);
}

spinner.addEventListener("click", randomize);