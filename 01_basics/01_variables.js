const accountId = 144553
let accountEmail = "pb.suryam@gmail.com"
var accountPass = "12345"
accountCity = "Pune"

//accountId = 2

accountEmail = "abc@gmail.com"
accountPass = "4321"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPass,accountCity])
