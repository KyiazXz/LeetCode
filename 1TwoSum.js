// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// solution

var twoSum = function(nums, target) {
    let obj = {}
    for (let i=0 ; i<nums.length ; i++){
         let compliment = target - nums[i]
    if(!obj.hasOwnProperty(compliment)){
       obj[nums[i]]=i
    }
    else {
         return  [ obj[compliment] , i ]
    }
    }

    //1. create object
    //2. iterate through nums
     //3. we will get compliment for every number 
    //4. check if this compliment is in the ojbject, if not
    //5.  then store current number itself in the object
    //6. otherwise return compliment number and current number 
};