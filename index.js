// function Login() {

//     const username = "kendrick2424";
//     const password = "123456";


// const FullName = prompt("Enter your name:");
// const User_Pswd = prompt("Enter the user password");
// const User_Uid = prompt("Enter your user name ");

// if (username === User_Uid && User_Pswd === password) {
//     alert(`welcome ${FullName}, Access granted.`);
    
// } else {
//     alert(`sorry ${FullName}! Access denied.`);
    
// }
    
// }



function Login() {
    const full_name = prompt("enter your name");
    const best_food = prompt("what is your best food");

    switch (best_food) {
        case "chicken":
            alert(`${full_name}, your best food is ${best_food}.`)
            
            break;
            case `rice`:
              alert(`${full_name}, your best food is ${best_food}.`)
                break;
                case`yam`:
                alert(`${full_name}, your best food is ${best_food}`)
                break;   
        default:
       alert("hmmm... really!");
    }
    
}

function show() {

  
}



function DRINKS() {

    const full_name = prompt("enter your name");
    const best_drinks = prompt("what is your best drink");

    switch (best_drinks) {
        case "malt":
            alert(`${full_name}, your best drink is ${best_drinks}.`)
            
            break;
            case `fanta`:
              alert(`${full_name}, your best drink is ${best_drinks}.`)
                break;
                case`smoove`:
                alert(`${full_name}, your best drink is ${best_drinks}`)
                break;
                case`sprite`:
                alert(`${full_name}, your best drink is ${best_drinks}`)  
                break;
                case`juicy`:
                alert(`${full_name}, your best drink is ${best_drinks}`)   
                break;
                case`4 cousins`:
                alert(`${full_name}, your best drink is ${best_drinks}`)    
        default:
       alert("hmmm... really!");
    }

    
}


function cars() {
    const full_name = prompt("enter your name");
    const best_cars = prompt("what is your best car");


    switch (best_cars) {
        case "lexus":
            alert(`${full_name}, your best car is ${best_cars}.`)
            
            break;
            case `benz`:
              alert(`${full_name}, your best car is ${best_cars}.`)
                break;
                case`Tundra`:
                alert(`${full_name}, your best car is ${best_cars}`)
                break;
                case`venza`:
                alert(`${full_name}, your best car is ${best_cars}`)  
                break;
                case`spider-camry`:
                alert(`${full_name}, your best car is ${best_cars}`)   
                break;
                case`bugatti`:
                alert(`${full_name}, your best car is ${best_cars}`)    
        default:
       alert("ohhh... really!");
    }


    
}

function catie() {
    const lasName = prompt('enter your last name')
    const password = prompt('enter your password')

    switch (ship) {
        case cago:
            alerta(`${lasName}, `)
            
            break;
    
        default:
            break;
    }
    
}

const displaydemo = document.getElementById('demo')
const displaycareer = document.getElementById('career')

displaydemo.innerHTML = 'ken'
displaycareer.innerHTML = 'dropshipper'





const displaybike = document.getElementById("bike")
 displaybike.innerHTML = "ship"

 const displatoro = document.getElementById('toron')
 displatoro.innerHTML = ('china, japan,')





 // Variables
let a = 5;

// Data Types
let str = "Hello";
let num = 10;
let bool = true;
let arr = [1, 2, 3];
console.log(bool);

// Operators
let result = num * 2;

// Control Flow
if (result > 10) {
    console.log("Result is greater than 10");
} else {
    console.log("Result is 10 or less");
}


// Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Function Expression
function greetFunc(name) {
    return "Hello, " + name + "!";
}
    

// Using Functions
console.log(greet("John"));
console.log(greetFunc("Alice"));

