const now = new Date()
console.log(now)

console.log("year: ", now.getFullYear()) // 2020
console.log("month: ", now.getMonth()) // 0, because the month is January,  month(0-11)
console.log("date/day of the month: ", now.getDate()) // 4, because the day of the month is 4th,  day(1-31)
console.log("day of the week", now.getDay())
console.log("hours: ", now.getHours())
console.log("minutes: ", now.getMinutes()) // 56, because the time is 00:56:41
console.log("seconds: ", now.getSeconds()) // 41, because the time is 00:56:41
