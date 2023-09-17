
let data = JSON.parse(localStorage.getItem("products"));
let cart=[];

function addToCart(){


const buttons=[...document.getElementsByClassName("addToCart")];

buttons.forEach((button)=>{

button.addEventListener("click",function(e){

  e.preventDefault();
  var id=e.target.dataset.id;

  const findProduct=data.find((product)=>product.id===Number(id))
 
  cart.push({...findProduct});
  localStorage.setItem("cart",JSON.stringify("cart"))

})

})




}





export  function products() {
  const productContainer = document.getElementById("productList");
  const productContainer2 = document.getElementById("productList2");



  if (data ) {
    // data.array'nin tanımlı olduğunu ve içeriğinin bir dizi olduğunu kontrol edin
    let productHTML = ""; // HTML içeriği bir dize olarak başlatın

    data.forEach((item) => {
      // Her ürün için HTML içeriğini oluşturun ve productHTML'e ekleyin
      productHTML += `
        <li class="product-item">
          <div class="product-image">
            <a href="#">
              <img src=${item.img.singleImage} alt="" class="img1" />
              <img src=${item.img.thumbs[1]} alt="" class="img2" />
            </a>
          </div>
          <div class="product-info">
            <strong>${item.name}</strong>
            <div class="product-star">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
            </div>
            <span class="product-discount">-${item.discount}%</span>
            <div class="product-prices">
              <span class="new-price">$${item.price.newPrice.toFixed(2)}</span>
              <span class="old-price">$${item.price.oldPrice.toFixed(2)}</span>
            </div>
            <div class="product-links">
              <button class="addToCart" data-id=${item.id}>
                <i class="bi bi-basket-fill"></i>
              </button>
              <button>
                <i class="bi bi-heart-fill"></i>
              </button>
              <a href="#">
                <i class="bi bi-eye-fill"></i>
              </a>
              <button>
                <i class="bi bi-share-fill"></i>
              </button>
            </div>
          </div>
        </li>
      `;
    });

    // productHTML içeriğini productContainer'a ekleyin
    productContainer.innerHTML = productHTML;
    productContainer2.innerHTML = productHTML;
    addToCart()
  }


  
}