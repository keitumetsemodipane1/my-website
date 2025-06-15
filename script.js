// Example feature: popup when clicking on product
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".product-preview img");
  images.forEach(img => {
    img.addEventListener("click", () => {
      alert("More details coming soon 💥");
    });
  });
});
