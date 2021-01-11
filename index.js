$( document ).ready(function() {
    console.log( "ready!" );


 

// Get parent element
var $this = $('.container-slider');
 
// Slides container
var slidesCont = $this.children('.inner-cont');
// Get all slides
var slides = slidesCont.children('.slide');

 
// Get Previous / Next links
var arrowsCont = $('.slider-icons');
var prevSlide = $('.icon-prev');
var nextSlide = $('.icon-next');
console.log (prevSlide);
 
// Total slides count
var slidesCount = slides.length;
 
// Set currentSlide to first child
var currentSlide = slides.first();
var currentSlideIndex = 1;
 


// Hide all slides except first and add active class to first
slides.not(':first').css('display', 'none');
currentSlide.addClass('active');

// Function responsible for fading to next slide
function fadeNext() {
    currentSlide.removeClass('active').fadeOut(700);
 
    if(currentSlideIndex == slidesCount) {
        currentSlide = slides.first();
        currentSlide.addClass('active').fadeIn(700);
        currentSlideIndex = 1;
    } else {
        currentSlideIndex++;
        currentSlide = currentSlide.next();
        currentSlide.addClass('active').fadeIn(700);
    }
 
}
 
// Function responsible for fading to previous slide
function fadePrev() {
    currentSlide.removeClass('active').fadeOut(700);
 
    if(currentSlideIndex == 1) {
        currentSlide = slides.last();
        currentSlide.addClass('active').fadeIn();
        currentSlideIndex = slidesCount;
    } else {
        currentSlideIndex--;
        currentSlide = currentSlide.prev();
        currentSlide.addClass('active').fadeIn(700);
    }
 
}


// Detect if user clicked on arrow for next slide and fade next slide if it did
$(nextSlide).click(function(e) {
    console.log('clicked on Next btn');
    e.preventDefault();
    fadeNext();
});
 
// Detect if user clicked on arrow for previous slide and fade previous slide if it did
$(prevSlide).click(function(e) {
    e.preventDefault();
    fadePrev();
});
});