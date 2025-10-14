//string is set in between double "  "
const name ="tanishk "
const surname="Deore"

console.log(name+surname)

console.log(`Hello my name is ${name} and my surname is ${surname}`);
//this is modern mmethod to write this 
//${} is used to use the varibale in between strings

//string is object

//there are lot of methods defined in strings
console.log(name[0])
console.log(name.__proto__)//this gives the object {}
//you can ddirectly aceess all the methods directly without using protp

console.log(name.length)
console.log(name.toUpperCase())//this doesnt change the original value 
console.log(name)
console.log(name.charAt(3))
console.log(name.indexOf('n'))

const newString = name.substring(0,4)//stores char from 0 to 3
//last index is not included

console.log(newString)
const anotherString= name.slice(-8,5)//negatve values are taken and then considered form 0
console.log(anotherString)

const newStringOne="   tanishk    "
console.log(newStringOne)
console.log(newStringOne.trim())//it trims down from btoh start and end
//there are trim_start and trim_end too

const url="https://tanishk.com/tanishk%deore"
const newurl =url.replace('%','_')
console.log(newurl)
console.log(url.includes('tanishk'))
console.log(url.split('/'))





