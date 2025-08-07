function print_output(n) {
  
  let num = Math.floor(n/5);
  num = n - num;
  helper(num);

  function helper(num){
    if(num < 0){
      return;
    }

    helper(num - 5);
    console.log(num);
  }

}

print_output(18);
