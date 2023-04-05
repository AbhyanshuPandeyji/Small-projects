// var a = 10;

// function adda(a){
//     for(let i=0;i<10;i++){
//         a = a + i; 
//     }
//     // return should be outside the function
//     return a;
// }


// let value = adda(a);
// console.log(value);
 

//From method
// string to array
// Array.from('hello'); 

// let s = new Set([1,2]);

// s;
// Array.from(s);


// // mapping an initially given array to new one
// const arr = [1,2,3]

// Array.from(arr,it=>it*2);

// console.log(arr);

// sorting an array of string in js
// let strArr = [ 's' , 'd' , 'f' , 'a' , 'w' , 'r' , 't'  , 'b' , 'c'];

// // use camel case to define the variables make it more readable
// strArr.sort();
// // for descending order
// strArr.reverse();

// console.log(strArr);


// sorting array of numbers in an array
// let numArr = [ 2 ,23 ,55 ,66 ,78 ,45 , 4 , 12 , 1  , 11 , 34 , 3 ,246 , 334 , 62];
// // will sort based on the first number of the array
// // numArr.sort();
// // to sort based on the actual numbers value
// // to sort in ascending order  = sorting works 1st value compare to second value in here we are comparing the first value in the array to second 
// // if the resultant is positive then the b is sorted before a and if the value is negative then the a is sorted before b and if the resultant is zero no changes
// // return a-b is the logical approach because sort function count the values as string and works as a dictionary so value should be sorted resultant before sorted 
// // if a-b = -ve then replace a to b if +ve then remain same (a// is first value in array of the index and , b // value after the first in the index )
// // numArr.sort((a,b)=> a-b);

// // now for descending order 
// // numArr.sort((a,b)=> b-a);

// // for if the negative number exists
// // this logic works for the negative numbers to how ?
// numArr.push(-10);
// numArr.sort((a,b)=> a-b);
// console.log(numArr);


// just a sorting function in the w3s schools
// can be good to create a stair in the javascript
// const myArr = [
//     {name:"X00",price:100 },
//     {name:"X01",price:100 },
//     {name:"X02",price:100 },
//     {name:"X03",price:100 },
//     {name:"X04",price:110 },
//     {name:"X05",price:110 },
//     {name:"X06",price:110 },
//     {name:"X07",price:110 },
//     {name:"X08",price:120 },
//     {name:"X09",price:120 },
//     {name:"X10",price:120 },
//     {name:"X11",price:120 },
//     {name:"X12",price:130 },
//     {name:"X13",price:130 },
//     {name:"X14",price:130 },
//     {name:"X15",price:130 },
//     {name:"X16",price:140 },
//     {name:"X17",price:140 },
//     {name:"X18",price:140 },
//     {name:"X19",price:140 }
//   ];
  
//   myArr.sort( (p1, p2) => {
//     if (p1.price < p2.price) return -1;
//     if (p1.price > p2.price) return 1;
//     return 0;
//   });
  
//   let txt = "";
//   myArr.forEach(myFunction);
  
//   function myFunction(value) {
//      console.log(txt += value.name + " " + value.price + "<br>"); 
//   }

