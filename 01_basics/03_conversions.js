/********************************Example 1**********************************/
let score1 = "33"
console.log(typeof(score1))

let valueinNumber1 = Number(score1)
console.log(typeof(valueinNumber1))
console.log(valueinNumber1)
/***************************Example 2******************************/
let score2 = "33abc"
console.log(typeof(score2))

let valueinNumber2 = Number(score2)
console.log(typeof(valueinNumber2))
console.log(valueinNumber2)
/****************************Example 3*********************************/
let score3 = null
console.log(typeof(score3))

let valueinNumber3 = Number(score3)
console.log(typeof(valueinNumber3))
console.log(valueinNumber3)
/***************************Example 4***************************************/
let score4 = undefined
console.log(typeof(score4))

let valueinNumber4 = Number(score4)
console.log(typeof(valueinNumber4))
console.log(valueinNumber4)
/***************************Example 5********************/
let score5 = true
console.log(typeof(score5))

let valueinNumber5 = Number(score5)
console.log(typeof(valueinNumber5))
console.log(valueinNumber5)

/***************************************************************************************Example 6*/

let isbool= "as"
let checkisbool =Boolean(isbool)

console.log(typeof(checkisbool))
console.log(checkisbool)

/* 
1 = true, 0 = false , null = false, undefined = false, String= true, */