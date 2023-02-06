const textInput = document.querySelector("#text");
const sclussel = document.querySelector("#schlussel");
const encryptBtn = document.querySelector("#encrypt");
const decryptBtn =
document.querySelector("#decrypt"); 
const result = document.querySelector("#result");


encryptBtn.addEventListener("click",()=> {

    result.innerHTML =  caesarEncrypt(textInput.value, Number(sclussel.value));
})

decryptBtn.addEventListener("click",()=> {
    result.innerHTML = caesarEncrypt(textInput.value, - Number(sclussel.value));
})

function caesarEncrypt(textInput, sclussel) {

    let encrypted = "";

    for (let i = 0; i < textInput.length; i++) {

      // Convert the character to its ASCII code
      let charCode = textInput.charCodeAt(i);
  

      // Check if the character is a letter (uppercase or lowercase)
      if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        charCode += sclussel;

        if (charCode > 90 && charCode < 97) {
          charCode = charCode - 26;
        }
        else if (charCode > 122) {
          charCode = charCode - 26;
        }
      }

      encrypted += String.fromCharCode(charCode);
    }
    return encrypted;
  }

  console.log(caesarEncrypt("a", +3));


