import { header } from "./header.js";
import { products } from "./products.js";

header();
products();

async function GetData() {
  try {
    const products = await fetch("js/data.json");
    const data = await products.json();

    if (data) {
     
      localStorage.setItem("products", JSON.stringify(data)); // data burada kullanılmalı, "data" değil
    } else {
      localStorage.setItem("products", JSON.stringify([])); // Boş bir dizi yerine null veya undefined
    }

   
  } catch (error) {
    console.error("Veri çekme hatası:", error);
  }
}

GetData();
