// const netIncome=function grossTax(taxableIncome){
//     return grossTax-726
// }
// function taxableIncome(basicSalary,allowances) {
//     const taxableIncome=basicSalary +allowances;
//     return taxableIncome
    
// }
// console.log(taxableIncome(40000,15000))


//function calling another function
// const area= function areaTrapezium(h,a,b){
//     const surfaceArea=(h*(a+b))/2
//     return `The area of the trapezium is ${surfaceArea} square meters`

// }
// const area1=area(100,500,150)
// console.log(area1)
// console.log(area(100,500,150))


//function calling another function
function cutFruitPiece(fruit){
    return fruit*4
}
function fruitProcessor(apples,oranges){
    const applePieces=cutFruitPiece(apples)
    const orangePieces=cutFruitPiece(oranges)
    const juice=`juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange `
    return juice
}
console.log(fruitProcessor(2,3))



//practise one 

const calcAge = function(birthYear){
    return 2023-birthYear;
}
const yearsUntilRetirment=function(birthYear,firstName){
    const age= calcAge(birthYear)
    const retirement=65-age;
    return retirement;


}
console.log(yearsUntilRetirment(2000,'John'))


//practise two




    





