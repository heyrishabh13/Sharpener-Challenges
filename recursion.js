function count(i){
    if(i == 6){
        return;
    }
    count(i+ 1);
    console.log(i);
}
count(1);