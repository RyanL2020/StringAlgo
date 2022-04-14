let strings = "abccabb" //output => 3
let oneString = "cccccc" //output => 1
let nullString = "" //output => 0
let bigString = "abcbdca" //output => 4

const longestSubstring = function(s) {
  if (s.length <= 1) return s.length;
  let longest = 0;
  for(let i = 0; i < s.length; i++) {
    let seenHash = {}, currentLength = 0;
    for(let right = i; right < s.length; right++) {
      const currentChar = s[right];
      if(!seenHash[currentChar]) {
        currentLength++;
        seenHash[currentChar] = true;
        longest = Math.max(longest, currentLength);
        
      } else {
        break;
      }
    }
  }
  return longest;
}

console.log(longestSubstring(strings))