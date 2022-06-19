// // Number data type
// let age = 23
// // String
// let brand = "advkdld"
// // Boolean
// let isTrue = true
// console.log(isTrue)


// let age //undefined
// console.log(age)
// let agee = null //like a empty value
// console.log(agee)


// //typeof
// let age = 45
// console.log(typeof age)
// console.log(typeof 19.)
// console.log(typeof 'abcd')
// console.log(typeof true)


// // Assignment operators
// let age = 20
// console.log(age)
// age += 7
// console.log(age++)
// console.log(age)


// // Comparision operator
// let a=10, b=15, c='10'

// console.log(a>b)
// console.log(a<b)
// console.log(a>=b)
// console.log(a<=b)
// console.log(a==b)
// //loose comparision give true
// console.log(a == c)
// //strict comparision give false
// console.log(a === b)


// // Arithmetic operator
// let a = 10, b =2s, c = '10', d=a+c

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a ** b)
// console.log(a % b)
// console.log(a / b)

// console.log(a+c)
// console.log(a + Number(c))


// // Logical operators

// console.log('true && true', true && true)
// console.log('true && false', true && false)
// console.log('false && true', false && true)
// console.log('false && false', false && false)

// console.log('true || true', true || true)
// console.log('true || false', true || false)
// console.log('false || true', false || true)
// console.log('false || false', false || false)


// Function to add two values


function sum(a = 0, b = 0){
    const c = a+b
    return c
}
console.log(sum(10,20))



greet('ayush')//hoisting before function
function greet(name){
    console.log('hi ' + name)
}


let greet2 = function(namee){
    return "hi " + namee;
}
greet2('piyush')


//arrow function
let greet3 = () => {
    console.log("bonjour")
}
greet3()
