/* no return ,no argument

function sumNum(){

let arr = [1, 2, 3, 4, 5];  
let sum = 0;
 for (let i = 0; i < arr.length; i++){
  sum += arr[i];
}
console.log(sum);
}
sumNum()*/





/*with argumnet with return
function sumNum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let arr = [1, 2, 3, 4, 5];
console.log(sumNum(arr)); // Output: 15*/





//with argumnet no return 
/*function sumNum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

const arr = [1, 2, 3, 4, 5];
console.log(sumNum(arr)); // Output: 15*/






//no argumnet with return 
function sumNum() {
  let arr = [1, 2, 3, 4, 5]; // array inside the function
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumNum()); // Output: 15
