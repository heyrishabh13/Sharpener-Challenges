function findTwoElement(arr) {
  // code here
    let map = new Map();
    for(let value of arr){
        map.set(value, (map.get() || 0) + 1);
    }
    const ans = [-1 , -1];

    
}

console.log(findTwoElement([6, 5, 8, 7, 1, 4, 1, 3, 2]));
