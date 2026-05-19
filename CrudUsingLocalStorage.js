let id="no";
readData();

function manageData(){ 
    document.getElementById('msg').innerHTML="";
    let name=document.getElementById('name').value.trim();

    if(name==''){
        document.getElementById('msg').innerHTML='Please enter your name';
    } else {
        if(id== 'no'){
            let arr=getCrudData();
            if(arr==null){
                let data =[name];
                setCrudData(data);
            } else {
                arr.push(name);
                setCrudData(arr);
            }
            document.getElementById('msg').innerHTML='Data added';
        } else {
            let arr = getCrudData();
            arr[id]=name;
            setCrudData(arr);
            document.getElementById('msg').innerHTML='Data updated';
            id="no";
        }

        document.getElementById('name').value="";
        readData();
    }
}

function readData(){
    let arr=getCrudData();
    if(arr!=null){
        let html="";
        let sno=1;
        for(let k in arr){
            html+=`<tr>
                <td>${sno}</td>
                <td>${arr[k]}</td>
                <td>
                    <a href="javascript:void(0)" onclick="editData(${k})">Edit</a> |
                    <a href="javascript:void(0)" onclick="deleteData(${k})">Delete</a>
                </td>
            </tr>`;
            sno++;
        }
        document.getElementById('root').innerHTML=html;
    }
}

function editData(rid){
    id=rid;
    let arr=getCrudData();
    document.getElementById('name').value=arr[rid];
}

function deleteData(rid){
    let arr=getCrudData();
    arr.splice(rid,1);
    setCrudData(arr);
    readData();
}

function getCrudData(){
    return JSON.parse(localStorage.getItem('crud'));
}

function setCrudData(arr){
    localStorage.setItem('crud', JSON.stringify(arr));
}