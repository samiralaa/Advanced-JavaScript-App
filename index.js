const age = 19;
const name = "samir";
let discount = true;
let discountPrice = 10;
let totalPrice = 100;



if (discount === false) {
    console.log('your discount is' + ' ' + discountPrice)
    console.log('your total price is' + ' ' + (totalPrice - discountPrice))
    console.log(`Your total price is ${totalPrice - discountPrice}`);
    console.log(`${age + totalPrice}`)

} else {
    console.log('your Dont have any discount')
}
