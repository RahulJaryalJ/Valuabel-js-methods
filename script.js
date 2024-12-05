//     const products = [
//         {
//             id: 1,
//             name: "apple"
//         },
//         {
//             id: 1,
//             name: "dog"
//         },
//         {
//             id: 1,
//             name: "cate"
//         },
//         {
//             id: 2,
//             name: "banana"
//         },
//         {
//             id: 2,
//             name: "racist"
//         },
//         {
//             id: 3,
//             name: "chilly"
//         },
//         {
//             id: 3,
//             name: "kuku"
//         }
//     ];

//     const buttons = [ 
//         {
//             id:1,
//             name:"<<"
//         },
//         {
//             id:1,
//             name:"1"
//         },
//         {
//             id:2,
//             name:2
//         },
//         {
//             id:3,
//             name:3
//         },
//         {
//             id:2,
//             name:">>"
//         }

//     ]

//     let items = new Set(products.map((item) => {
//         return item;
//     })
//     );
//     const data = [...items]


//     // console.log(fItem);
//     const form = document.querySelector("form")

//     form.addEventListener("submit", (e) => {
//         e.preventDefault();
//         const value = document.querySelector("#no")
//         let input = Number(value.value);
//         const fItem = data.filter((item) => {
//             return item.id == input;
//         });
//         display(fItem);

//     })
//     //
//     function display(a) {

//         const dItems = document.querySelector(".items")
//         dItems.innerHTML = a.map((item) => {
//             const { id, name } = item;
//             return `<div class="hi"  > ${name} </div>`
//         }).join('');
//     }

// const btns = [...new Set(buttons.map((btn)=>{
//     return btn;
// }))
// ];

// const bottn = document.querySelector(".btns");

// bottn.innerHTML = btns.map((btn)=>{
//     const {id,name} = btn;
//     return (
//         `<button class='btn' onclick = 'myFunction(${id}) '> ${name} </button>` )
// }).join("");

//  function myFunction(a) {
//     console.log("btnShw");
//     const fItem = data.filter((item) => {
//         return item.id == Number(a);
//     });
//     display(fItem);
// }
// // btnShow()

// // display(btns);


