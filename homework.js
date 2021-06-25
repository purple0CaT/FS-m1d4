// /*
// ASSIGNMENT RULES
// - All the answers must be written in JavaScript (uncommented)
// - You can ask for help, reach the Teaching Assistants if needed
// - The solution must be available for the tutors by the end of the day (5PM CET)
// - You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
// - You can test your code in a separate file or de-commenting the single exercises in this one.
// You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
// */

// /* EXERCISE 1
// Create an array containing the first 5 positive numbers.
// */

// function ex1() {
//     const myArray = [1,2,3,4,5]
//     return myArray
//   }
  
//   /* EXERCISE 2
//   Create an object "myObject" containing exactly your "name", "surname", "email", "address" and "age".
//   */
  
//   const myObject = {
//     name: 'Istvan',
//     surname: 'Sandor',
//     email: 'ian@mail.com',
//     adress: 'UK, Liverpool',
//     age: 25
//   }
  
//   /* EXERCISE 3
//   Add to the previously created object a boolean value to rappresent wheter you have or not a driving license. Call it "hasDrivingLicense"
//   */
//   myObject.hasDrivingLicense = true
  
//   /* EXERCISE 4
//   Remove from the previously created object the age property.
//   */
//   delete myObject.age
//   /* EXERCISE 5
//   Create another object called "anotherObject" with name, surname, email address and verify that this object has a different email address than the previous one.
//   */
  
//   const anotherObject = {
//     name: 'John',
//     surname: 'Bonds',
//     email: 'stranger@mail.com'
//   }
  
//   if (anotherObject.email !== myObject.email) {
//    console.log(`The Emails are different`)
//   } else console.log(`The Emails are equal`)
  
  
//   /* EXERCISE 6
//   You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
//   Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
//   Write an algorithm that calculates the total cost to charge the user with.
//   */
  
//   const totalShoppingCart = 64

//   function ex6(grossTotal) {
//     let total
//     if (grossTotal >0 ){
//       if (grossTotal > 50) {
//         total = grossTotal
    
//       } else {
//         total = 10 + grossTotal
//       }
//     } else {
//       total = 'Your shopping cart is empty'
//     }
  
//     return total
//     }
  
//   console.log(ex6(totalShoppingCart)) 
  
  
//   /* EXERCISE 7
//   You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
//   Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
//   */
  
// function ex7(grossTotal){
//     let total

//     if (grossTotal >0 ){
//         grossTotal = grossTotal - (grossTotal * 0.2)
        
//             if (grossTotal > 50) {
//                 total = grossTotal
//             } else {
//                 total = 10 + grossTotal
//         }
//     } else {
//     total = 'Your shopping cart is empty'
//     }
//     return total
// }
  
//   console.log(ex7(totalShoppingCart)) // expected 20% discount and free shipping if discounted price is higher than 50. Other wise, 20% discounted price and +10$ of shipping charged.
  
  /* EXERCISE 8
  Create an object representing a car with properties like "brand", "model", "licensePlate".
  After you create the first car, clone it 5 times and change the "licensePlate" for each cloned car without affecting the original one.
  */

const car = {
    brand: 'Tesla',
    model: 'X',
    licensePlate: 'BO21'
}

console.log('<=== CAR PARK ===>')

const park = []

for ( i=0; i<=5; i++) {
    park.push(car)
}
for (i=0; i<=5; i++) {
    park[i] = {brand: 'Tesla', model: 'X', licensePlate: 'B23'+[i]};
}

console.log(park)

/* EXERCISE 9
  Create a new array called "carsForRent" containing all the cars from the previous exercise.
  */
  
  const carsForRent = park

  console.log(`<---- ARRAY ---->`)

  console.log(carsForRent)
  
  /* EXERCISE 10
  Remove the first and the last car from the carsForRent array.
  */
  
carsForRent.shift()
carsForRent.pop()
console.log(`<---- Removed ---->`)

console.log(carsForRent)

  /* EXERCISE 11
  Print in the console the TYPES of the car variable, of its licensePlate and brand properties.
  */
  console.log(`<---- Types ---->`)

for (i=0; i<4; i++){
  console.log(typeof(park[i].brand), typeof(park[i].licensePlate))
}
  
  /* EXERCISE 12
  Create a new array called carsForSale and insert 3 cars in it.
  Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
  */
  
  const carsForSale = []
  for(i=0; i<=2; i++){
    carsForSale.push(park[i])
  }
  const totalCars = carsForSale.length + carsForRent.length
  console.log('<=== SALE AND TOTAL ===>')

  console.log(totalCars)

  /* EXERCISE 13
  Print in the console the data from each car in the carsForSale array.
  */

  console.log(carsForSale)

