let num = parseInt(prompt("Enter a number:"));

if (num % 2 === 0) {
    console.log(num + " is even.");
    console.log("Multiplication Table of " + num + ":");
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
} else {
    console.log(num + " is odd.");
    console.log("Cube of " + num + " is: " + (num ** 3));
}
