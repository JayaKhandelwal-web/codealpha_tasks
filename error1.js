console.log("error handling")

try{
    x=12
    console.log(x)
}
catch(error){
    throw new Error("x ko define karo")
}
finally{
    console.log("program finish")
}
let p=new Promise((accept,reject)=>{
    let car = fetch("https://fakestoreapi.in/api/products");
    if(car){
        car.then((e)=>{
                   accept(e.json());

        })

    }
    else{
        reject("reject")
    }
        })
        let prodata=document.getElementById("data")
        
        p.then((e)=>{
            let data = e.products;
            console.log(data)
            prodata.innerHTML=data.map((e1)=>{
                return`
                <div id="card">
                <h1>BRAND:${e1.brand}</h1>
                <h2>TITLE:${e1.title}</h2>
                <h2>CATEGORY:${e1.category}</h2>
                <p>DESCRIPTION:${e1.description.slice(0,200)}</p>
                <img src="${e1.img}"  alt="image"><br>
                <strong>price:${e1.price}</sttong><br>
                <button>ADD</button>
                </div>

                `
            })
            

            })