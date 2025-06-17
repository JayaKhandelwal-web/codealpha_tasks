let create_btn = document.getElementById('create');
let read_btn = document.getElementById('read');
let update_btn = document.getElementById('update');
let delete_btn = document.getElementById('delete');

let create_form = document.getElementById('inner1');
let arr = [];

const handeladd = () => {
    alert('add');
    let x = document.getElementById('insert_array').value;
    console.log(x);
    arr.push(x);
    
    // FIX: Correct syntax for Object.assign
    Object.assign(create_form.style, {
        left: '-100%',
        top: '30vh'
    });
};

create_btn.addEventListener('click', function () {
    Object.assign(create_form.style, {
        left: '0%',
        top: '30vh'
    });
});

read_btn.addEventListener('click', function () {
    alert("Read operation");
    console.log(arr); // Display array contents
});

update_btn.addEventListener('click', function () {
    alert("Update operation");
});

delete_btn.addEventListener('click', function () {
    alert("Delete operation");
});
