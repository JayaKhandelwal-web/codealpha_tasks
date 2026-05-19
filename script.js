import cloth from "./our_product.js"; // Fixed path

console.log(cloth);

let shirt = document.getElementById('cloth');
console.log(shirt);

// Render product cards
shirt.innerHTML = cloth.map((e) => {
    return `
    <div style="height: 300px; width: 340px; border: 3px solid black; margin: 20px">
        <p>DESC: ${e.desc}</p>
        <img src="${e.img}" images/luxury.jpg alt="img" style="max-width: 100%; height: auto;">
        <h3>PRICE: ${e.price}</h3>
        <button onclick="ADDPRICE(${e.price})">Add</button>
        <button onclick="SUBPRICE(${e.price})">Remove</button>
    </div>
    `;
}).join("");

let price = 0;
let cart = document.getElementById("cart");

window.ADDPRICE = (p) => {
    price += p;
    updateCart();
};

window.SUBPRICE = (p) => {
    price -= p;
    updateCart();
};


//function updateCart() {
  //  if (price <= 0) {
    //    price = 0;
      //  cart.innerHTML = "<h1>Empty cart</h1>";
    //} else {
      //  cart.innerHTML = `<h1>Total: ${price}</h1>`;
    //}
//}
function updateCart() {
    if (price <= 0) {
        price = 0;
        cart.innerHTML = `<h1 style="color: red; font-size: 24px; text-align: center;">Empty cart</h1>`;
    } else {
        cart.innerHTML = `<h1 style="color: green; font-size: 24px; text-align: center;">Total: ₹${price}</h1>`;
    }
}
