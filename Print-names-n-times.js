function printNames(n) {
  if (n === 0) {
    return;
  }
  console.log("Rishabh");
  printNames(n - 1);
}

printNames(5);
