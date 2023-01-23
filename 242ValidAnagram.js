// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: 

// solution

function isAnagram(s, t) {
    if (s.length !== t.length) return false;
  
    const frequencyCounter = {};
  
    for (const letter of s) {
      if (!frequencyCounter.hasOwnProperty(letter)) {
        frequencyCounter[letter] = 1;
      } else {
        frequencyCounter[letter]++;
      }
    }
  
    for (const letter of t) {
      if (frequencyCounter.hasOwnProperty(letter)) {
        frequencyCounter[letter]--;
      } else {
        return false;
      }
    }
  
    for (const key in frequencyCounter) {
      if (frequencyCounter[key] !== 0) return false;
    }
  
    return true;
  }
    