//##################### SOLVED 1 #########################
function sum(a, b) { 
  let total = a + b;
  let result = [total, `The sum of ${a} and ${b} is ${total}.`];
  console.log(result);
  return result;
}
sum(4, 7);
//##################### SOLVED 2 #########################

function multiply(a, b) { //eslint-disable-line
  let total = a * b;
  let result = [total, `The product of ${a} and ${b} is ${total}.`];
  console.log(result);
  return result;
  }
  multiply(5,9)

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
sumAndMultiply(4,7,5)
//##################### SOLVED 4 #########################
let testArray = [2, 3, 4]; 

function sumArray(a, b, c) { 
let totalSum = (a + b + c);
let result = [totalSum, `${a},${b},${c} was passed in as an array of numbers, and ${totalSum} is their sum.`];
console.log(result);
return result;

}
sumArray(testArray[0], testArray[1], testArray[2])

//##################### SOLVED 5 #########################

function multiply(a, b, c) { 
  let total = a * b * c;
  let result = total
  return result;
}
let numbersArray = [2, 3, 4];

function multiplyArray(a, b, c) { 
  let total = multiply(a, b, c);
  let ArrayOut = [total, `The numbers ${a},${b},${c} have a product of ${total}.`];
  console.log(ArrayOut);
  return ArrayOut;
}
multiplyArray(numbersArray[0], numbersArray[1], numbersArray[2])

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