//no return no argument
function Divisible() {
 if (num % 3 == 0) {
  let a=num;
  for(let i=1;i<=10;i++){
    console.log("Divisible by 3");
  } 
  console.log(a*i)
}

let num = parseInt(prompt("Enter a number"));
Divisible()




//with argumnet no return
/*function Divisible(num) {
 
  if (num % 3 == 0) {
    console.log("Divisible by 3");
  } else {
    console.log("Not divisible by 3");
  }
}
 let num = parseInt(prompt("Enter a number"));
Divisible(num)*/



//no argumnet and return
/*function Divisible() {
  let num = parseInt(prompt("Enter a number"));
  return num % 3 === 0 ? "Divisible by 3" : "Not divisible by 3";
}

console.log(Divisible());*/






//return with argument
function Divisible(a) 
{
  if(a%3==0){
    console.log("divisibe by 3");
let num=a;
for(let i=1;i<10;i++){
  console.log(num*a)
}
else{
  console.log("not divisibe");
}


  }
  let
  


  



