const openMenuSidebar = document.querySelector("#openMenu");
const sidebar = document.getElementById("menuSidebar");
const closeMenuSidebar = document.querySelector("#closeMenu");
const openSearchButton = document.getElementById("searchButton");
const modalSearch = document.getElementById("modalSearch");
const closeModalSearch = document.getElementById("closeSearchButton");

openMenuSidebar.addEventListener("click", function () {
  sidebar.style.left = "0%";
});

closeMenuSidebar.addEventListener("click", function () {
  sidebar.style.left = "-100%";
});

document.addEventListener("click", function (event) {
  if (
    !event.composedPath().includes(sidebar) &&
    !event.composedPath().includes(openMenuSidebar)
  ) {
    sidebar.style.left = "-100%";
  }
});

openSearchButton.addEventListener("click", function () {
  modalSearch.style.display = "flex";
});

closeModalSearch.addEventListener("click", function () {
  modalSearch.style.display = "none";
});

document.addEventListener("click", function (event) {
    if (
        !event.composedPath().includes(modalSearch) &&
        !event.composedPath().includes(openSearchButton)
      ) {

        modalSearch.style.display = "none";
      
      }
});
