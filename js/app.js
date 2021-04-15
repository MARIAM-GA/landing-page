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


// build the nav
const navBarFunc = () => {

    const navBar=document.getElementById('navbar__list');
    const sections=document.querySelectorAll('section');

        sections.forEach(section => {
            //Extract the data attribute "data-nav value" from each section and store it in navLinkName
            const navLinkName = section.getAttribute("data-nav");
            const sectionId = section.getAttribute("id");

            const navLink = document.createElement('li');
            //build this part  <li><a class="menu__link" href="#asectionId">navLinkName</a></li>
            navLink.innerHTML = `<a class="menu__link" href="#${sectionId}">${navLinkName}</a>`;
            navBar.classList.add("menu__link");
            navBar.appendChild(navLink);
        });
};
navBarFunc();


function isInViewport(section) {
    const rect = section.getBoundingClientRect();
    //console.log(rect);
    return (rect.top);
}

//give the active section a different appearance 
function toggleActive() {
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');

        for (section of sections) {
            const sectionOffset = isInViewport(section);
            const checkActive = (sectionOffset, section) => {
                const activeLink = document.querySelector(`a[href="#${section.getAttribute("id")}"]`);

                if (sectionOffset) {
                    section.classList.add('active-class');
                    activeLink.classList.add("menu__link--active");
                }

                else {
                    section.classList.remove('active-class');
                    activeLink.classList.remove("menu__link--active");
                };
            };
            InViewport = () => sectionOffset < 250 && sectionOffset >= -250;
            //call checkActive function
            checkActive (InViewport(), section);
        }
    });
}
toggleActive();

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

