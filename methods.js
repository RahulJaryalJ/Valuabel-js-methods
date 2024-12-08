//  Map method


// const newProducts = data.map((element) => {
//   const {clas, name:rate} = element;
//   return {clas, rate}

// })
// console.log(newProducts)

// _______________________________________________

// const filter = data.filter((element) => {
//  return element.number1 == "056-8645508"
// });
// console.log(filter)

// ______________________________________

// const find = data.find((element) => {
//   return element.id<=2; finding through number
//   return element.name.startsWith("john");  finding thorugh string method
// })
// console.log(find);

// _____________________________
// reduce method return reduce to either number, array, object. for deep knowledge check codding addict reduce method.
// important note : reduce can give you number, array, Object

// const arr = [22,43,56, 85, 48, 76, 952, 100855, 22446857, 13776, 00543917037111, 8521] ;
// const arre = [2, 3, 4, 0, 6];

// const sum = arr.reduce((prev, next, index, ar) => {

// console.log(prev)
// console.log(next)
// console.log(index);
// console.log(arre);
//   console.log(ar);
// return prev - next;
// },0)

// console.log(sum)


// reduce with object & array: just keep in mind whatever you pass as inital value it refers to first argument of reduce methods so act accordingly to it (use same kinda refernce syntax)  in call back function. while returning array or object just keep in mind that it will store the result in first argument & will reduce the value into one single value.

// const result = data.reduce((prev, next, index, ar) =>{
//      let value = next.name;
//      prev.name = value;
//      prev.age += next.number1;
//     return prev;
// }, {
//     name: "",
//     age:0
// })

// console.log(result);
// _________________________________________________

// const data = [
//     {
//     name: "kishor" ,
//     clas: "HI-TECH",
//     major: "doest not matter to you",
//     calling: "hello im callin",
//     number: 543974,
//     number1: 5845508,
//     number3: 05645507,
//     numbers:  543917037887,
//     id:4
// },
// {
//     name:"john",
//     number1: 5685413776,
//     id:2
// }
// ];


// for (let i = 0; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     for (let k = 2; k <= 5; k++) {
//        console.log(i,j,k)
//     }
//   }
// }

// _________________________________________


// let ar = "the major city is india hello CITY hello";
// let result = ar.replace("major", "minor")
// console.log(result)

// let caseSensitive = ar.replace(/CITY/, "village")
// let caseSensitive = ar.replace(/city/gi, "village")
// console.log(caseSensitive)
// note: caseinsensitve with using gi


// let string = ar.replace(/major|city/gi, function (x) {
//     return x.toUpperCase();
// })
// console.log(string)

// regex: \bcat\b/g => searching one by one & once matched call function will be called out for each single matched & for regex read whatsapp copy pasate example.

// ____________________________________________________________________

// Array.from 

// const string = "these are the people 3 from my town "
// let arra = Array.from(string);

// console.log(arra);
// console.log(arra.length);
// console.log(arra[0]);



// note: will break space too & add as empty space form (' ') into array [ ]. basically suck the entire string with each character & space too to store in array form.



// FOR DEEP KNOWLEDGE OF ARRAY.FROM USE VIDEO OF CODDING ADDICT

// 1. 
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>

// <body>
//     <div class="text">hi world 4</div>
//     <div class="text">hi world 4</div>
//     <div class="text">hi world 4</div>
//     <div class="text">hi world 4</div>
// </body>
// <script>
//     const divs = document.querySelectorAll(".text")
//     console.log(divs);
//     let divsA = Array.from(divs)
//     console.log(divsA)
// </script>

// </html>


// while fetching nodelist Object from html file or using querySelector(".CLASS") TO get multiple object list we cant perform Map,find,filter methods functions on it but conversion through Array.from we can perform array function over it. 

// while performing these array methods we can use property of item.textContent to do specficTask. 

// 2. 

// length property with curly brackets with call back function to intialize array in variable

// const items = Array.from({length:10}, (_, index) =>{
//     return index;
// })

// console.log(items);

// 3. 

// const items = Array.from({length:20}, (_, index) =>{
//     return index;
// })
// const itemPerPage = 10;
// const page = items.length/itemPerPage;

// const pagination = Array.from({length:page}, (_, index)=>{
      
//     let start = itemPerPage * index;
//     let end = itemPerPage;
//     const item = items.slice(start, start+end)
//         return item ; 
// })
// console.log(pagination);

// PAGINATION FOR pagination check out the video coddingaddict array.from

// you can use Array.from method to create new variable & store specfic amount of items by doing somekinda functionlity in call back function & by acccesing global variable of array.


// _________________________________________________________
// SET METHODS... mainly to avoid duplicate value.

// const a  = [1,2,3,4,5,6,7,8,9,0,7,8,6,5,4,0,1]

// const s = new Set(a)
// const v= s.has(1)
// console.log(v);
// s.add("string")
// console.log(s);
// s.delete("string")
// console.log(s.size);
// const sa = [...s]
// console.log(sa);
// const v = sa.has(1)
// console.log(s);
// console.log(v);

// __________________________________________________ 
// MAP METHODS...  easy to map key values or suitable cause this not override previous value.
 
// const obj1= {
//     1:{name:"kishor"},
//     2:{name:"avinash"}
// }
// console.log(obj1);

// { '1': { name: 'kishor' }, '2': { name: 'avinash' } }

// Map(3) {
//   1 => { name: 'jimmy' },    Note: due to structure we use get method to access property in Map method & use dot notation in object real form.
//   2 => { name: 'don' },
//   3 => { name: 'jimmy' }
// }

// const obj2 = new Map([[ 1, {name:"jimmy"}],
// [2, {name:"don" }],
// [3, {name:"jimmy"}]])

// console.log(obj2.set(4,{name:"positivity"}));
// const value = obj2.get(2)
// console.log(value.name)
// console.log(obj2);
// console.log(obj2.size)


// Map should be in object form. should not be converted in array form cause i dont know how to access its object value in array form. 

// const obja = [...obj2]
// console.log(obja);

// const value= obja[0];
// console.log(value);
// ________________________________________
// let arra = ["hello america", "hello punjab"]

// arra.splice(0,2, "hello world", "hello russian", "hello india" )

// const arr = arra.splice(0,2, "hello world", "hello russian", "hello india" )
// console.log(arr);


// using splicing method we can store delted items in assiging new variables
// All starting through choosen indexing (NOTE: 0 ONLY for index but after count from 1) => clearing first index then delting from it & adding from it.
// &&

//  console.log(arra.join())
//  console.log(arra.join("&"))

//  Note: join returns string by replacing what you mentioned between commas

// ____________________________________________________

// Slice method  will only modify your existed array no adding like splice .
// 2 or 1 values you can define (END POINT NOT INCLUDED).
// In splice three values included cause of adding one.
//  Negative indexing allowed in both cases.
// slice you can use for string too but splice you cant.
//  Slice we use to create new array with modify existed array in new variable but splice only for assigned variable but new variable can hold delted items only.
    // if the data in array form then slice return array & if its in string form then its returns string form 

// const items = ["cat", "rat", "vat", "bat"]

// const string = "hello world"

// const newItems = items.slice(0, 2)
// const newItem1 = items.slice(-3, -1)
// const newItem2 = string.slice(0, 5)
// const newItem3 = string.slice(5)


// console.log(newItems)
// console.log(newItem1)
// console.log(newItem2)
// console.log(newItem3)

// _________________________________________________________________


// const ar = ["e", "g", "je;;", "g"]
// const arr = "string"

// for (let i of arr) {
//     console.log(i);
// }
// console.log(arr.length);

// note: for with of loop can use with both Array & string . it will reprsents item values.

// ____________________________________________________________________

// const arr = [["e", "g", "je", "g"], [1,4,643,3,5,]]
// const arr = "string";

// for (let i in arr) {
    // console.log(i);
// }
// console.log(arr.length);

// Note: for with in loop can use with both Array & string .it will reprsents index starts with 0.

// ___________________________________________________________________


// const ar = [3, 4, 2, 32, 43]

// let value = 0;
// console.log(ar)
// ar.forEach((item, index, arr) => {
// value += item;
// arr[index] += item + 4;
// console.log(arr[index])
// console.log(item);
// console.log("clear log");
// console.log(value)
// });
// console.log(ar)
// console.log(value)

// Note: forEach (FOR EXISTED THINGS) we cant assign Computed value to variables. Mainly play with global(existed) variables with item & index or you can modify existing array with REFERENCE to third parameter. Same like reduce but little change cause of reduce has 4 parameters & reduce value could be assign to variable using return keyword but for each cant.

// __________________________________________________________________

//  Methods of finding object keys & its values

// Object.keys(obj)
// Object.values(obj)
// Object.entries(obj)
// Note : while using these methods we get the array in return of filled respective values or keys & in entries we return array in pair of keys & values. entries kinda like map method where user & value get returned.

// const obj = {
//     name: ["kishor", "yodha", "queen"],
//     AGE: ["kishor", "yodha", "queen"],
//     HI: ["kishor", "yodha", "queen"],
// }


// console.log(Object.values(obj))
// console.log(Object.keys(obj))
// console.log(Object.entries(obj))

// let single = Object.values(obj)

// single = single[0][0]
// console.log(single)

// obj.name.push("hercules")
// console.log(obj)

// NOTE: FOR ADDING USE PUSH TO OBJECT PROPERTY WHOSE IN ARRAY OR TO DELTE USE SPLICE OR SLICE METHOD.
//  TO ADD PROPERTY IN OBJECT USE DOT NOTATION
// __________________________________________________________


// NOTE:Length property gave me headache last time. using length property we get the value of no of items by destructing or directly using keyword of it & assign to obj  specfic property which has array values;

// const obj = {
//     name: ["kishor", "yodha", "queen","hello"],
//     AGE: ["kishor", "yodha", "queen"],
//     HI: ["kishor", "yodha", "queen"],
// }

// const { AGE:  { length: noOfItems }
// } = obj;
// const {HI:BYE} = obj;
// console.log(BYE)
// console.log(noOfItems)
//  Note: using length(keyword) property we can do further destructing or assign its value to further variable. Make sure you always put length in curly brackets while not using array.length method so while destructing length property of array its method get invoked & return its length values.

// console.log(noOfItems);
// const {length:kishor} = obj.name   
// const {length} = obj.name   
// either you can assign length value to further variable or just use length keyword like destrucing.
// length kindA Keyword & after it assign length property  of to length variable 
// console.log(kishor)
// ______________________________________________

// ADDING prototypeMEthODS TO ARRAY & OBJECTS : NOTE : TO WORK WITH STRING YOU HAVE TO USE ARRAY.FROM METHOD TO CONVERT STRING INTO ARRAY FORM FIRST THEN APPLY PROTOTYPE METHODS TO SORT IT OUT OR USE FOR STRING USE BUILT IN METHOD with .reverse() method.

// FOR RETURNING NEW Array USING NEW VARIABLE. its just reversing values to new variable.

// Array.prototype.myReverse = function () {

//     let newArray = [];
//     for (let i = this.length - 1; i >= 0; i--) {
//         newArray.push(this[i])
//     }
//     return newArray;
// }

// arr = [1, 2, 4,343,434343,23244,3434,32,232];
// const hey = arr.myReverse();
// console.log(hey)

// from above we need to assign its value to new variable

// ____________________________________________________

// with while loop: Modifying without assiging new variable or using built method rule
                    // this time we sorting values in desceding order
// Array.prototype.mySorting = function () {
//     let swap = true;
//     while (swap) {
//         swap = false;
//         let temp;
//         for (let i = 0; i <= this.length - 1; i++) {
//             if (this[i] < this[i + 1]) {
//                 temp = this[i + 1];
//                 this[i + 1] = this[i];
//                 this[i] = temp;

//                 swap = true
//             }
//         }

//     }
//     return this;
// }

// console.log(arr.mySorting());

//  NOTE: NO NEED TO ASSIGN IN ABOVE WAY OF COMPUTATION
// every loop change the position of items in array if if conditon become true. just keep in mind if swap not happened a single time then value of swap wont change means while itertion willnot perform.one swap of one full iteration is enough to change its values.

// ______________________________________________________

// WitH using for loop too OR BUBBLE SORT TOO

// Array.prototype.mySorting = function () {
//     let temp;
//     for (let j = 0; j <= this.length - 1; j++) {
//         for (let i = 0; i <= this.length - 2; i++) {
//             if (this[i] < this[i + 1]) {
//                 temp = this[i + 1];
//                 this[i + 1] = this[i];
//                 this[i] = temp;
//             }
//         }
//     }
//     return this;
// }
// arrr =  [  2, 4, 343, 434343, 23244, 3434, 1]

// let arr = "string"
// arr = Array.from(arr);
// console.log(arrr.mySorting());

// arr.mySorting();
// console.log(arr +"hello")


//  Future project: FOR RETURNING SAME ARRAY if possible try to find a logic with dsa guy

// _______________________________________________________

// SORTING numbers WITH BUILT METHODS . 
        // you also can assign its value to new variable. 

// arr = [1, 2, 4, 343, 434343, 23244, 3434, 32, 232]

// const d = arr.sort((a,b) => b-a);    
//  arr.sort((a,b) => b-a);    
// for descending 
// arr.sort((a,b)=> a-b)
// for ascending 
// console.log(d);
// ________________________________________
//    for string cases??  FOR BELOW MENTIONED case USE Array.from(string) method first

//  SORTING "STRING" with PROTOTYPE methodS;
// __________________________________________

// Reverse method : just for reversing the order with number & string but first convert string to array;

// const string = "string"
// console.log(Array.from(string).reverse())
// const no = [1,2,3,5]
// console.log(no.reverse());

// _______________________________________________________

// Substring method (2 parameter) meant fo string method. just to sub-string the value of string & return string. (just to create portion of string value) 

// const value = "string-543"

// console.log(value.substring(1));
// console.log(value.substring(1, 4));

// Note: index value of string starts with 0.it took two index but ending is not included but if it takes one index then from that index to end it will all included. 

// ______________________________________________________ 

// Split method  (2 parameter) 

// apply on string & return array by mentioing the joint & you can limit there word by using using second parameter but they will return in array form. 


// let array = "how are you how are you how are you how are you how are you how are you"
// let array = "how are you yes madam"

//  let value = array.split("you")
//  let value = array.split(",")
//  let value = array.split("")
//  let value = array.split("you", 2)
// console.log(value);

// substring, spilt, Array.from, splice, slice

// second parameter for just limiting the number that meant how many word you actually mentioned to get back.

// Note: split method just convert string into array but as compare to Array.from() you can specfic symbol in split method to divide it from there so then this symbol will be replaced by , & can use parameter to limit the word value by just mentioing it. 

// important substring & spilt can work in same way but substring meant for small string to divide & split you can use to divide bigger string to array first & after using index or join method you can choose specfic words too. 

// ______________________________________________

// TRIM method : used to trim the begining & ENding of value by cutting whitespaces . mainly used to validate the user input so to remove the silly mistakes done by user while giving inputs.

// let value = "   hello world  ";
// console.log(value);
// console.log(value.trim());

// _______________________________________ 

// spread operator, with objects & array

// const array = [1,2,"e", 5]
// const array1 = [array, "jello"] 
// const array1 = [...array, "jello"] 
// console.log(array1);
  
// with objects  

// const obj = {
//     name: "kishor",
//     age: "secured"
// }

// const obj1 ={...obj, obj};
// const obj1 = obj;
// console.log(obj1);

// note: spread is just to spread elements in array but always use spread (... dots) inside array bracketes if its array [ ]. or incases of objects always use curly brackets {}. its just spread to the values inside of specfic data types symbols. 

// ______________________________________________ 

// Rest operator 

// function sum(x,  ...rest){
//      return rest.map((item) =>{
//          return item.name  = "kashmir";
//      });
// }

// const s = sum(2, {name:"kish0r", ager:"secured"});
// const s = sum(8,2,3);
// console.log(s)
// sum(2, [[2,3,4,3],[3,4,32,]]);


// rest operator we use inside function parameter to grab the value of function arguments. after we can run array methods over it . no need to declare any Symbol of array & objects over it. it works same with just declaring ...dots inside function paramas. 

// imporatant note: the way you passed the arguments as aray form or object form it matters FOR REST OPERATOR TO GRAB THE VALUES. 
// ________________________________________________ 

