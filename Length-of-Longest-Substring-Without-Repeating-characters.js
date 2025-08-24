/**
 * Finds the length of the longest substring without repeating characters.
 * @param {string} s - The input string.
 * @returns {number} - The length of the longest substring without repeating characters.
 */
function lengthOfLongestSubstring(s) {
  let charMap = new Map();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    if (charMap.has(s[right])) {
      // Move left pointer to the position after the last occurrence
      left = Math.max(left, charMap.get(s[right]) + 1);
    }
    // Update the last seen position of current character
    charMap.set(s[right], right);
    // Update maxLength if current window is larger
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
