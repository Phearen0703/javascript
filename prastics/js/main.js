// let openBtn = document.querySelector("#openModal");
// openBtn.addEventListener("click", ()=>{
//     let modal = document.querySelector("#modal");
//       modal.style ="display:block"
//     let modalContainer = document.querySelector(".modal-container");
//     modalContainer.style = "animation: float-in 1s;"
  
// })


// let closeBtn = document.getElementById("bnt-close");
// closeBtn.addEventListener('click', () => {
//     let modal = document.querySelector("#modal");
//     let modalContainer = document.querySelector(".modal-container");
//     modalContainer.style.animation = "float-out 1s";
//     setTimeout(() => {
//         modal.style.display = "none";
//     }, 900);
// });

// let icon = document.querySelector("#icon");
// let change = true;

// icon.addEventListener("click", () => {
//     let openAside = document.querySelector("aside");

//     if (change) {

//         openAside.style.display = "block";
//         openAside.style.animation = "float-left 1s";
//     } else {

//         openAside.style.animation = "close 1s";
//         setTimeout(() => {
//             openAside.style.display = "none";
//         }, 900); 
//     }

//     change = !change;
// });

// window.addEventListener("load", () => {
//     const loader = document.querySelector(".loader");
//     loader.style.visibility = "hidden";

//     loader.addEventListener("transitionend",()=>{
//         loader.remove();
//     })
// });

// //try catch in js

// try{
//     document.getElementsByTagName("p");

//     console.log("Hello");

// }catch{
//     console.log("I'm Sad");
// }


let username = document.querySelector("#username");
let password = document.querySelector("#password");
let btnlogin = document.querySelector("#btnlogin");
let gender = document.getElementsByName("gender");
console.log(gender);

btnlogin.addEventListener("click",(event)=>{
    event.preventDefault();
    for(input of gender){
        if(input.checked){
            console.log(input.value);
        }
    }
    console.log(username.value +" "+password.value);
});

let white = document.querySelector("#white");
let dark = document.querySelector("#dark");

white.addEventListener("change", ()=>{
    document.body.style = "background: white; color: black"
});
dark.addEventListener("change", ()=>{
    document.body.style = "background: black; color: white"
})

