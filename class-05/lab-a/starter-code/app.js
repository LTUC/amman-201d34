//##################### SOLVED 1 #########################
function sum(a, b) { 
  let total = a + b;
  let result = [total, `The sum of ${a} and ${b} is ${total}.`];
  console.log(result);
  return result;
}
testSum(4, 7);
//##################### SOLVED 2 #########################

function multiply(a, b) { //eslint-disable-line
  let total = a * b;
  let result = [total, `The product of ${a} and ${b} is ${total}.`];
  console.log(result);
  return result;
  }
  testMultiply(5,9)

//##################### SOLVED 3 #########################

function sumAndMultiply(a, b, c) { 
  let totalSum = a + b + c;
  let totalMultiply = a * b * c;
  let result = [totalSum,
                totalMultiply,
                `${a} and ${b} and ${c} sum to ${totalSum}.`,
                `The product of ${a} and ${b} and ${c} is ${totalMultiply}.`];
  console.log(result);
  return result;
}
testSumAndMultiply(4,7,5)
//##################### SOLVED 4 #########################
let testArray = [2, 3, 4];
function sumArray(sumArr) {
let sum = 0;
let arrStr = "";
for (let i = 0; i < sumArr.length; i++) {
  sum += sumArr[i];
  arrStr += sumArr[i];
  if (i != sumArr.length - 1) {
    arrStr += ","
  }
}
let result = `${arrStr} was passed in as an array of numbers, and ${sum} is their sum.`;
let answer = [sum, result];
return answer;
}
testSumArray(testArray);

//##################### SOLVED 5 #########################

function multiplyArray(multArr) { //eslint-disable-line

  let mult = 1;
  let arrStr = "";
  for (let i = 0; i < multArr.length; i++) {
    mult *= multArr[i];
    arrStr += multArr[i];
    if (i != multArr.length - 1) {
      arrStr += ","
    }
  }
  let result = `The numbers ${arrStr} have a product of ${mult}.`;
  let answer = [mult, result];
  return answer;
}
testMultiplyArray(testArray);

// //##################### SOLVED 6 #########################

let testDynamicArray = [1,2,3,4,5]; 

function multiplyAnyArray(dynamicArray) { 
  let counterArray = 1
  for (let x=0;x<dynamicArray.length;x++){
    counterArray = counterArray*dynamicArray[x]  
  }
  let arrayResultOut = [counterArray,`The numbers ${dynamicArray} have a product of ${counterArray}.`]
  console.log(arrayResultOut);
  return arrayResultOut;
  
}
testMultiplyAnyArray(testDynamicArray);