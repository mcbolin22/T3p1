function exampleStuff(){

let exampleEmptyVariable = null;
let exampleEmptyVarviable = undefined;

console.log(exampleEmptyVariable, exampleEmptyVarviable);

let message = 'Hello from the script file!';

console.log(message);

// no keyword = declared with var
world = "earth"

console.log(`Hello ${world}, I am Colin!`);

console.log('Hello ' + world + ', I am Colin!');

// let world = "mars";

// console.log(`Hello ${world}, I am Colin`);

// {
    

//     console.log(`Hello ${world}, I am Colin!`);

//     // let world = "mars";

//     // console.log(`Hello ${world}, I am Colin!`);
// }



// List in python is Array in JS

let favouriteFruits = [
    'apple', 
    'banana', 
    'orange', 
    'kiwi'
];

console.log(favouriteFruits[3]);

console.log("The class' favourite fruits are: " + favouriteFruits);

favouriteFruits.forEach(fruit => {

    console.log("Someone in the class loves " + fruit);
});

for (fruitIndex in favouriteFruits) {
    console.log("Someone in the class loves " + favouriteFruits[fruitIndex]);
}

console.log(Array.isArray(favouriteFruits));

// Array.prototype.sort()
let sortedFruits = favouriteFruits.sort();

console.log(sortedFruits);

let someNewArray = new Array(10);

someNewArray.push("mango");

console.log(someNewArray);

// Dictionary in python is Object in JS

let colin = {
    name: "Colin",
    codingLanguages: ["JavaScript", "Python"],
    hobbies: [
        {
            name: "Sailing",
            skill: 10,

        },
        {
            name: "Hiking",
            favouriteArea: ["Wollemi National Park", "Buddawangs"],
            skill: 9000,
        }
    ],
};

colin.hobbies[1].favouriteArea[0] = "Blue Mountains";

console.log(colin);
 /**
  * Description Placeholder
  * @date 2021-06-23
  * @author Me
  * 
  */

let weather = "sunny";

switch (weather) {
    case "sunny":
        console.log("It is sunny today!");
        break;
    case "rainy":
        console.log("It is raining today!");
        break;
    default:
        console.log("It is neither sunny nor raining today!");
        break;
}

if (weather == "rainy") {


}
else if (weather == "sunny") {

}
}

let pokemonTeam = [
    "pikachu",
    "charmander",
    "bulbasaur",
    "squirtle",
];

function logTheTeam() {
    sortedTeam = pokemonTeam.sort();

    sortedTeam.forEach((pokemon, arrayIndex) => {
        console.log(pokemon + " is in position " + arrayIndex);
    });
    
    // forOF loop
    // console.log(pokemonTeam.entries());
    for (const [index, pokemon] of sortedTeam.entries()) {
        console.log(`${pokemon} is in position ${index}`);
        
    }

    let [firstPokemon, ...otherPokemon] = sortedTeam;

    console.log(firstPokemon);
    console.log(otherPokemon);


    // while(true){
    //     console.log("I am in an infinite loop!");
    // }

    // while(sortedTeam.length) {
    //     console.log(sortedTeam.pop());
    // }

    do{
        console.log(sortedTeam.pop());
    } while(sortedTeam.length);

    sortedTeam.push("pidgey");

    for (let index = 0; index < sortedTeam.length; index++) {
        console.log("Pokemon at index " + index + " is " + sortedTeam[index])  
    }

    // for (const pokemon of sortedTeam) {
    //     console.log(pokemon);
        
    // }
}

// logTheTeam();

const logTheTeamAlt = (targetSize = 4) => {
    // double = checks value
    // type coercion happens where possible automatically
    if (pokemonTeam.length == targetSize) {
        console.log("There are only " + targetSize + " pokemon in the team!");
    }

    // triple = checks value and type
    if (pokemonTeam.length === targetSize) {
        console.log("There are only " + targetSize + " pokemon in the team! This is from the strict equals comparison");
    }
}

logTheTeamAlt();
logTheTeamAlt(2);
