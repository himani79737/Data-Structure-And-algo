let nums1 = [3, 1, 2, 3, 9];
let nums2 = [3, 1, 9, 2, 3];

var intersection = function(nums1, nums2){
 let set = new Set(nums1);
 let result = [];

 for(let i = 0; i < nums2.length; i++){
    if(set.has(nums2[i]) && !result.includes(nums2[i])){
    result.push(nums2[i]);
 }
}
 return result;
}
console.log(intersection(nums1, nums2));
