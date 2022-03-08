function isEvenlyDivisible(num1,num2) {
 if (num1%num2===0) {
   return true;
 
}else return false;
}
function halfSquare(num1) {
  num1 = num1 *num1 /2;
return num1;
}
function isLong(str) {
if (str.length>15||str.length==15) {
  return true;
} else {
  return false;
}



}


function exclaim(str) {
let str1 = "";
for (let i = 0; i < str.length; i++) {
  if(str[i]!=="!"){
  str1+=str[i];
}
}
return str1+"!";
}

function countWords(str) {
let strI = str.split(" ");

return strI.length;

}

function containsDigit(num) {
if (num.length>1) {
  return true;
}
 if (num!==0-9) {
   return false;
 }
if (num===0-9) {
  return true;
}
}

function containsLowerCase(Str) {
if (Str.length>1&&Str === "0-9"){
var Str =  Str.toLowerCase();
return  true;
}else return false;
}
function containsUpperCase(Str) {
if (Str.length>1) {
  Str = Str.toUpperCase();
return true;
}else return false;



}

function containsNonAlphanumeric(str) {
  let lowerCaseLetters = "!@#$%^&*()";

  for(let i = 0; i < str.length; i++){
     if(str[i] === 'a' || str[i] === 'b' || str[i] === 'c' || str[i] === 'd' || str[i] === 'e' || str[i] === 'f' || str[i] === 'g' || str[i] === 'h' || str[i] === 'i' || str[i] === 'j' || str[i] === 'k' || str[i] === 'l' || str[i] === 'm' || str[i] === 'n' || str[i] === 'o' || str[i] === 'p' || str[i] === 'q' || str[i] === 'r' || str[i] === 's' || str[i] === 't' || str[i] === 'u' || str[i] === 'b' || str[i] === 'a' || str[i] === 'b' || str[i] === 'v' || str[i] === 'w' || str[i] === 'x' || str[i] === 'y' || str[i] === 'z'){
       return false;
     }

    if(lowerCaseLetters.includes(str[i])){
      return true;
    }

  }

  return false;
}





function containsSpace(Str) {
if (Str!==" ") {
  return false;
}

}

function digits(num) {

  let newArr = [];// conver to string
if (num===0) {
  for (let i = 0; i < num.length; i++) {
   num[i]+"";
    newArr += ""+num[i];
    
  }
return newArr;
}
}






function truncate(Str) {
if (Str.length==15) {
 let str = "";
  for (let i = 0; i < 8; i++) {
    str += Str[i];
 
  }
  return str +"...";
}else if(Str.length >= 15){
  let str = "";
  for (let i = 0; i < 8; i++) {
    str += Str[i];

}
return str+"...";
}else if (Str.length<15){
return Str;

}
}

function isValidPassword() {
}

function onlyPunchy() {
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}