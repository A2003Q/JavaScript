/*
1)
Correct the syntax error
 [ 1,7  9  45, ]
  ----> [1,7,9,45]

 ["Str" "alex","moh"
 -----> ["Str", "alex","moh"]

 'the','fox' 'over' lazy, 'dog',  ]
 -----> ['the','fox', 'over', 'lazy','dog']
*/

/*
2
What the index of "Banana","Tomato"  
var fruits=["Tomato","Banana","Watermelon"]
----->1,0
*/

/*
3
Create an array represents your:
1- Favorite Food (5) ---> let food=["pasta","pasta","pasta","pasta","pasta"];
2- Favorite Sport (3) --->let sport=["football","tennis","swimming"];
3- Favorite Movie (4)----> let movie=["Action","Romantic","Comedy"];
*/

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

function firstOfArray(arr){
  return arr[0];
}
console.log(firstOfArray([1,4,5]));

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

function LastOfArray(arr){
return arr[arr.length - 1];
}
console.log(LastOfArray([1,4,5]));

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9];
array.shift();
array.shift();
array.shift();
array.unshift(8);
array.unshift(6);
array.unshift(4);
array.unshift(3);
array.unshift(1);
array.push(10);
console.log(array);


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5,9,-7,3.5];
 
array2.push(10);
array2.unshift(7);
array2.shift();
array2.pop();
console.log(array2);

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

function middleOfArray(arr2) {
    let len = arr2.length;
    if (len % 2 === 0) {
        // even length -> return two middle elements
        return arr2[len/2 - 1] + " and " + arr2[len/2];
    } else {
        // odd length -> return middle element
        return arr2[Math.floor(len/2)];
    }
}
console.log(middleOfArray([1,2,3,4,5,6,7]));
console.log(middleOfArray([1,4,5]) );
 console.log(middleOfArray(["t","u","g","x"]));

 /*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird'];

animals[0]='Zebra';
animals[1]='elephant';
animals.length=2;
console.log(animals);

let nums= [1,2,3,8,9];
nums[0]=5;
nums[1]=-22;
nums[2]=3.5;
nums[3]=44;
nums[4]=98;
nums[5]=44;
console.log(nums);

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/

function indexOfArray(arr,index){
    return arr[index];
}
let nums2= [1,2,3,8,9]
console.log(indexOfArray(nums2,3));
console.log(indexOfArray(nums2,1));
console.log(indexOfArray(nums2,4));

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/

function arrayExceptLast(arr) {
    return arr.slice(0, -1); 
}
let num = [1, 2, 3, 8, 9];

console.log(arrayExceptLast(num));

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/

function addToEnd(arr,num){
    return arr.push(num);
}
let a= [1,2,3,8,9];
addToEnd(a,55);
console.log(a);

/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function sumArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
let n=[1,2,3,8,9];
console.log(sumArray(n));

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function minInArray(arr){
    let i=0;
    let min=1000;
    while(i<arr.length){
        if(arr[i]<min)
            min=arr[i];
        i++;
    }
    return min;

}

let s= [1,2,3,8,9]
console.log(minInArray(s));

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function removeFromArray(arr, e) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === e) {
            arr.splice(i, 1); 
            break;
        }
    }
    return arr;
}

let m = [1, 2, 3, 8, 9];
console.log(removeFromArray(m, 8)); 


/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self

*/

function oddArray (arr){
    let result=[];

  for(let i=0;i<arr.length;i++){
    if(arr[i]%2!=0)
      result.push(arr[i]);
  }
  return result;
}
let d=[1,2,3,8,9] ; 
console.log(oddArray(d));

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function aveArray(arr){
    let sums=0;
   for(let i=0;i<arr.length;i++){
     sums+=arr[i];
   }
    return sums/arr.length;

   
}
let ns= [1,2,3,8,9]
console.log(aveArray(ns)) ;

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function shorterInArray(arr){
    let shortest=12345;
    let shortestE=" ";
    for(let i=0;i<arr.length;i++){
        if(arr[i].length<shortest){
           shortestE=arr[i];
           shortest=arr[i].length;
           }
    }
    return shortestE;
}
let strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
console.log(shorterInArray(strings)) ;

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function repeatChar(str,c){
    let count=0;
    for(let i=0;i<str.length;i++){
     if(str.charAt(i)==c)
        count++;
    }
    return count;
}
let string= "alex mercer madrasa rashed2 emad hala"
console.log(repeatChar(string,"a"));
console.log(repeatChar(string,"z")) ;

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength(arr){
    let r=[];
    for(let i=0;i<arr.length;i+=2){
        if(arr[i].length%2!==0)
            r=arr[i];
    }
    return r;
}
let st= ["alex","mercer","madrasa","rashed2","emad","hala"]
console.log(evenIndexOddLength(st));

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function powerElementIndex(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] ** i);   // power using **
    }

    return result;
}

let ms = [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(ms));

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


function evenNumberEvenIndex(arr){
    let t=[];
    for(let i=0;i<arr.length;i+=2){
        if(arr[i]%2==0)
            t.push(arr[i]);
    }
    return t;
}
let y= [5,2,2,1,8,66,55,77,34,9,55,1];
console.log(evenNumberEvenIndex(y)) ;

