// Check if an Element Exists
// Input: [1, 2, 3, 4, 5], target = 3
// Output: true
function target(arr,target){
   let result = false
    for(let i = 0; i<arr.length; i++){
       if(arr[i] === target){
        result = true;
       }
    }
    return result;
}
console.log(target([1, 2, 3, 4, 5], 3));