const accountId = 10245678
let accounEmail = "la7410@dseu.ac.in"
var accountPass = "12345" //problem of scope
accountCity = "Gurgaon" // ho skta h but use ni krna

let accountState

// accountId = 4
accounEmail = "lakshay"
accountPass = "09876"
accountCity = "gurugram"

console.log(accountId);

console.table([accountId, accounEmail, accountPass, accountCity, accountState])


/*
Dont use var in js because of issue in block scope and functional scope
*/