/* if we click it will open and we can see the navbar 
and when we click the again it got hidden 

for that we will use a active class to add and remove the navbar visibility on our screen ]
based on the button click */


/* .active class will be added by the event listener and the classlist property and in it the add and remove the classlist
we can do add or remove event listener or we can do add or remove the class list */

// active class will be added and remove on the header the parent element to all the things in the navbar that takes on it
// the list the image the buttons all 


/*
logic is
whenever user click the hamburger button
if active class present in the "header" then we will show a particular section of the navbar( in our case the list items)
and if the active class is not present then we hide that particular content

so we need to make a function to add and remove the active class in the main parent element of the lists which is header


and also we want to switch between the different button 
when navbar is close then the hamburger button icon and if the navbar is open then the close button icon

*/


// whenever someone click our main button - the part of code that holds the icons of navbar - close and open
// then we need to toggle between the button 
// and add the active class and if clicked again then remove the active class

// other functionality is been written in the html and css

// targeting the main div containing the icon buttons - mobile-navbar-btn
const mobile_nav = document.querySelector(".mobile-navbar-btn"); // get the reference of the div

// to target our header class to add the active class to it
const nav_header = document.querySelector(".header");

// it works 
// const toggleNavbar = ()=>{
//     alert("Hello World")
// }


// now to actually toggle the active class
const toggleNavbar = () =>{

    // we can do add and remove seperately depend upon the button click 
    // by nav_header.classlist.add or nav_header.classlist.remove

    // but we have a better solution than it to do it after click rather than adding and removing and that is 
    // toggle the class it will perform the action of adding and removing the class based on the click on the selected button
    // and it will also toggle between the buttons 


    // thats all we needed to do for the active class to add and remove 
    nav_header.classList.toggle('active');


    /*
    // how it works that it just add the class to it 
    // the css is predefined what will happen if the class is been added to the parent class
    // so don't get confuse how this active is defining the site structure because its not by here 
    // its not adding adding any styling dynamically or by here its just activating the styling 
    // that is based on the inclusion and exclusion of this class in the document
    // if its present in the document the css related to this class will be active if its been removed 
    // the css related to it will also be remove 

    // the actual toggling between button is happening when we toggle the main icon class div 
    // or in here mobile_nav which on click decide which button to show 
    // if its not clicked then the first button will be the ham button and 
    // if its been clicked then the next button will be show which is close 
    // the css of the page is different than the showing and clicking of the button 
    // but these action just defining the adding and removal of eh active class in the html document 
    // in the main header class
    */

}


// now to toggle between the buttons
// add event listener 2 args - 1st which event to fire ( click in our case ) - 
// 2nd what action to be performed after it
mobile_nav.addEventListener("click", ()=> toggleNavbar());



