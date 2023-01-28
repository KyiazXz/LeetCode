// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

 

// Example 1:

// Input: n = 16
// Output: true

// solution
var isPowerOfFour = function(n) {
    let k = 1
    function is(k , n){
        if (k === n){
            return true
        }
        if (k>n){
            return false
        }
        return is (k*4 , n)
    }
    return is(1 , n)
};