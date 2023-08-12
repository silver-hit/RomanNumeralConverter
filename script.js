
let romanConverter = document.getElementById("arab-to-roman")

function convertToRoman(num) {
    let numStr;
    let romanNum;
    let firstChar;
    let secondChar;
    let thirdChar;
    let fourthChar;
 /*
    if(num < 1 || num > 3999 || isNan == true) {
        return "Enter a valid number between 1 and 3999."
    }
*/
    numStr = num.toString()
    
   
      switch(numStr[numStr.length - 1]) {
        case "1": firstChar = "I";
        break;
         case "2": firstChar = "II";
        break;
        case "3": firstChar = "III";
        break;
        case "4": firstChar = "IV";
        break;
        case "5": firstChar = "V";
        break;
        case "6": firstChar = "VI";
        break;
        case "7": firstChar = "VII";
        break;
        case "8": firstChar = "VIII";
        break;
        case "9": firstChar = "IX";
        break;
        default: firstChar = "";
        break;
      } 
   
       switch(numStr[numStr.length - 2]) {
         case "1": secondChar = "X";
         break;
         case "2": secondChar = "XX";
         break;
         case "3": secondChar = "XXX";
         break;
         case "4": secondChar = "XL";
         break;
         case "5": secondChar = "L";
         break;
         case "6": secondChar = "LX";
         break;
         case "7": secondChar = "LXX";
         break;
         case "8": secondChar = "LXXX";
         break;
         case "9": secondChar = "XC";
         break;
         default: secondChar = "";
       }
   
       switch(numStr[numStr.length - 3]) {
         case "1": thirdChar = "C";
         break;
         case "2": thirdChar = "CC";
         break;
         case "3": thirdChar = "CCC";
         break;
         case "4": thirdChar = "CD";
         break;
         case "5": thirdChar = "D";
         break;
         case "6": thirdChar = "DC";
         break;
         case "7": thirdChar = "DCC";
         break;
         case "8": thirdChar = "DCCC";
         break;
         case "9": thirdChar = "CM";
         break;
         default: thirdChar = "";
         break;
       }
   
     switch(numStr[numStr.length - 4]) {
       case "1": fourthChar = "M";
       break;
       case "2": fourthChar = "MM";
       break;
       case "3": fourthChar = "MMM";
       break;
       default: fourthChar = "";
       break;
     }
   romanNum = fourthChar + thirdChar + secondChar + firstChar;
   
    return romanNum;
   }
   romanConverter.addEventListener("click", e => {
    e.preventDefault();// Prevent the default form submission behavior
  
    let input = document.getElementById("number-box").value
    let output = convertToRoman(input); 
  
    let outBox = document.getElementById("roman-numeral-box");
    outBox.innerText = output; // Update the content of the "roman-numeral-box" div with the converted Roman numeral
  }, false);



   
 




   