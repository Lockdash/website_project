//setting variables for the page elements

var viewCartButton = document.getElementById("view-cart-button");
var cartModal = document.getElementById("cart-modal");
var cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

//general function for all messages
function showMessage(message) {
  alert(message);
}

//event handler for the view cart button

viewCartButton.addEventListener("click", function() {
 openCartModal();
 displayCartItems();
});

//function to view the cart window by changing its properties
function openCartModal() {
 cartModal.style.display = "block";
}

//function to display items
function displayCartItems() {
 var cartList = document.getElementById("cart-items");
 cartList.innerHTML = "";
 if (cartItems && cartItems.length > 0) {
 for (var i = 0; i < cartItems.length; i++) {
 var listItem = document.createElement("li");
 listItem.textContent = cartItems[i];
 cartList.appendChild(listItem);
 }
 }
}

//Get the handle.
var closeCartButton = document.getElementById("close-cart-modal");
//Function to close the modal by changing CSS property.
function closeCartModal() {
 cartModal.style.display = "none";
}
//Attach event listener to trigger closeCartModal().

closeCartButton.onclick = function() {
 closeCartModal();
}

//setting variable for the adding button
var addToCartButtons = document.querySelectorAll(".order_button");

//making function for the adding button
addToCartButtons.forEach(function(button) {
 button.addEventListener("click", function() {
 var itemName = this.getAttribute("data-item");
 addToCart(itemName);
 });
});

//defining addtocart function
function addToCart(itemName) {
 cartItems.push(itemName);
 sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
 showMessage("Item added to the cart: " + itemName);
}

//clearing cart 

//event listener for the "clear cart" button.
var clearCartButton = document.getElementById("clear-cart-button");
clearCartButton.addEventListener("click", function () {
 cartItems = [];
 sessionStorage.removeItem("cartItems");
 displayCartItems();
 showMessage("Cart cleared");
 closeCartModal();
})

//"processing order"
var clearCartButton = document.getElementById("process-order-button");
clearCartButton.addEventListener("click", function () {
 cartItems = [];
 sessionStorage.removeItem("cartItems");
 displayCartItems();
 showMessage("Thank you for the order!");
 closeCartModal();
})

