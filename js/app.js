/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
//Query the all sections and store the list in variable
const sect = document.querySelectorAll('section');

console.log(sect)
//f get a NodeList to iterate through by using getElementsByTagName()
var lis = document.getElementById("navbar__list").getElementsByTagName("li");
console.log(lis)

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
$(document).ready(function () {
    var viewport = $(window),
        setVisible = function (e) {
            var viewportTop = viewport.scrollTop(),
                viewportBottom = viewport.scrollTop() + viewport.height();
            $('section').each(function () {
                var self = $(this),
                    top = self.offset().top,
                    bottom = top + self.height(),
                    topOnScreen = top >= viewportTop && top <= viewportBottom,
                    bottomOnScreen = bottom >= viewportTop && bottom <= viewportBottom,
                    elemVisible = topOnScreen || bottomOnScreen;
                self.toggleClass('visible', elemVisible);
            });
        };
    viewport.scroll(setVisible);
    setVisible();
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active