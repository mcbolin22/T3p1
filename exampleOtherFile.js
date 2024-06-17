// import syntax works for React, needs different tweaks for vanilla JS
// import {logTheTeam as originalLogger} from './script.js';

logTheTeam();
// originalLogger();

console.log(person.name);

// let data = fetch("./jsonExample.json").then(data => {return data});

// console.log(data);

let exampleJSON = {
    
        "name": "Colin",
        "favouriteFood": ["Pizza", "Tacos", "Chips"]
    
}

/*
1. JSON.parse to convert JSON string to JS object
2. modify the object however you want
3. Save the JSon as a JSON string using JSON.stringify

*/


let jsonString = JSON.stringify(exampleJSON);

console.log(JSON.stringify(exampleJSON));

let processedJSON = JSON.parse(exampleJSON);

console.log(processedJSON);
processedJSON.name = "Batman";

console.log(JSON.stringify(processedJSON));