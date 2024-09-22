 // Wait for the DOM to be ready
 document.addEventListener("DOMContentLoaded", function() {
  // Get all carrossel containers
  const carrossels = document.querySelectorAll(".carrossel");

  // Loop through each carrossel container
  carrossels.forEach(carrossel => {
      const containerJ = carrossel.querySelector(".containerJ");
      const images = containerJ.querySelectorAll("img");

      // Set initial index and timer
      let currentIndex = 0;
      let timer;

      // Function to show the current image
      const showImage = () => {
          images.forEach((img, index) => {
              if (index === currentIndex) {
                  img.style.display = "block";
              } else {
                  img.style.display = "none";
              }
          });
      };

      // Function to start the carousel
      const startCarousel = () => {
          timer = setInterval(() => {
              currentIndex = (currentIndex + 1) % images.length;
              showImage();
          }, 5000); // Change slide every 5 seconds (adjust as needed)
      };

      // Start the carousel
      startCarousel();

      // Pause the carousel when hovering over it
      carrossel.addEventListener("mouseenter", () => {
          clearInterval(timer);
      });

      // Resume the carousel when leaving
      carrossel.addEventListener("mouseleave", () => {
          startCarousel();
      });
  });
});
