// javascript tutorial in one video not a comprehensive one if what that go to full short version for higher and complex funtions but give it the time to do

// part 1  ways to print in javascript
// javascript console api
console.log("hello world");
// alert("hellow alert");
// if we want to print within document
// document.write("Hello we are here form the javascript write output");
// console.warn("warning message");
// console.error("this is a error message");

// 3 varibales in javascript
// what is a variable - it is a contianer to store the data value
// declartive values  - var ( global scope ) , let (blocked scope ) ,  const (blocked scope ) these are used to declare variable which is going to store value
// eg
// var number1 = 20;
// var number2 = 25;
// console.log(number1 + number2);// will add two numbers


/*
   there are two types of data types in javascript
   1 - primitive data type : null, number , string , symbol , boolean , bigint , undefined
   2 - referance data type : objects;
*/
// primitive data type
// let nul = null ;// means it has to be null with no value
// console.log(nul);
// let num = 10 ;
// console.log(num);
// let str = "this is the string text" ;
// console.log(str);
// let sym = Symbol("this is a symbol text") ;
// console.log(sym);
// let Booleant = true ;
// console.log(Booleant);
// let Booleanf = true ;
// console.log(Booleanf);
// let BigI = BigInt("577") ;
// console.log(BigI);
// let und = undefined;// will be default undifined if no value
// console.log(und);


// non primitive or referance data type
// define variable  with more desc and identifiable fasion to see what that varibale do actually
// let obj = {
//     mark1 : 10,
//     mark2 : 20,
//     mark3 : 30,
//     mark4 : 40,
// }

// console.log(obj);
// console.log(obj.mark1);// mark1 will be key to acess the specic value in the object it could be neseted in one another later in that

// array in javascript
// array is not a data type and it can represent any value of the datatypes its just a container with more than one defined sigular data or value
// let arr = [ 1 , 2 , 3 , 4 ,5 ];
// console.log(arr);


// operators in javascript
// arithematic operators - addition ( + ) , subtraciton ( - ) , mutipication ( * ) , division ( / ) , modulus ( % ) , power of ( ** ) , increment ( ++ ) , decrement ( -- )
// assignment operators  - = , += (if a += b -> a = a + b) same for all , -= ,/= ,*= ,--= , ++= , **= ,  %=
/* comparison operator - == (only value  a == b) , === ( data type and value strict its better used when the value should be true in its data type) ,
 >= greter than equal to  , <= less than equal to   ,> greter than  , < less than */
// logical operator - && ->And - for both value to be true , || -> OR  - the one value should be true , ! ->NOT -  change value / the output to be not( if true then flause and vice versa)


// let a = prompt("enter the value"); // will open a window where you can enter a value and it will store it into the variable for future use promt is the funtion


// funtions in javascript - use to define a block of code to help to not repeat logic everytime to calculate - function is a decelarative to define this is a funtion
// you can use undclarative or even a without name funtion by arrow funtion {()=>} but if want name funtion you have to use  funtion keyword to declare it if not predefined
// DRY - "Do not Repeat Yourself"
// function avg(a, b){
//     let c = a + b;
// it will replace the funtion invoking/ callling place to the return value and set it as it is
//     return c;
// }


// invoking the funtion
// avg() will be calling the funtion  and  20 , 30 are parameters/ arguments which takes place the parameter in the funtion and
// if not defined it will just pass in it if the any value parameter got missedmatched then there will be an error ( for this kind of invoking its not recommended)
// let c1 = avg(20 , 30);
// let c2 = avg(40 , 50);
// console.log(c1 , c2 , c1 + c2 );


// conditional in javascript
// if will print if the condition is true  - it will print the first sucessful true condition wheater the next one is also true or not  -
// it will go to next one if first one is not true and go till either a conditon is true or if none then no output ( it is good to put a default or an error message to tell no conditon is true)
// single if
// let age = 10;
// if(age > 10){
//     console.log("you are a teen");
// }

// if -else
// if(age > 10){
//     console.log("you are a teen");
// }
// else
// {
//     console.log("you are a kid");
// }

// mutiple if-else ladder
// if(age > 10)
// {
//     console.log("you are a teen ");
// }
// else if(age > 18){
//     console.log("you are an adult");
// }
// else {
//     console.log(" you are a kid");
// }


// now in function
// let newage = prompt("enter the age");
// newage = parseInt(newage);
// let whatareyou = decider(newage);

// function decider(theage){
// if (theage < 10 ){
//     console.log(" you are a kid");
// }
// else if(theage > 10 && theage < 18 )
// {
//     console.log("you are a teen ");
// }
// else if(theage > 18 && theage < 60 ){
//     console.log("you are an adult");
// }
// else {
//     console.log("you are an old person");
// }
// }

// loops in javascript
/* three types - for(let i=0; i<condition ; i++(or any other assignment)) ,while (while(condition){code + assignment of i }),
 do-while ( do{code + assignment }while(condition)// it will run atlest one time without checking condition ) */
// let arr = [1,2,3,4,5,6,7];
// for loop
// for(let i = 0 ; i<arr.length ; i++){
//     console.log(arr[i]);
// }

// foreach another way to iterate an array without any condition just one by one array.forEach(funtion(element |// to refereanc to the array| { console.log(element);}); // end of funtion // elent here is referancing the array )
// arr.forEach(function(element){
//     console.log(element);
// })

// while loop
// let j = 0;
// cannot define the variable in while loop  - it will cheack the condition first then run
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do-while loop - will run 1 time even if the condition is not true
// do{
//     console.log(arr[j]);
// }while(j<arr.length);


// break and continue in javascript
// let arr = [1,2,3,4,5,6,7]
// for(let i = 0 ; i<arr.length ; i++){
//     if(i==2){
// when i value will be equal to 2 it will stop - the loop stops after printing to index 1 and or value 2 then no value
// break;
// it will not print the value that satisfy the condition but the value after the condition will be printed as it is in this case dont print 3 but all numbers
// continue;

//     }
//     console.log(arr[i]);
// }


// Array method in javascript - explore more methods and funtions of the array after this
// let myarr = ["fan", "cam ", "box" , 11 , 24 , true , null ];
// // length of the array
// // console.log(myarr.length);
// //taking out last element of an array  pop()
// myarr.pop();
// // putting an element at last of an array - push(value)
// myarr.push("Abhy");
// console.log(myarr);
// // taking out 1st element of an array shift from index 0 to 1 number element
// myarr.shift();
// console.log(myarr);
// // putting an element at the start of an array - unshift(value)
// myarr.unshift("Abhyanshu");
// console.log(myarr);
// // tostring() converts your array into string
// myarr.toString();
// console.log(myarr);
// // sort array - ascending but it converts array into string first then converts it so it will go like an dictionary
// // like a,b,c or 1 , 2 ,3 even if the number is bigger eg - 111 , 23 , 11 , 3 the output will be 11,111,23,3
// let sortarr = [1 , 23 , 3  , 245 , 111, null];
// sortarr.sort();
// console.log(sortarr);


// sting methods in the javascript
// let myString = "I am soo good man good good"

// // string length
// console.log(myString.lenght);
// // string index - indexof() output will be first letter index of the sucessful match if am then index output will be 2 b/c index start with 0 and a is on 2
// console.log(myString.indexOf("man"));//output 14
// // to find the index of the last occurrance of the same match - lastindexof()
// console.log(myString.lastIndexOf("good"));// output 23
// // to cutout and print only value of the string within range given slice() -> slice(start no . 1, end number. 10) range is between 1,10 1 and 10 included
// console.log(myString.slice(1,14));
// // to replace the value of the given parameter/ argument value to new one - only will replace the 1st occurance the other will be there
// // to commpare with old string
// d = myString.replace("I am" , "We are not");
// console.log(d , myString);// we are not soo good man good good
// d = d.replace("good" , "bad");
// console.log(d);// output will be  - We are not soo bad man good good


// javascript dates
// let getDate = new Date();
// // to print full date with the time and zone
// console.log(getDate);
// // to print the seconds of time -  use it as a funtion and add the ()in the end of the funtion
// console.log(getDate.getTime());
// //for printing the minutes
// console.log(getDate.getMinutes());
// console.log(getDate.getFullYear());// for displaying year
// console.log(getDate.getDay());// for disapl
// console.log(getDate.getHours());// diaplays current hour
// console.log(getDate.getMonth());// gives current month
// console.log(getDate.getTimezoneOffset());// diaplay difference between time zones





// DOM Manipulation
// let elem = document.getElementById('click');
// console.log(elem);

// let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);

// to manipulate first element of container class array -
// as an list of different tags used the class container to use it
// elemClass[0].style.background = "yellow";
// to add element in the element - the classlist is use to add or remove the class to an element
// usually works with adding when necessary like event handling in the manipulation of content either style of content
// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemClass.innerHTML);
// console.log(elemClass.innerText);

// to find element and work on in
// elemtn by tagname
// let tn = document.getElementsByTagName('button');
// let tn = document.getElementsByTagName('div');
// console.log(tn);


// to add child to an element
// will create an element
// createdElement = document.createElement('p');
// // putting content into the created element
// createdElement.innerText = "this is created para";
// // now adding element into the html document by selecting the child append
// // child append insert the value in the given location or the tag we want
// // in this case tn selected the div tag so inside it it will insert an elemt after the last child elemnt or last elemnt in the tag
// tn[0].appendChild(createdElement);// output will be 1st div tag


// createdElement2 = document.createElement('b');
// createdElement2.innerText = "this is created para";
// // replace child will replace the old element with old one replaceChild(new,old)
// tn[0].replaceChild( createdElement2 ,createdElement);

// removeChild(elment); ---> removes an element


// Selection using query
// it will give 1st container class element  only one node element
// sel = document.querySelector('.container');
// console.log(sel);

// // query selector all - will give all continer class element all node list
// sel = document.querySelectorAll('.container');
// console.log(sel);





// Event listener in javascript - basicallly any thing that happend in the index file is an event 
// and we can design our funtions to act on that certain action done by the user by using events ( like onclick , onload , addeventlistener() an self defined funtion and soo on)
// inderstand of concept how it works not how many events can be done
// when button is being clicked
// function clicked(){
//    console.log("the button is been clicked");
// }

// when window is being load-onload() -  (Fires immediately after the browser loads the object.).
// window.onload = function(){
//    console.log("loaded when the window is loaded");
// }

// we can add the funtionality direct to the id by just simply writing and targeting them like id.event -
//  event could be any one evnt is to just define what makes this funtion trigger
// firstcontainer.addEventListener('click',function(){
//    console.log("using to add event listener to add funtionality when button is being clicked ")
// })

// firstcontainer.addEventListener('mouseover',function(){
//    console.log("using to add event listener to add funtionality when mouse is being hovered on the id firstcontianer ")
// })

// firstcontainer.addEventListener('mouseout',function(){
//    console.log("mouse out of the container")
// })

// // mouse on the contianer funtionality  - works with every thing like key down or up 
// firstcontainer.addEventListener('mouseup',function(){
//    console.log("mouse up when clicked on container")
// })
// firstcontainer.addEventListener('mousedown',function(){
//    console.log("mouse down when clicked on  container")
// })

// example of how we can change the content in the html by an event
// firstcontainer.addEventListener('click', function(){
//    document.querySelectorAll('.container')[1].innerHTML = "<b> We are BOLD <b>";
//    console.log("when button is being clicked");
// })

// now changing and reverting the change when the event is happened by using mouseup and down
// when mouse down change to new one and when up go back to original one 
// ( to go back to original one you either have to store the value in another variable or work by adding new classlist to the selected thing and then removing it as soon as you done )
// eg by classlist.add to add those change and as soon you done classlist.remove to remove those change

// saving the original/previous htmml into the variable to revert bakc to origianl form
// let prevHtml = document.querySelectorAll('.container')[1].innerHTML;
// when mouse up the value chane toi original text
// firstcontainer.addEventListener('mouseup',function(){
//    // it will trigger that revert back change
//    document.querySelectorAll('.container')[1].innerHTML = prevHtml;
//    console.log("reverting back to the original text html when mouse is up ");
// })

// when mouse is down its gonna change the text to new one
// firstcontainer.addEventListener('mousedown',function(){
//    document.querySelectorAll('.container')[1].innerHTML = "<b> We are BOLD <b>";
//    console.log("changing the content of the html to new one when mouse is down");
// })



//arrow funtion
// use to cretae funtion between certain palces of code - helps write funtion without function keyword and also no name funtion
// normal funtion
// function summ(a,b){
//    return a + b;
// }

// // arrow funtion
// summ = (a , b)=>{
//    return a + b;
// }
// will be same output and invocation 

// settimeout and setinterval
// setTimeout - used when you want to fire a event or certian task to be done after a set of time interval - use to scheule the event hppening - works in milisecond

// logkaro = ()=>{
//    document.querySelectorAll('.container')[1].innerHTML = "<b> The set time out is fired after the given interval of time 2 seconds here";
//    console.log("I have log the event fires after the given timeout / timestamp");
// }

// invocation of the fution and creation of it syntax - settimeout(1st arg will be funtion to be run , 2nd  arg will be time after it runs )
// clr = setTimeout(logkaro, 2000);
// syntax -  setTimeout(() => {
   
// }, timeout);




// setInterval 
// if you want a task to run repetedly then the set interval - it will set the no of times the funtion gonna run or event gonna happen
// it will run every time after the given time space / time interval you putted - in case above it will run the event every time after 2 seconds
// it will run until you define the no of times its going to run you can define it by array - [100] or like , 100 it will take it as the no of times.
// logkaro = ()=>{
//    document.querySelectorAll('.container')[1].innerHTML = "<b> The set time out is fired after the given interval of time 2 seconds here";
//    console.log("I have log the event fires after the given timeout / timestamp");
// }

// will return an id to the clr used to help in stopping process to use in clear funtion of the set interval or timeout

// clr = setInterval(logkaro,2000);
// syntax - setInterval(() => {
   
// }, interval);

// use clearInterval(clr)/clearTimeout(clr) to cancel the setInterval/setTimeout  - clr is the value the funtions are returning

// using both at same time 
// logkaro = ()=>{
//    document.querySelectorAll('.container')[1].innerHTML = "<b> The set time out is fired after the given interval of time 2 seconds here";
//    console.log("I have log the event fires after the given timeout / timestamp");
// }

// clr = setInterval(logkaro , 2000);
// clrs = setTimeout(clearInterval(clr), 10000);// cannot work it will imidiately stop the process


// local storage in javascript
// localStorage.setItem(key , value) // its a key value pair - know how to use it very importnat there are many types of storage in javascript
// localStorage.setItem('name' , 'Abhy'); //eg code
// local storage - localstorage.setItem to set an key value pair in your storage , localstorage.getItem to access a stored data in your storage of local files in key value pair
// its also used by many websites to store data on domain - you can store data on domain too 
// what not - dont store too much data and dont store very sensitive data anyone access to your domain will able to see that data
// localstorage.removeitem(itemnake(key)) // will remove the item with the given identifier or key form storage
// localstorage.clear() // will clear your whole storeageof the data  


// Json in javascript
