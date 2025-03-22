function openCart() {
 document.getElementById("cart-page").style.display = "flex"; 
}

function closeCart() {
 document.getElementById("cart-page").style.display = "none"; 
}



document.addEventListener("DOMContentLoaded", function () {

 const requestDishButton = document.getElementById("request-dish-button");
 const requestDishModal = document.getElementById("request-dish-modal");
 const cancelButton = document.getElementById("cancel-button");

 if (!requestDishButton || !requestDishModal || !cancelButton) {
   console.error("One or more elements not found!");
   return; 
 }

 
 requestDishButton.addEventListener("click", () => {
   requestDishModal.style.display = "flex";
 });

 
 cancelButton.addEventListener("click", () => {
   requestDishModal.style.display = "none";
 });

 
 window.addEventListener("click", (event) => {
   if (event.target === requestDishModal) {
     requestDishModal.style.display = "none";
   }
 });
});






document.addEventListener('DOMContentLoaded', function() {
 const video = document.getElementById('video');
 const playButton = document.getElementById('play-button');

 
 function updatePlayButton() {
   if (video.paused) {
     playButton.style.display = 'block';
   } else {
     playButton.style.display = 'none';
   }
 }

 
 playButton.addEventListener('click', function() {
   if (video.paused) {
     video.play();
   } else {
     video.pause();
   }
   updatePlayButton();
 });

 
 video.addEventListener('play', updatePlayButton);
 video.addEventListener('pause', updatePlayButton);

 
 updatePlayButton();
});
