function getPermutations(str) {
  const results = [];

  // Base case: if string is empty or has one character
  if (str.length <= 1) {
    return [str];
  }

  // Recursive case
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    // Get string without current character
    const remainingChars = str.slice(0, i) + str.slice(i + 1);

    // Recursively get permutations of remaining characters
    const subPermutations = getPermutations(remainingChars);

    // Add current character to front of each sub-permutation
    for (let subPerm of subPermutations) {
      results.push(currentChar + subPerm);
    }
  }

  return results;
}

// Example usage
function printPermutations(str) {
  const permutations = getPermutations(str);
  // console.log(`Permutations of "${str}":`);
  // permutations.forEach((perm, index) => {
  //     console.log(`${index + 1}. ${perm}`);
  // });
  // return permutations;
  console.log(permutations);
}

// Test the function
printPermutations("abc");
