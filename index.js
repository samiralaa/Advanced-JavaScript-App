const age = 19;
let countries = ["USA", "Canada", "Mexico", 'Gaza'];
const name = "samir";
let discount = true;
let discountPrice = 10;
let totalPrice = 100;

// First case: Age <= 18 and from USA
if (discount === true && age <= 18 && countries[0] === "USA") {
    console.log(`Your discount is ${discountPrice}`);
    console.log(`Your total price is ${totalPrice - discountPrice}`);
    console.log(`Your total price is ${totalPrice - discountPrice}`);
    console.log(`Sum of age and total price is: ${age + totalPrice}`);
}
// Second case: Age > 18 and from Canada
else if (discount === true && age > 18 && countries[1] === "Canada") {
    // Check if name matches (not if it's a boolean)
    if (name === "samir") {
        console.log(`Your discount is for ${name}: ${discountPrice}`);
        console.log(`Your total price is ${totalPrice - discountPrice}`);
        console.log(`Sum of age and total price is: ${age + totalPrice}`);
    } else {
        console.log(`Your discount is ${discountPrice}`);
        console.log(`Your total price is ${totalPrice - discountPrice}`);
        console.log(`Sum of age and total price is: ${age + totalPrice}`);
    }
}
// Default case: No discount
else {
    console.log('You don’t have any discount');
}

document.getElementById('age').innerHTML = age;

let price = 5;

switch (price) {
    case 1:
        price = 10;
        break;
    case 2:
        price = 20;
        break;
    default:
        price = 30;
}


document.getElementById('day').innerHTML = 'to day is ' + price;

let role = 'admin'

switch (role) {
    case "admin":
        console.log("You are an admin");
        break;
    case "user":
        console.log("You are a user");
        break;
        default:
            console.log("You are not an admin or a user");

}
