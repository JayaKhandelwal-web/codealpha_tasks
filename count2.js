let v=0
function increment(){
    
    v++
    document.getElementById('count').innerHTML=v
    if(a%2==0){
        count.style.color="red"    }
}
function decrement(){
    v--
   
    
 if(v>=0){
    document.getElementById('count').innerHTML=v
        count.style.color="red"    }
    else{
     count.style.color="blue"  
}
}