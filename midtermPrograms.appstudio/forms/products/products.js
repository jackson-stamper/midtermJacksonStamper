/*
Has a new form named 'products'.
Has an array named 'storeProducts' with these products in it:
   milk, cheese, cream, eggs
> create this array on line 1 of the form (for later use)
Asks user if she wants to add a new product or delete the last one in the array. 
> if wants to add, gets the name of a new product from the user and adds it to the end of the array using an array method. 
> if wants to delete, deletes the last product in the array using an array method. 
Outputs the entire array to the console, one item per line like this: 
       milk
       cheese
       cream
       eggs
       etc. 
Has code so the user can use any mix of case to enter a new product name. All products are stored in the array in lower case. 
eg. the user could enter:
        apples
        Apples
        aPPles
        appleS
            etc.
The program runs without error.
*/

let storeProducts = ["milk", "cheese", "cream", "eggs"]

function addProduct(array){
  let newProduct = prompt("What item would you like to add?")
  array.push(newProduct.toLowerCase())
  return array
  }

let answer = confirm("Would you like to add another item to the list or delete the last item? Press 'yes' for add and 'no' to delete")

if (answer == True)
  addProduct(storeProducts)
else
  storeProducts.pop()

for (i=0; i<storeProducts.length; i++) {
  console.log(storeProducts[i])
  }


