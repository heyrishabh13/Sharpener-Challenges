function customSort(arr) {
  arr.sort((a, b) => {
    if (typeof a === "number" && typeof b === "string") {
      return 1;
    } else if (typeof a === "string" && typeof b === "number") {
      return -1;
    } else if (typeof a === "string" && typeof b === "string") {
      return a.charCodeAt(0) - b.charCodeAt(0);
    } else {
      return a - b;
    }
  });
  return arr;
}

const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
console.log(customSort(input));
