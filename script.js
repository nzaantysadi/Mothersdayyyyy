document.getElementById("startBtn").addEventListener("click", function () {
  const sky = document.getElementById("sky");
  const clouds = document.querySelector(".clouds");
  const planeWrapper = document.querySelector(".plane-banner-wrapper");

  sky.style.display = "block";
  clouds.style.opacity = "1";
  planeWrapper.style.opacity = "0";

  // Start with clouds visible
  clouds.style.transition = "opacity 3s ease-in-out";
  planeWrapper.style.transition = "opacity 1s ease-in-out";

  // After 3 seconds, fade out clouds and show the plane
  setTimeout(() => {
    clouds.style.opacity = "0";
    setTimeout(() => {
      planeWrapper.style.opacity = "1";
    }, 1000); // Delay for clouds to fade before plane appears
  }, 3000);
});
