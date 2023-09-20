let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
import {updateCartCount} from "./index.js"
function displayCartProduct() {
  const cartWrapper = document.querySelector(".cart-wrapper");
  let result = "";
  cart.forEach((item) => {
    result += `
      <tr class="cart-item">
        <td></td>
        <td class="cart-image">
          <img src=${item.img.singleImage} alt="">
          <i class="bi bi-x delete-cart" data-id=${item.id}></i>
        </td>
        <td>${item.name}</td>
        <td>$${item.price.newPrice}</td>
        <td class="product-quantity">${item.quantity}</td>
        <td class="product-subtotal">$${item.quantity*item.price.newPrice}</td>
      </tr>
    `;
  });
  cartWrapper.innerHTML = result;
  removeCartItem();
  updateCartCount();


}

function removeCartItem() {
  const cartCountElement = document.querySelector(".header-card-count");
  const btnDeleteCart = document.querySelectorAll(".delete-cart");

  btnDeleteCart.forEach((button) => {
    button.addEventListener("click", function (e) {
      const id = e.target.dataset.id;
      cart = cart.filter((item) => item.id !== Number(id));
      displayCartProduct();
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      saveCartValue();

    });
  });
}

function saveCartValue(){

const subtotal=document.getElementById("subtotal");
const carttotal=document.getElementById("cart-total");
const fastcargo=document.getElementById("fast-cargo");
let cargo=15;
let itemTotal=0;

 cart.length>0 && cart.map((item)=>itemTotal+=(item.price.newPrice)*(item.quantity));


 subtotal.innerHTML=`$${itemTotal}`;

 fastcargo.addEventListener("change",function(e){


  console.log(e.target.checked)
   if (e.target.checked) {
    
     carttotal.innerHTML=`$${itemTotal+cargo}`;

   }

   else{


    carttotal.innerHTML=itemTotal;

   }

  




 })



 






}

displayCartProduct(); 
saveCartValue();