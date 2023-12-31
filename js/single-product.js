
import tabsFunc from "./tabs.js" 




const productId=localStorage.getItem("product-id")?JSON.parse(localStorage.getItem("product-id")):localStorage.setItem("product-id",JSON.stringify(1));


let products=JSON.parse(localStorage.getItem("products"));



const findProduct=products.find((product)=>product.id==Number(productId));


//TİTLE

const productTitleDom=document.querySelector(".product-title");

productTitleDom.innerHTML=findProduct.name;

//PRİCE

const oldPriceDom=document.querySelector(".old-price");
const newPriceDom=document.querySelector(".new-price");

oldPriceDom.innerHTML=`$${findProduct.price.oldPrice.toFixed(2)}`;

newPriceDom.innerHTML=`$${findProduct.price.newPrice.toFixed(2)}`;


//İMAGE GALLERY

const imgDom=document.querySelector(".image-gallery");

imgDom.src=findProduct.img.singleImage;

const glideImage=document.querySelector(".glideImage");

findProduct.img.thumbs.forEach((imageUrl, index) => {
    glideImage.src = imageUrl;
  
   
  });

//addto cart


const quantityDom=document.querySelector("#quantity");
const addtocartDom=document.querySelector("#addtoProduct");
const cartCount = document.querySelector(".header-card-count");

let cartIn=localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")):[];


if (!cartIn) {

  addtocartDom.setAttribute("disabled","disabled");
}

else{

  addtocartDom.addEventListener("click",function(e){

    e.preventDefault();
  
    console.log(Number(quantityDom.value));
    cartIn.push({...findProduct,quantity:Number(quantityDom.value)})
   
    localStorage.setItem("cart",JSON.stringify(cartIn));

    addtocartDom.setAttribute("disabled","disabled");
  
    cartCount.innerHTML=cartIn.length;


  })

}





  
