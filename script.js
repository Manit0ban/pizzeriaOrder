// Program Title


// Event Listener
document.getElementById("btn").addEventListener("click", showOrder);

// Event Function
function showOrder() {
    document.getElementById("size-in");


// IN

let size = document.getElementById("size-in").value;
let topping1 = document.getElementById("1-in").value;
let topping2 = document.getElementById("2-in").value;

// PRO
let order = `Your ${size.toLowerCase()} pizza with ${topping1.toLowerCase()} and ${topping2.toLowerCase()} will be ready in 20 minutes.`;
let item1 = `- ${topping1.toLowerCase()}`;
let item2 = `- ${topping2.toLowerCase()}`;
let message = `Thank you for ordering from <a href="https://www.pizza73.com/store/1/delivery" target = "_blank">Pizza 73!</a> Your pizza will be ready in 20 minutes.`;

// OUT

document.getElementById("item-1-out").innerHTML = item1;
document.getElementById("item-2-out").innerHTML = item2;
document.getElementById("out-message").innerHTML = message;
document.getElementById("pizza-img").innerHTML = `<img width="300px" id="bot-pic" src="images/pizzeriapizza.png">`;



console.log(order);
}