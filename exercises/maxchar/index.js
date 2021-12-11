// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const o = {};
  let maxCount = 0;
  let maxChar = "";
  for (let i = 0; i < str.length; i++) {
    char = str[i];
    o[char] = o[char] + 1 || 1;
    if (o[char] > maxCount) {
      maxChar = char;
      maxCount = o[char];
    }
  }
  return maxChar;
}

module.exports = maxChar;
