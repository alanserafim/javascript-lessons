let year = Number(window.prompt("Enter birth year"))
let now = 2023

if((now - year) >=18) console.log(`You are ${now - year}. You are old enough to drive`);
else console.log(`You are ${now - year}. You will be allowed to drive after ${Math.abs( (now - year) - 18) } years`);