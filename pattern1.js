for(let r=1;r<=5;r++){
    for(let c=1;c<=5;c++){
        if(r==1 || r==5 || c==1 || c==5){
            document.write("*")
        }
        else{
            document.write("&nbsp&nbsp")
        }
    }
    document.write("<br>")
}