let now = new Date()
let day = now.getDate()
let month = now.getMonth() <10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1
let year = now.getFullYear()
let hours = now.getHours().toFixed(0)
let minutes = now.getMinutes().toFixed(0)

let date1 = `${year}/${month}/${day} ${hours}:${minutes}`
let date2 = `${day}-${month}-${year} ${hours}:${minutes}`
let date3 = `${day}/${month}/${year} ${hours}:${minutes}`


console.log(date1);
console.log(date2);
console.log(date3);