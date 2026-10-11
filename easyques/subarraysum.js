let  arr = [1,2,3], k = 3;
let map = new Map();   //create map data structure 
let sum = 0, count = 0;
map.set(0, 1);  //set map firse element 0 

var subarraysum =function(arr, k){

for(let i = 0; i < arr.length; i++){
    sum += arr[i];
    if(map.has(sum - k)){
        count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1)

}
    return count;
}
console.log(subarraysum(arr, k));
