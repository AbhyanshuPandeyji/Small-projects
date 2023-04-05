const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnicon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

// .onclick is the inline define funtion runner
toggleBtn.onclick = function () { 
    /* Allows for manipulation of element's class content attribute 
     as a set of whitespace-separated tokens through a DOMTokenList object.*/
     
     /* toggle adds a toggle effect on which element applied to like an active selector add() function
     If force is not given, "toggles" token, removing it if it's present and adding it if it's not present. If force is true, adds token (same as add()). If force is false, removes token (same as remove()).

     Returns true if token is now present, and false otherwise.
     
     Throws a "SyntaxError" DOMException if token is empty.
     
     Throws an "InvalidCharacterError" DOMException if token contains any spaces.
     */
     dropDownMenu.classList.toggle('open');
    // .contains() Returns true if token is present, and false otherwise.
     const isOpen = dropDownMenu.classList.contains('open');

    //  shifts between button icon x to ham with the use ternary operator
     toggleBtnicon.classList = isOpen 
     ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'

}
