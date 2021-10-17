
function latteTotal() {
  const price = 4.50;
  const salesTaxRate = .10;
  const totalAmount = price + (price * salesTaxRate);
  console.log("The total is $" + totalAmount);
}
function calculateTotal(price, salesTaxRate) {
  const totalAmount = price + (price * salesTaxRate);
  console.log("The total is $" + totalAmount);
}
function calculateTotal(price, salesTaxRate) {
  const totalAmount = price + (price * salesTaxRate);
  console.log("The total is $" + totalAmount);
}

calculateTotal(4.50, .10);

function calculateTotal(price, salesTaxRate) {
  return (price + (price * salesTaxRate));
}
const total = calculateTotal(4.5, 10);

const brother = "Phillip";

function sayHello() {
   console.log("Hello " + brother);
}

sayHello();   // brother can be accessed here

console.log(brother);   // and brother can be accessed here

function sayHello() {
    const brother = "Phillip";
    console.log("Hello " + brother);
 };
 
 sayHello();   // brother would be logged here...
 
 console.log(brother);   // but it can’t be accessed on its own here.