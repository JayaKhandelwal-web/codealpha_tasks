let create_btn = document.getElementById('create');
let read_btn = document.getElementById('read');
let update_btn = document.getElementById('update');
let delete_btn = document.getElementById('delete');

let create_form = document.getElementById('inner1');
let arr = [];

// Add function
const handleAdd = () => {
    let x = document.getElementById('insert_array').value.trim();
    if (x) {
        arr.push(x);
        alert(`Added: ${x}`);
    } else {
        alert('Please enter a value.');
    }
    // Hide the form after adding
    Object.assign(create_form.style, {
        left: '-100%',
        top: '30vh'
    });
    document.getElementById('insert_array').value = ''; // Clear input
};

// Show Create Form
create_btn.addEventListener('click', function () {
    Object.assign(create_form.style, {
        left: '0%',
        top: '30vh'
    });
});

// Read operation
read_btn.addEventListener('click', function () {
    if (arr.length === 0) {
        alert('Array is empty.');
    } else {
        alert(`Array contents:\n${arr.join(', ')}`);
    }
    console.log(arr);
});

// Update operation
update_btn.addEventListener('click', function () {
    const oldVal = prompt('Enter the value to update:');
    if (!arr.includes(oldVal)) {
        alert('Value not found.');
        return;
    }
    const newVal = prompt('Enter the new value:');
    const index = arr.indexOf(oldVal);
    arr[index] = newVal;
    alert(`Updated ${oldVal} to ${newVal}`);
    console.log(arr);
});

// Delete operation
delete_btn.addEventListener('click', function () {
    const delVal = prompt('Enter the value to delete:');
    const index = arr.indexOf(delVal);
    if (index !== -1) {
        arr.splice(index, 1);
        alert(`Deleted ${delVal}`);
    } else {
        alert('Value not found.');
    }
    console.log(arr);
});
