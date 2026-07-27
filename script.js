// create a guess the number game - V1

// user input
//declare random num function
//check with random number
// if match found than correct/win else try again

const userInput = Number(prompt("Enter a number b/w 1-10: ")); // user input
const RandomNum = (randomNum(1,10));  // declared var to store random number


//check number b/w user and random number
function checkNum(){
    if(userInput === RandomNum){
        console.log("Win Win");
    }else{
        console.log("Try again");
    }
}
checkNum();

// generate a random number b/w 1-10;
function randomNum(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


