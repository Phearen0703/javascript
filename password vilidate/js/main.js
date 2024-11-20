const form = document.querySelector("form");
const pwdinput = document.querySelector("#password");

form.addEventListener("keyup",()=>{
   if(pwdinput.value.length >= 8){
    const minChar = document.querySelector("#minChar");
    minChar.style = "color : green";
   }else{
    minChar.style = "color : black";
   }

   const LowercaseChar =  /^[a-z]+$/;
   if(LowercaseChar.test(pwdinput.value)){
    const LwCase = document.querySelector("#lwCase");
        LwCase.style="color : green";
   }

   const UperCaseChar = /^[A-Z]+$/;
   if(UperCaseChar.test(pwdinput.value)){
      const UpCase = document.querySelector("#upCase");
         UpCase.style="color : green";
   }

})