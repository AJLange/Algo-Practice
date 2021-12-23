function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza= {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var mypizza = pizzaOven("deep dish", "traditional",  ["mozzarella"], ["pepperoni", "sausage"]);
console.log(mypizza);

var yourpizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(yourpizza);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function randomPizza(){

var crusts = ["deep dish", "hand tossed", "stuffed crust"];
var sauces = ["marinara", "pesto", "garlic sauce", "traditional", "barbecque"];
var cheeses = ["mozzarella", "provolone", "3-cheese", "feta"];
var toppings = ["mushrooms", "pepperoni", "onions", "green peppers", "sausage", "chicken", "olives", "spinach", "fresh tomatoes"];

var randCrust = crusts[getRandomInt(3)];
var randSauce = sauces[getRandomInt(5)];
var randCheese = cheeses[getRandomInt(4)];
//let's say we can have up to 4 toppings
var randList = getRandomInt(4);
var randToppings = [];

for(var i = 0; i < randList; i++){
    randToppings[i] = toppings[getRandomInt(toppings.length)];
}

var pizza = pizzaOven(randCrust, randSauce, randCheese, randToppings);

return pizza;
}

var randPizza = randomPizza();
console.log(randPizza);