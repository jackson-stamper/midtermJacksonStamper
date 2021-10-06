/*
Created a new form named 'calculate'. 
Created a new function named 'addNumbers'. The function has one parameter to hold the numbers array.
Created a new function named 'multiplyArray'. The function has two parameters: one that holds the numbers array, 
and a second that holds the number to multiple each number by (from the user).
The names of function parameters and main program arguments are different. 

Main program gets math operation (Add or Multiply) desired by the user.
If user wants to Multiply, Main program gets a number to multiple each array number by.
Main program calls the appropriate function with the required arguments. 
The function called returns its' answer to the Main program.
The main program outputs the answer to the console using this format (where X is a number)
       The addition answer is X. 
    or
      After multiplying each number in the array by X, the array numbers are: 
         <show the array on next line (don't need template literal to show it)>
The program runs without error.
*/

numArray = [34,115,347,872,580,164,339,204,396,279,550,782,947,109,323,418,593,376,711,984,1052]

function addNumbers(addArray){
  let sum = 0
  for (i = 0; i < addArray.length; i++) {
    sum +=  addArray[i]
  }
  return sum
}

function multiplyArray(multArray){
  let total = 0
  let multNum = Number(prompt("enter a number to multiply by"))
  for (i=0; i < multArray.length; i++) {
    multArray[i] = multArray[i] * multNum
  }
  return multArray
}

let choice = prompt("would you like to add or multiply? (enter lowercase)")


if (choice == "add")
  console.log(`The addition answer is ${addNumbers(numArray)}`)
else if (choice == "multiply")
  console.log(multiplyArray(numArray))
else
  console.log(`After multiplying each number in the array by x, the array numbers are:`)
  console.log(multiplyArray(numArray))