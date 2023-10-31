// Get the modal and the image inside it
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");

// Get the image that opens the modal
var img = document.querySelector(".modal-trigger");

// When the user hovers over the image, show the modal with the corresponding image
img.addEventListener("mouseenter", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
});

// When the user hovers out of the image, hide the modal

// When the user clicks on the close button, close the modal
var closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});