/**
 *
 * Manipulating the DOM exercise.
 *===================================
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint*/

/*to measure performance*/
//const startingTime = performance.now();
/*eslint-env es6*/

//*************1.build the navbarMenu******************//

const sections = document.querySelectorAll("section");
//console.log(sections );
const navbarMenu = document.getElementById("navbar__list");
//console.log(navbarMenu);
/*CreateDocumentFragment into which DOM nodes added to build an offscreen DOM tree.*/
const newFragment = document.createDocumentFragment();

//iterate  (i.e., loop)  through sections

sections.forEach((section) => {
  //get id from each section
  const secLink = "#" + section.getAttribute("id");

  //Create li  for each section in the list

  const newNavItem = document.createElement("li");

  //Create <a>  for each section in the list

  const newNavLink = document.createElement("a");
  // put  a class name for each anchor
  newNavLink.className = "menu__link";

  /*Extract the data attribute "data-nav value"  from each section and store it in sectionTitle variable */

  const sectionTitle = section.getAttribute("data-nav");
  //set the innerText of each anchor to sectionTitle
  newNavLink.innerText = sectionTitle;
  console.log(sectionTitle);
  //build this part href="#section1"
  newNavLink.setAttribute("href", secLink);

  // Scroll to anchor ID using scrollTO even

  newNavLink.addEventListener("click", function (event) {
    event.preventDefault();
    section.scrollIntoView({
      behavior: "smooth",
    });
  });
  newNavItem.appendChild(newNavLink); //append <a>  to <li>
  newFragment.appendChild(newNavItem); //append <li>  to the Fragment
});
navbarMenu.appendChild(newFragment); //append the Fragment to <ul>

//*************2.get active section*************//

/*heighlight active section which is  into viewport or close to top
 *Add class 'your-active-class' to that section */

window.addEventListener("scroll", function () {
  // itrate through sections
  sections.forEach((section) => {
    const topSection = section.getBoundingClientRect().top;

    const bottomSection = section.getBoundingClientRect().bottom;
    // test which section should be highlighted
    console.log(topSection);
    console.log(bottomSection);
    if (topSection < 150 && bottomSection >= -550) {
      section.classList.remove("activeClass");
      section.classList.add("activeClass");
      section.style.backgroundColor = "yellow";
      //*************3.get active link*************//
      // itrate through links

      let links = document.querySelectorAll("a");
      //get the data-nav value for this active section.
      let active_section_data = section.getAttribute("data-nav");
      links.forEach((link) => {
        //check which link has the textContent equal to active section data-nav
        if (active_section_data == link.textContent) {
          link.classList.add("activeClass");
          link.style.backgroundColor = "yellow";
        } else {
          link.classList.remove("activeClass");
          link.style.backgroundColor = "green";
        }
      });
    } else {
      section.classList.remove("activeClass");
      section.style.backgroundColor = "green";
    }
  });
});

//const endingTime = performance.now();
/*console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');*/
