/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

const myArray = [1, 3, 6, 7, 8]

function ex1(inputArray) {
inputArray.sort((a,b) => b-a)
return inputArray
}

console.log(ex1(myArray)) //expected: [5,3,1]

/* WRITE YOUR CODE HERE */

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

/* WRITE YOUR CODE HERE */

function ex2(array) {

    return Math.max(...myArray)
    
}
console.log(ex2())

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

function ex3(array){
    return Math.min(...myArray)
}
console.log(ex3())


/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/
console.log('<=== EVEN and ODD====>')

function ex4(array){
    let even = []
    for ( i=0; i<myArray.length;i++ ){
        if ( myArray[i] %2 == 0 )
        even.push(myArray[i])
    }
return even
}

console.log(ex4())
/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write the code to delete even entries from an array.
*/

function ex5(array) {
    let odd = []
    for ( i=0; i<myArray.length;i++ ){
        
        if ( myArray[i] %2 !== 0 ){
            odd.push(myArray[i])
    }
}
    return odd
}
console.log(ex5())

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/
const someString = 'asdiopnuyertbv'
function ex6(string){
    let repString = ''
    repString = string.replace(/[aeiou]/g,'')
    return repString
}
console.log(ex6(someString))

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/

function ex7(array){
    let incrV = []
    for ( i=0; i < myArray.length; i++){
        let x = myArray[i] +1
        incrV.push(x)
    }
    return incrV
}

console.log(ex7())



/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/
const textNumb = ['Hello', 'How', 'Hayyyaa']
function ex8(array){
    let numbA = []
    for (i = 0; i < textNumb.length; i++){
        let x = textNumb[i].length
        numbA.push(x)
    }
        
    return numbA

}
console.log(ex8())

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/

