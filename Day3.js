var firstName = "zorro"
var lastName = 'Monkey D.'

if (firstName = "luffy"){
    console.log('future pirate king')
}
else{
    console.log('normal pirates')    
}

// "==" Less strcit method (doesnot verify datatypes)
var number = "10"

if (number == 10){
    console.log ("You can eat choclate")
}
else{
    console.log("Eat healthy fruits")
}

// Example 01 of an verified datatype ==
var loan = 100
var interest = 20
var principle = 3000

if (interest == "20" ){
    principle = principle - loan + loan + interest
}
else{
    console.log("Eat healthy fruits")
}
console.log(principle)

//  "===" stirct method (verifies datatypes)
var number = "20"

if (number === 20){
    console.log ("Get a job")
}
else{
    console.log("Become an enterprnuer")
}

// Example 02 of an unverified datatype ===
var loan = 100
var interest = 20
var capital = 3000
if (interest === "20" ){
    capital = capital - loan + loan + interest
}
else{
    console.log("Error")
}
