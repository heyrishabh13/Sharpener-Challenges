let sum = 0;
function iterativeToRecursion(n, i){
    if(i === n || i >= 10){
        return;
    }

    sum = sum + i;
    iterativeToRecursion(n, i+2);
}

iterativeToRecursion(5, 0);
console.log(sum);