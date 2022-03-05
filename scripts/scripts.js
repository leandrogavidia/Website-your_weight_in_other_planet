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

    const inputWeight = document.getElementById("weight");
    const inputPlanet = document.getElementById("planet");

    let userWeight = parseFloat(inputWeight.value);
    let planet = inputPlanet.value; 

    let weightResult;

    switch(true) { 

        case planet == "mercury" && userWeight > 0:
            weightResult = userWeight * gMercury / gEarth;
            weightResult = parseFloat(weightResult);
            weightResult = weightResult.toFixed(2);
            container.innerHTML = `<p><strong>Your weight on Mercury is:</strong> ${weightResult} kilos, amazing! 😲</p>\n<h3>Thank you very much for trusting in us ♥</h3>`;
            break;

        case planet == "venus" && userWeight > 0:
            weightResult = userWeight * gVenus / gEarth;
            weightResult = weightResult.toFixed(2);
            container.innerHTML = `<p><strong>Your weight on Venus is:</strong> ${weightResult} kilos, amazing! 😲</p>\n<h3>Thank you very much for trusting in us ♥</h3>`;
            break;

        case planet == "earth" && userWeight > 0:
            weightResult = userWeight * gEarth / gEarth;
            weightResult = weightResult.toFixed(2);
            container.innerHTML = `<p><strong>Your weight on the Earth is:</strong> ${weightResult} kilos, amazing! 😲</p>\n<h3>Thank you very much for trusting in us ♥</h3>`;
            break;

        case planet == "mars" && userWeight > 0:
            weightResult = userWeight * gMars / gEarth;
            weightResult = weightResult.toFixed(2);
            container.innerHTML = `<p><strong>Your weight on Mars is:</strong> ${weightResult} kilos, amazing! 😲</p>\n<h3>Thank you very much for trusting in us ♥</h3>`;
            break;

        case planet == "jupiter" && userWeight > 0:
            weightResult = userWeight * gJupiter / gEarth;
            weightResult = weightResult.toFixed(2);
            container.innerHTML = `<p><strong>Your weight on Jupiter is:</strong> ${weightResult} kilos, amazing! 😲</p>\n<h3>Thank you very much for trusting in us ♥</h3>`;
            break;

        case planet == "saturn" && userWeight > 0:
            weightResult = userWeight * gSaturn / gEarth;
            weightResult = weightResult.toFixed(2);
            container.innerHTML = `<p><strong>Your weight on Saturn is:</strong> ${weightResult} kilos, amazing! 😲</p>\n<h3>Thank you very much for trusting in us ♥</h3>`;
            break;

        case planet == "uranus" && userWeight > 0:
            weightResult = userWeight * gUranus / gEarth;
            weightResult = weightResult.toFixed(2);
            container.innerHTML = `<p><strong>Your weight on Uranus is:</strong> ${weightResult} kilos, amazing! 😲</p>\n<h3>Thank you very much for trusting in us ♥</h3>`;
            break;

        case planet == "neptune" && userWeight > 0:
            weightResult = userWeight * gNeptune / gEarth;
            weightResult = weightResult.toFixed(2);
            container.innerHTML = `<p><strong>Your weight on Neptune is:</strong> ${weightResult} kilos, amazing! 😲</p>\n<h3>Thank you very much for trusting in us ♥</h3>`;
            break;

        case planet == "kaiosama" && userWeight > 0:
            weightResult = userWeight * gPK / gEarth;
            weightResult = weightResult.toFixed(2);
            container.innerHTML = `<p><strong>Your weight on the Kaio-sama planet is:</strong> ${weightResult} kilos, amazing! 😲</p>\n<h3>Thank you very much for trusting in us ♥</h3>`;
            break;    

        default:
            container.innerHTML = `<p><strong>Please, enter a value greater than 0 in your weight.</h3>`;
    
    }
    // if(planet == 1) {
        
    // }
    // else if(planet == 2){
    //     ;
    // }
    // else if(planet == 3){
    //     let 
    // }
    // else if(planet == 4){
    //     let 
    // }
    // else if(planet == 5){
    //     let 
    // }
    // else if(planet == 6){
    //     let 
    // }
    // else if(planet == 7){
    //     let 
    // }
    // else if(planet == 8){
    //     let 
    // }
    // else {
    //     let } 
}

button.addEventListener("click", yourWeightInOhterPlanet);
