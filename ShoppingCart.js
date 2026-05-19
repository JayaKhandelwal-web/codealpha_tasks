let renderData=document.querySelector(".renderData")

 async function getData(){
 const res= await fetch("https://fakestoreapi.com/products")
 const data = await res.json();
 
 
 data.map((e)=>{
let createImg= document.createElement("img");
createImg.setAttribute("src",e.image);
renderData.appendChild(createImg);
 })
}
getData();
