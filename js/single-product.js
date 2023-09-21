

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

glideImage.src=findProduct.img.singleImage;


