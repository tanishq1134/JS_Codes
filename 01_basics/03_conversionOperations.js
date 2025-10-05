let score ="33abc"
//sometimes we dont know the type of the data 

console.log(typeof score)

let valueInNumber= Number(score)
console.log(typeof (valueInNumber))
//here we know the 33abc cannot be converted into the number so
//nan is stored when converitng intoo the number 
//not a number == nan
console.log(valueInNumber)

let score2=null
let valueInNumber2= Number(score2)
console.log((valueInNumber2))
//null==0
//for boolean true==1 and false==0

let isLoggedIn=4.2
let toBoolean=Boolean(isLoggedIn)
console.log(toBoolean)
//so for boolean any other value than 0 will be true
//if it is stirng then empty string ke liye 0
//and for other strings it is true

let score3=33
let toString= String(score3)
console.log(score3)// prints 33

console.log(typeof(toString)) //string 


// Operations
let value = 3
let negValue= -value
console.log(negValue)
//operations +,-,*,/, %
//  ** this is for power

let str1="tanishk "
let str2="deore"
let str3=str1+str2
console.log(str3)

//complex situation
console.log("1"+2+2)//prints 122
console.log(1+2+"2")//prints 32
//it will be taken from left to right 

console.log(+true);//this will be converted into number 
//console.log(true+);not valid
console.log(+"");//prints 0

let num1,num2,num3
num1=num2=num3=2+2
let gameCounter=100
gameCounter++
console.log(gameCounter);
++gameCounter
console.log(gameCounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"





