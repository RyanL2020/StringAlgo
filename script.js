const buildString = function(string) {
  const builtArray = [];
  for(let p = 0; p < string.length; p++) {
    if (string[p] != '#') {
      builtArray.push(string[p]);
    } else {
      builtArray.pop();
    }
  }
  return builtArray;
}

const backSpaceCompare = function(s, t) {
  