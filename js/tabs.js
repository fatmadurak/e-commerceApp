function tabsFunc() {
    const btnTabs = document.querySelectorAll(".tab-button");
    const desc = document.getElementById("desc");
    const info = document.getElementById("info");
    const review = document.getElementById("review");
  
    btnTabs.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
  
        // Remove the "active" class from all tab buttons
        btnTabs.forEach((tab) => tab.classList.remove("active"));
  
        // Get the data-id attribute of the clicked button
        const id = e.target.dataset.id;
  
        if (id) {
          e.target.classList.add("active");
  
          // Hide all tab content elements
          desc.style.display = "none";
          info.style.display = "none";
          review.style.display = "none";
  
          // Show the corresponding tab content based on the data-id
          if (id === "desc") {
            desc.style.display = "block";
          } else if (id === "info") {
            info.style.display = "block";
          } else if (id === "review") {
            review.style.display = "block";
          }
        }
      });
    });
  }
  
  export default tabsFunc();