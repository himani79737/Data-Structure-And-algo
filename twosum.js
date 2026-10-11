// You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

var twoSum = function(nums, target) {
    let map = new Map()
   
    for(let i = 0; i < nums.length; i++){
        if(map.has(target - nums[i])){
        return [i, map.get(target - nums[i])];
    }
    else map.set(nums[i], i)
    }
    return  [-1 , -1];

};
 console.log(twoSum([2,7,11,15], 9));