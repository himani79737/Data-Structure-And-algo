 //Input: [3, 7, 2, 9, 1] Output: 1 ,9

 function MinandMax(arr){
    let min = arr[0]; 
    let max =arr[0];
    for(let i = 0; i<arr.length; i++){
        if(min > arr[i]){
            min = arr[i];     
    }
    if(max < arr[i]) {
        max =arr[i]
    }
}
    return {max,min}
}
const result = MinandMax([]);
console.log("Max:", result.max)
console.log("Min :", result.min)


