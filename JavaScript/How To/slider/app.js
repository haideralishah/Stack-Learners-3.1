var sliderImages = document.getElementsByClassName("slider-image");
var topImageIndex = 1;
var isFirstClick = true;
setInterval(function () {
    for (var i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.zIndex = 0;
    }
    console.log(sliderImages, topImageIndex)

    sliderImages[topImageIndex].style.zIndex = 10;

    topImageIndex++;
    if (topImageIndex >= sliderImages.length) {
        topImageIndex = 0;
    }

}, 3000);

function swapeRight() {
    for (var i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.zIndex = 0;
    }

    sliderImages[topImageIndex].style.zIndex = 10;

    topImageIndex++;
    if (topImageIndex >= sliderImages.length) {
        topImageIndex = 0;
    }
}

function swapeLeft() {
    for (var i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.zIndex = 0;
    }
    topImageIndex--; //0
    if (topImageIndex <= 0 && isFirstClick) {
        topImageIndex = sliderImages.length - 1;
    }
    else if (topImageIndex < 0) {
        topImageIndex = sliderImages.length - 1;
    }
    isFirstClick = false;
    sliderImages[topImageIndex].style.zIndex = 10;
}