let strings = "abccabb" //output => 3
let oneString = "cccccc" //output => 1
let nullString = "" //output => 0
let bigString = "abcbdca" //output => 4

const longestSubstring = function(s) {
  if (s.length <= 1) return s.length;
  const seenChar = {};
  let left = 0, longest = 0;
  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const prevSeenChar = seenChar[currentChar];
    if (prevSeenChar >= left) {
      left = prevSeenChar + 1;
    }
    seenChar[currentChar] = right;
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}

console.log(longestSubstring(strings))