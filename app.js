let clickUps = [
    {
        name: 'pickaxe',
        price: 50,
        quantity: 0,
        modifier: 2
    },
    {
        name: 'drill',
        price: 100,
        quantity: 0,
        modifier: 3
    },
];

let autoUps = [
    {
        name: 'astronaut',
        price: 200,
        quantity: 0,
        modifier: 20
    },
    {
        name: 'rover',
        price: 600,
        quantity: 0,
        modifier: 30
    },

];



// PLAYER CLICKS number of clicks

let cheese = 0
let clickCheese = 0
let autoCheese = 0



// CLICKING THE MOON, MINING
// This ONLY deals with the user clicking 
function mineCheese() {
    cheese++
    mineWAxe()
    mineWDrill()
    mineWAstro()
    mineWRover()
    let totalCheeseElem = document.getElementById('totalCheese')
    totalCheeseElem.innerHTML = cheese.toString()
}

// BUY PICKAXE
function addAxe() {
    let axe = clickUps.find(axe => axe.name == 'pickaxe')
    let totalAxesElem = document.getElementById('totalAxes')
    // verify there is enough cheese to purchase the axe
    if (cheese >= axe.price) {
        // subtract price from cheese
        cheese = cheese - axe.price
        axe.quantity++
        totalAxesElem.innerHTML = axe.quantity.toString()
    }
    // update axePoints to DOM
    clickUps.find(axe => axe.name == 'pickaxe')
    let axesPoints = axe.quantity * axe.modifier
    let totalAxesPointsElem = document.getElementById('totalAxesPoints')
    totalAxesPointsElem.innerHTML = axesPoints.toString()
}

// BUY DRILL
function addDrill() {
    let drill = clickUps.find(drill => drill.name == 'drill')
    let totalDrillsElem = document.getElementById('totalDrills')
    // verify there is enough cheese to purchase the drill
    if (cheese >= drill.price) {
        // subtract price from cheese
        cheese = cheese - drill.price
        drill.quantity++
        totalDrillsElem.innerHTML = drill.quantity.toString()
    }
    // update axePoints to DOM
    clickUps.find(drill => drill.name == 'drill')
    let drillsPoints = drill.quantity * drill.modifier
    let totalDrillsPointsElem = document.getElementById('totalDrillsPoints')
    totalDrillsPointsElem.innerHTML = drillsPoints.toString()
}

// CALCULATE AXE POINTS/CHEESE
function mineWAxe() {
    let axe = clickUps.find(clickName => clickName.name == 'pickaxe')
    let axePoints = axe.quantity * axe.modifier
    // add axePoints to cheese
    clickCheese = + axePoints
    cheese = clickCheese + cheese
    let totalCheeseElem = document.getElementById('totalCheese');
    totalCheeseElem.innerHTML = cheese.toString();
}

function mineWDrill() {
    let drill = clickUps.find(clickName => clickName.name == 'drill')
    let drillPoints = drill.quantity * drill.modifier
    // add axePoints to cheese
    clickCheese = + drillPoints
    cheese = clickCheese + cheese
    let totalCheeseElem = document.getElementById('totalCheese');
    totalCheeseElem.innerHTML = cheese.toString();
    // update drillPoints to DOM
    let totalDrillsPointsElem = document.getElementById('totalDrillsPoints')
    totalDrillsPointsElem.innerHTML = drillPoints.toString()

}



// ADD/BUY ASTRONAUT FOR AUTO UPGRADES POINTS
function addAstro() {
    let astro = autoUps.find(astro => astro.name == 'astronaut')
    let totalAstrosElem = document.getElementById('totalAstros')
    // verify there is enough cheese to purchase the astronaut
    if (cheese >= astro.price) {
        // subtract price from cheese
        cheese = cheese - astro.price
        astro.quantity++
        totalAstrosElem.innerHTML = astro.quantity.toString()
    }
    // update axePoints to DOM
    autoUps.find(astro => astro.name == 'astronaut')
    let astrosPoints = astro.quantity * astro.modifier
    let totalAstrosPointsElem = document.getElementById('totalAstrosPoints')
    totalAstrosPointsElem.innerHTML = astrosPoints.toString()
}

// ADD/BUY ROVER FOR AUTO UPGRADES POINTS
function addRover() {
    let rover = autoUps.find(rover => rover.name == 'rover')
    let totalRoversElem = document.getElementById('totalRovers')
    // verify there is enough cheese to purchase the astronaut
    if (cheese >= rover.price) {
        // subtract price from cheese
        cheese = cheese - rover.price
        rover.quantity++
        totalRoversElem.innerHTML = rover.quantity.toString()
    }
    // update axePoints to DOM
    autoUps.find(rover => rover.name == 'rover')
    let roversPoints = rover.quantity * rover.modifier
    let totalRoversPointsElem = document.getElementById('totalRoversPoints')
    totalRoversPointsElem.innerHTML = roversPoints.toString()
}


// mining with INTERVAL AUTO UPGRADES
function mineWAstro() {
    let astro = autoUps.find(autoName => autoName.name == 'astronaut')
    let astrosPoints = astro.quantity * astro.modifier
    // add axePoints to cheese
    autoCheese = + astrosPoints
    cheese = autoCheese + cheese
    let totalCheeseElem = document.getElementById('totalCheese');
    totalCheeseElem.innerHTML = cheese.toString();
    // update astrosPoints to DOM
    let totalAstrosPointsElem = document.getElementById('totalAstrosPoints')
    totalAstrosPointsElem.innerHTML = astrosPoints.toString()

}


function mineWRover() {
    let rover = autoUps.find(autoName => autoName.name == 'rover')
    let roversPoints = rover.quantity * rover.modifier
    // add axePoints to cheese
    autoCheese = + roversPoints
    cheese = autoCheese + cheese
    let totalCheeseElem = document.getElementById('totalCheese');
    totalCheeseElem.innerHTML = cheese.toString();
    // update roversPoints to DOM
    let totalRoversPointsElem = document.getElementById('totalRoversPoints')
    totalRoversPointsElem.innerHTML = roversPoints.toString()
}

// RESET GAME BUTTON
function resetGame() {
    // reset cheeses to zero 
    let cheese = 0
    let clickCheese = 0
    let autoCheese = 0
    // reset array quantities
    for (let clickUp of clickUps) {
        clickUp.quantity = 0
    }
    for (let autoUp of autoUps) {
        autoUp.quantity = 0
    }

    // write to DOM 
    let totalCheeseElem = document.getElementById('totalCheese')
    totalCheeseElem.innerHTML = cheese.toString()
    let totalAxesElem = document.getElementById('totalAxes')
    totalAxesElem.innerHTML = '0'
    let totalDrillsElem = document.getElementById('totalDrills')
    totalDrillsElem.innerHTML = '0'
    let totalAstrosElem = document.getElementById('totalAstros')
    totalAstrosElem.innerHTML = '0'
    let totalRoversElem = document.getElementById('totalRovers')
    totalRoversElem.innerHTML = '0'
    let totalAxesPointsElem = document.getElementById('totalAxesPoints')
    totalAxesPointsElem.innerHTML = '0'
    let totalDrillsPointsElem = document.getElementById('totalDrillsPoints')
    totalDrillsPointsElem.innerHTML = '0'
    let totalAstrosPointsElem = document.getElementById('totalAstrosPoints')
    totalAstrosPointsElem.innerHTML = '0'
    let totalRoversPointsElem = document.getElementById('totalRoversPoints')
    totalRoversPointsElem.innerHTML = '0'


}
// AUDIO SOUNDS
function playPop() {
    const pop = document.getElementById('pop');
    pop.play();
}

let button = document.getElementById('popSound'); // Replace with your button's id
button.addEventListener('click', playPop);


// INTERVAL FUNCTIONS
setInterval(mineWAstro, 3000)
setInterval(mineWRover, 3000)
