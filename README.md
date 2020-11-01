Landing Page Project
this project uses JavaScript to creat an interactive navigational experience for the user ,and it is about DOM manipulation!
TODO : in 3 main steps
=========================
1-Build Navbar 

2-Get the active Section
 
3- Get The Active Link

properties of this project
==========================
1- Created by using HTML& css &javascript &the DOM
2- Resposive
1- The HTML file Follows BEM naming conventions

steps in details to creat that project
========================================
1-Build Navbar
---------------
•we have empty UL that will be populated with li to look like
  <li><a class="menu__link" href="#section1">section 1</a></li> for each section.
• Query the all sections and store the list in variable.
• Use forEach on the list Variable.
• Create (1 <li> and 1 <a> and 1 textNode ) for each section in the list.
• Extract the data-nav value from the section and store it in   variable.
• Set this variable for the text content of each link.
• For Better performance use appendChild on the Fragment inside the loop.
• After the loop end append that Fragment to the <ul>.
• Add EventListener to the links and use scrollIntoView().

2.Get the active Section
------------------------

 • use GetBoundingClientRect 
 • Use forEach() method on the sections list inside it.
 • Use the getBoundingClientRect on the element parameter.
 • IT will return some properties related to viewport and the section.
 • Use if statement to get the Active like (add your condition).
 • Inside the if statement before add active class to the section,
 • Make sure to remove the other active classes from all sections.
 • Use classList.add method to add the active class to the active section.
 3.Get The Active Link
 ---------------------------
 • When we got the Active section -get the data-nav value for this active section.
 • Then we can use forEach on all the links and check using if condition
   which link has the textContent equal to active section data-nav
 • Remove Active class from all links, give the active link class active.