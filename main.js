/*
* `twoSmallest`
  * Write a function called twoSmallest that takes in a single array of numbers as a parameter and returns the smallest two numbers in the following array format where the smallest number always comes before the 2nd smallest number (ie, the bigger number should come second): 
  * [smallestNumber, secondSmallestNumber]
  * If the array is shorter than length 2, return undefined to the user
  * You can assume that every number in the array will be unique
  * Do not use .sort()
 */


let arr = [8, 2, 3, 1];
let arr1 = [33, 7, 2, 3, 12, -5, 50, 0, 1];


/*

let finalArr = []

for (let i = 0; i < arr.length; i++) { //grabs the first number for comparison  
  for (let j = i + 1; j < arr.length; j++) { //grabs the second number for comparison
    
    if (arr[i] > arr[j]) { //if the 1st number is greater than the 2nd number 
         
        temp = arr[i]; //copy and hold arr[i] in temp
        
        console.log(`temp: ${temp}`)  
        console.log(`arr[i]: ${arr[i]}`)  
        console.log(`arr[j]: ${arr[j]}`)  
        console.log(`arr: ${arr}\n`)  // arr: [8,2,3,1]

         
        arr[i] = arr[j]; //then the 1st number becomes the same as the 2nd number //at this part borh numbers in array are the same
        
        console.log(`temp 2nd part: ${temp}`)  
        console.log(`arr[i] 2nd part: ${arr[i]}`)  
        console.log(`arr[j] 2nd part: ${arr[j]}`)  
        console.log(`arr 2nd part: ${arr}\n`) // arr 2nd part: [2,2,3,1]
        

        arr[j] = temp; //now the 2nd number(arr[j]) becomes whatever number was in temp //switch has been made
        
        console.log(`temp 3rd part: ${temp}`)  
        console.log(`arr[i] 3rd part: ${arr[i]}`)  
        console.log(`arr[j] 3rd part: ${arr[j]}`)  
        console.log(`arr 3rd part: ${arr}\n`) //arr 3rd part: [2,8,3,1]

         
    }
  }

}

console.log(arr)
console.log(arr[0], arr[1])
*/

function twoSmallest(arr) {
    
    let finalArr = []
    
    if (arr.length < 2) {
        return undefined;
    }

    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {

                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

            }

        }

    }
    
    finalArr.push(arr[0])
    finalArr.push(arr[1])
    return finalArr

}

console.log(twoSmallest(arr1))



















