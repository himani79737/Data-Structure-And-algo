let arr = [1,2,3, 2];

var containduplicate = function(arr){
    let set = new Set(arr)
    return set.size !== arr.length;

}

console.log(containduplicate(arr));
