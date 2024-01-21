let month = "june"

switch(true){
    case month == "january" || 
         month == "march" || 
         month == "may" ||
         month == "july" ||
         month == "august" ||
         month == "october" ||
         month == "december":
        console.log(`${month} has 31 days.`)
        break;
    case month == "april" || 
         month == "june" ||
         month == "september" ||
         month == "november":
        console.log(`${month} has 30 days.`)
        break;
    case month == "february":
        console.log(`${month} has 28 days.`)
        break;
    default: 
        console.log(`${month} is not a valid month.`)
}