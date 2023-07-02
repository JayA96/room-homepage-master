const prev = document.getElementById("prev");
const next = document.getElementById("next");
const images = document.querySelectorAll(".slide__image");
const heading = document.getElementById("heading");
const text = document.getElementById("text");

// Keep track of selected slide
var currentSlide = 0;

// Function to handle changes in the DOM
function displayInfo() {

    // Move images so only active image is visible in slider
    images.forEach(image => image.style.transform = `translateX(${currentSlide * -100}%)`);
    
    switch (currentSlide) {
        case 0:
            heading.textContent = "Discover innovative ways to decorate";
            text.textContent = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
            break;
        case 1:
            heading.textContent = "We are available all across the globe";
            text.textContent = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
            break;
        case 2:
            heading.textContent = "Manufactured with the best materials";
            text.textContent = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
            break;
        default:
            break;
    }
}

prev.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
    }
    displayInfo();
});

next.addEventListener("click", () => {
    if (currentSlide < images.length - 1) {
        currentSlide++;
    }
    displayInfo();
});