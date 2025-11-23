// //Functions

// console.log(1 + 1)

// //Regular Function
// function firstName(){
//     console.log("Hello World")
// }
// firstName()



// function multiply(a, b){
//     console.log(a*b)
// }
// multiply(6, 5)


//Named function

// const lastName = function(){
//     console.log("Budhahtoki")
// }

// lastName()


// //IFEE
// (function hello(){
//     console.log("Hi!")
// })()

// function fullName(name="Your name here"){
//     console.log("Hello" + name)
// }

// fullName("Bishnu") 

// function fullName(name="Your name here"){
//     console.log(`Hello ${name}`)
// }

// fullName("Bishnu") 


// const data2=(age=0)=>{
//     console.log(age + " years old")
// }
// data2()




// let schools = [1,2,3,4,5,6,7,8,9,10]

// schools.forEach((school)=>{
//     console.log(school)
// })


// let names =["Bishnu", "Sita", "Krishna", "Parbati"]

// let alias = ["Toran",]

// names.forEach((name)=>{
//    alias.push(name +" Budhahtoki")
// })

// console.log(alias)


// let names =["Bishnu", "Sita", "Krishna", "Parbati"]

// let alias = names.map((name)=>{
//     return name + " Budhahtoki"
// })

// console.log(alias)




const colleges = [1,2,3,4,5,6,7,8,9,10]

const num = colleges.filter((college)=>{
    return college % 3 == 0
})

console.log(num)




