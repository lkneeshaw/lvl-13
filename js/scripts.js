// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";

/**********************************
  CONFIGURE JSON CALL
**********************************/ 
// The API feed
var getStuff = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';

// Optional settings for private collections. This is public, no settings needed. 
var setStuff = {};

// Do stuff with returned data
var doStuff = function(data) {

  console.log(data.data["0"].images.original.url);
  
  // What do you want to do? Show (display on page) data? 
  showStuff(data);
    
};

/************************************
  GET JSON FROM API
************************************/ 
$.getJSON( getStuff, setStuff, doStuff);


/************************************
  SHOW (DISPLAY ON PAGE)
************************************/ 


var showStuff = function(data) {
  
//   console.log(data.data[numRand].images.looping.mp4); 
 console.log(data);
    
 $('#zero').attr('src', data.data[0].images.original.url)
 $('#one').attr('src', data.data[1].images.original.url)
 $('#two').attr('src', data.data[2].images.original.url)
  
}

//QUESTION FOR COLIN ^^^^^ HOW MAKE THE THING LOOP???









//JS30 STUFF

 function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

    const sliderImages = document.querySelectorAll('.slide-in');

    function checkSlide(e) {
      sliderImages.forEach(sliderImage => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add('active');
        } else {
          sliderImage.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', debounce(checkSlide));