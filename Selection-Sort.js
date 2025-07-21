function SelectionSort(arr,n){
    for(let i = 0; i < n; i++){
        let last = n - i - 1;
        let maxIndex = getMaxIndex(arr, 0, last);
        swap(arr, maxIndex, last);
    }
    console.log(arr);
}

function swap(arr, first, second){
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

function getMaxIndex(arr, start, end){
    let max = start;
    for(let i = start; i <= end; i++){
        if(arr[max] < arr[i]){
            max = i;
        }
    }
    return max;
}