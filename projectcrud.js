let baseurl="http://localhost:3000/products";
const getallproduct=async()=>{


    try{
        let res=await fetch(baseurl);
        let data=await res.json();
        let product=document.getElementById("products");
        product.innerHTML=data.map((e)=>{
            return`
            <h1>id:${e.id} </h1>
            <h1>title:${e.title} </h2>
            <h1>price:${e.price} </h1>
            
            `
        })
        

    }catch(error){
        alert(error);
    }
}
const addproduct=async()=>{
    let title=document.getElementById("title").value ;
    let price=document.getElementById("price").value ;
    console.log(title);
    try{
        await fetch(baseurl),{
            method:"POST",
            headers:{
                "content-type":"application/json"
        },
            body:JSON.stringify((title,price))
        }

        }catch (error){

        }
    }

    const updatedata=async()=>{
        let id=document.getElementById("id");
        let title=document.getElementById("utitle");
        let price=document.getElementById("uprice");

        try{
            await fetch(${baseurl}/${id},{
                method:"PUT",
                headers:{
                    "content-Type":"application/json"
                },
                body:JSON.stringify((title,price))
            });
            alert("update")
            getallproduct();
            
        } catch (error) {
            console.log(error);
        }
    }

    const deletedata=async()=>{
        let id=document.getElementById("id").value;
        try{
            await fetch(${baseurl}/$(id),{
                method:"DELETE"
            });
            alert("deleted");
            getallproduct();

        } catch (error) {
            console.log(error)
        }
    }