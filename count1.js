let v=0
function increment(){
    v++
    document.getElementById('count').innerHTML=v
}
function decrement(){
    if(v>0){
    v--
    document.getElementById('count').innerHTML=v
}
}
function reset(){
    v=0
        document.getElementById('count').innerHTML=v
    
}