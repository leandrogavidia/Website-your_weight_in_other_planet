const gMercury = 3.7;
const gVenus = 8.87;
const gEarth = 9.807;
const gMars = 3.721;
const gJupiter = 24.79;
const gSaturn = 10.44;
const gUranus = 8.87;
const gNeptune = 11.15;
const gPK = 98.07;

let container = document.getElementById("containerResult");
let button = document.getElementById("eventButton");

function yourWeightInOhterPlanet() {
    let userWeight = parseFloat(prompt("Hi!, what is your weight?"));

    let planet = parseInt(prompt("I want to know how much weight in...\n\n 1.- Mercury\n 2.- Venus\n 3.- Earth\n 4.- Mars\n 5.- Jupiter\n 6.- Saturn\n 7.- Uranus\n 8.- Neptune")); 

    if(planet == 1) {
        let weightResult = userWeight * gMercury / gEarth;
        weightResult = parseFloat(weightResult);
        weightResult = weightResult.toFixed(2);
        container.innerHTML = `<p><strong>Your weight on Mercury is:</strong> ${weightResult} kilos, amazing! 😲</p>\n<h3>Thank you very much for trusting in us ♥</h3>`;
    }
    else if(planet == 2){
        let weightResult = userWeight * gVenus / gEarth;
        weightResult = weightResult.toFixed(2);
        container.innerHTML = `<p><strong>Your weight on Venus is:</strong> ${weightResult} kilos, amazing! 😲</p>\n<h3>Thank you very much for trusting in us ♥</h3>`;
    }
    else if(planet == 3){
        let weightResult = userWeight * gEarth / gEarth;
        weightResult = weightResult.toFixed(2);
        container.innerHTML = `<p><strong>Your weight on the Earth is:</strong> ${weightResult} kilos, amazing! 😲</p>\n<h3>Thank you very much for trusting in us ♥</h3>`;
    }
    else if(planet == 4){
        let weightResult = userWeight * gMars / gEarth;
        weightResult = weightResult.toFixed(2);
        container.innerHTML = `<p><strong>Your weight on Mars is:</strong> ${weightResult} kilos, amazing! 😲</p>\n<h3>Thank you very much for trusting in us ♥</h3>`;
    }
    else if(planet == 5){
        let weightResult = userWeight * gJupiter / gEarth;
        weightResult = weightResult.toFixed(2);
        container.innerHTML = `<p><strong>Your weight on Jupiter is:</strong> ${weightResult} kilos, amazing! 😲</p>\n<h3>Thank you very much for trusting in us ♥</h3>`;
    }
    else if(planet == 6){
        let weightResult = userWeight * gSaturn / gEarth;
        weightResult = weightResult.toFixed(2);
        container.innerHTML = `<p><strong>Your weight on Saturn is:</strong> ${weightResult} kilos, amazing! 😲</p>\n<h3>Thank you very much for trusting in us ♥</h3>`;
    }
    else if(planet == 7){
        let weightResult = userWeight * gUranus / gEarth;
        weightResult = weightResult.toFixed(2);
        container.innerHTML = `<p><strong>Your weight on Uranus is:</strong> ${weightResult} kilos, amazing! 😲</p>\n<h3>Thank you very much for trusting in us ♥</h3>`;
    }
    else if(planet == 8){
        let weightResult = userWeight * gNeptune / gEarth;
        weightResult = weightResult.toFixed(2);
        container.innerHTML = `<p><strong>Your weight on Neptune is:</strong> ${weightResult} kilos, amazing! 😲</p>\n<h3>Thank you very much for trusting in us ♥</h3>`;
    }
    else {
        let weightResult = userWeight * gPK / gEarth;
        weightResult = weightResult.toFixed(2);
        container.innerHTML = `<p><strong>Your weight on the Kaio-sama planet is:</strong> ${weightResult} kilos, amazing! 😲</p>\n<h3>This answer is result of a error. Please you enter a value correct from 1 to 8.</h3>`;
    } 
}

button.addEventListener("click", yourWeightInOhterPlanet);
