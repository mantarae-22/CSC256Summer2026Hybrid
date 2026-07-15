// the array of images to use in the slideshow - make sure to use at least 4 images for the assignment
let arrImages = [
    "./images/island.jpg",
    "./images/lab.jpg",
    "./images/pyramid.jpg"
];

// create a variable to keep track of the current selected image
let currImageIndex = 0;

// function to show the selected image
function showImage(index){
    // nickname/short to the image HTML element
    let imgSlide = document.getElementById("imgSlide");
    // change the image source, using the selected index
    imgSlide.src = arrImages[index];
}

// create the function to go to the previous image
function previousImage(){
    // subtract 1 from the current image index tracker
    // currImageIndex-- is equivalent to 
    // currImageIndex = currImageIndex - 1
    currImageIndex--;

    // check to see if we went below 0, since we don't an image with that index
    if (currImageIndex < 0){
        // one option would be to stay on the first image
        //currImageIndex = 0;
        // another option is to go to the last image in the array
        // the length of my array is 3, my indexes are 0, 1, 2 so I need to subtract 1 so that I stay within the bounds of the array
        currImageIndex = arrImages.length - 1;
    }

    // this will change the image to the previous image
    showImage(currImageIndex);
}

// create the function to go to the next image
function nextImage(){
    // add 1 to the current image index tracker
    // currImageIndex++ is equivalent to 
    // currImageIndex = currImageIndex + 1
    currImageIndex++;

    // check to see if the current image index is now too high
    if (currImageIndex == arrImages.length){
        // one option would be to stay on the last image in the array
        //currImageIndex--;
        // currImageIndex = arrImages.length - 1;

        // this creates the effect of the image looping back to the first image in the array
        currImageIndex = 0;
    }

    // this will change the image to the previous image
    showImage(currImageIndex);
}

// call the showImage function when the page loads to show the initial image and test that the image loading is working
showImage(currImageIndex);