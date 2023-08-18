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



// This ONLY deals with the user clicking 
function mineCheese() {
    // console.log('clicking the button');✅
    cheese++
    mineWAxe()



    let totalCheeseElem = document.getElementById('totalCheese')
    totalCheeseElem.innerHTML = cheese.toString()
}

// Buys axe
function addAxe() {
    // find axe ✅ADDING UPS BI
    // increase qty✅
    // write qty of axes to DOM✅
    let axe = clickUps.find(axe => axe.name == 'pickaxe')

    let totalAxesElem = document.getElementById('totalAxes')
    // verify there is enough cheese to purchase the axe
    if (cheese >= axe.price) {
        // subtract price from cheese
        cheese = cheese - axe.price
        axe.quantity++
        totalAxesElem.innerHTML = axe.quantity.toString()
    }

    // console.log('adding pickaxe', axe)
}



// if (hero.money >= 150 && dog.isPurchased != true) {
//     // subtract the money
//     hero.money = hero.money - 150
//     // flip the bool on the object
//     dog.isPurchased = true



// Apply (calculate) how much cheese you are getting per click when you have the axe

function mineWAxe() { // function to calculate points due to axes only
    let axe = clickUps.find(clickName => clickName.name == 'pickaxe')
    // console.log('this should be my axe', axe);
    let axePoints = axe.quantity * axe.modifier
    // console.log('this is axepoints', axePoints);

    // TODO we need to add axePoints to our total cheese
    clickCheese = + axePoints
    cheese = clickCheese + cheese
    console.log('this is my click cheese points', clickCheese)
    console.log('this is my cheese', cheese)

}






// Extra objects for Array if I want
// {
    //     name: 'knife',
    //     price: 25,
//     quantity: 0,
//     modifier: 1
// },
// {
//     name: 'space station',
//     price: 2000,
//     quantity: 0,
//     modifier: 40
// }