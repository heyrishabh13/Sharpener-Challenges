function reverse(arr , start, end){
    for(let i = start; i < Math.floor(((end-start)/2)); i++){
        swap(arr, i, end - i);
    }
    console.log(arr);
}

reverse([1,2,3,4,5], 0, 4);

function swap(arr, first, second){
    let temp  = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}