let overlay = document.querySelector(".galleryOverlay");
let imageBox = document.querySelector(".imageBox");
let img = document.querySelector(".imageBox img");
let close = document.querySelector(".close");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let galleryImages = document.querySelectorAll(".galleryItems img");

let currentIndex = 0;

galleryImages.forEach((image, index) => {
    image.addEventListener("click", () => {
        currentIndex = index;
        showImage();
    });
});

function showImage() {
    overlay.classList.add("galleryOverlayShow");
    imageBox.classList.add("imageBoxShow");
    img.src = galleryImages[currentIndex].src;
}

function hideImage() {
    overlay.classList.remove("galleryOverlayShow");
    imageBox.classList.remove("imageBoxShow");
}

next.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }
    showImage();
});

prev.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }
    showImage();
});

close.addEventListener("click", hideImage);
overlay.addEventListener("click", hideImage);
