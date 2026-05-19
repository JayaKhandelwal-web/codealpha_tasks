
        let user_name=["email1","email2","email3","email4","email5","email6","email7","email8","email9","email10"]
        let user_pass=["pass1","pass2","pass3","pass4","pass5","pass6","pass7","pass8","pass9","pass10"]

        const login_user=()=>{
            let user_input_email=document.getElementById('email').value
           // let found=false;
        //     user_name.map((e)=>{
        //         if(e===user_input_email){
        //             alert('value match')bn 
        //             found=true;
        //         }
        //         if(!found){
        //             alert("not found")
        //         }
        //     })
        // }
            console.log(user_input_email);
            let ind=user_name.findIndex(e=>e===user_input_email)
            console.log(user_pass[ind]);
            if(user_input_email==user_name[ind] && user_input_email==user_pass[ind]){
                console.log("login")
            }}

   
            