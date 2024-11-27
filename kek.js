let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

images.forEach((img, index) => {
  img.style.display = index === 0 ? 'block' : 'none';
});

function changeImage(direction) {
  images[currentIndex].style.display = 'none';
  
  currentIndex = (currentIndex + direction + images.length) % images.length;
  
  images[currentIndex].style.display = 'block';
}
let currentStartIndex = 0;
const reviews = document.querySelectorAll('.malupiton-review');
const reviewsToShow = 3;
const reviewCount = reviews.length;

function showReviews() {
    currentStartIndex = (currentStartIndex + 1) % reviewCount;

    reviews.forEach((review) => {
        review.style.display = 'none';
    });


    for (let i = 0; i < reviewsToShow; i++) {
        const index = (currentStartIndex + i) % reviewCount;
        reviews[index].style.display = 'block';
    }
}

setInterval(showReviews, 2000);
showReviews();