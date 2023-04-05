// taking a argument and changing it every second since functions work in millisecond
setInterval(setClock , 1000 )

// data attribute uses for selection the element from the html document
// elements we need to use to set the rotation values of our hand 
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');


function setClock() {
    
    // gives you current date you run it on
    const currentDate = new Date();
    // getting seconds and taking it and divide it by 60 60s in a minute to know how far to rotate our seconds hand
    const secondsRatio = currentDate.getSeconds() / 60;
    // for not moving the hand on whole in one second update we need to add the seconds in it
    const minutesRatio =  (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours())  / 12 ;
    // now for setting the values for our rotation of our different hands 
    // we need to got to index and add some data attributes
    
    //calling and setting the values of the rotations 
    // this is same as like use state taking the element from the html doc and applying the new state it in here by the ratios
    //secondHand is the previos state and the secondRatio is the new state  - 
    // same onCLick run a function to create the new value and as onChange (e)=>setSecond(e.target.value)  
    setRotation(secondHand , secondsRatio)
    setRotation(minuteHand , minutesRatio)
    setRotation(hourHand , hoursRatio)
}


// function to set the values for us
function setRotation(element , rotationRatio) {
    // setproperty will take the value variable of the css and set it to the rotation we want
    element.style.setProperty('--rotation', rotationRatio * 360) // as there are 360 degree rotation in our clock
    
}

// this is to set our clock to the right time to our current imidiately without any delay in representation
setClock()