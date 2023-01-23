// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Example 1:

// Input: n = 27
// Output: true
// Explanation: 27 = 33

// solution

var isPowerOfThree = function(n) {
    let k = 1
    function is (k , n){
        if (k===n){
            return true
        }
        if (k > n){
            return false
        }
        return is(k*3 , n)
    }
    return is(1 , n)
    };