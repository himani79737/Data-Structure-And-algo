let arr = [0,0,1,1,1,2,2,3,3,4];

var removeduplicate = function(arr){
let i = 1;
for(let j = 1; j < arr.length; j++){
    if(arr[j] !== arr[i - 1]){
        arr[i] = arr[j];
        i++;
     }
}
return i;

}
console.log(removeduplicate(arr));

