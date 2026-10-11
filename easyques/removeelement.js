let arr = [3, 5, 4, 7];
let val = 5;

var removeElement = function(arr, val){
    let j = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== val){
            arr[j] = arr[i];
            j++;
        }
    }
    return  j;
}

console.log(removeElement(arr, val));
