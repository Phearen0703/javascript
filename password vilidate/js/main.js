const form = document.querySelector("form");
const pwdinput = document.querySelector("#password");

form.addEventListener("keyup", () => {
  const minChar = document.querySelector("#minChar");
  const LwCase = document.querySelector("#lwCase");
  const UpCase = document.querySelector("#upCase");
  const SpeChar = document.querySelector("#speChar");
  const NumChar = document.querySelector("#numChar");

  if (pwdinput.value.length >= 8) {
    minChar.style = "color : green";
  } else {
    minChar.style = "color : black";
  }


  const LowercaseChar = /[a-z]/;
  if (LowercaseChar.test(pwdinput.value)) {
    LwCase.style = "color : green";
  } else {
    LwCase.style = "color : black";
  }

  const UperCaseChar = /[A-Z]/;
  if (UperCaseChar.test(pwdinput.value)) {
    UpCase.style = "color : green";
  } else {
    UpCase.style = "color : black";
  }
  
  const specialChar = /[!@#$%^&*(),.?":{}|<>]/;
  if(specialChar.test(pwdinput.value)){
    SpeChar.style = "color : green";
  }else{
    SpeChar.style= "color : black";
  }

   const numberChar = /[0-9]/;
   if(numberChar.test(pwdinput.value)){
      NumChar.style = "color : green";
   }else{
      NumChar.style = "color : black";
   }

});
