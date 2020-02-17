var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemObject = { itemName:`${item}`, itemPrice: Math.floor(Math.random()*100) };
 cart.push(itemObject);
 return itemObject.itemName + " has been added to your cart.";
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
  else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  else if (cart.length === 2) {
    var string = "In your cart, you have "
        for (var i = 0; i < cart.length; i++){
          if (i === 0){
             string += `${cart[i].itemName} at $${cart[i].itemPrice}, and `
           } else {
                string += `${cart[i].itemName} at $${cart[i].itemPrice}.`
           }
        }
        return string
    }

}


function total() {
  // write your code here
  var total = 0;
  for ()
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
