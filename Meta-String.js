function metaStrings(S1, S2) {
  // your code here

  if (S1.length !== S2.length || S1 === S2) {
    return false;
  }

  let diffCount = 0;
  let diff1, diff2;
  
  for(let i = 0; i < S1.length; i++){
    if(S1[i] !== S2[i]){
        diffCount++;
        if(diffCount === 1){
            diff1 = i;
        }
        else if (diffCount === 2){
            diff2 = i
        }
        else{
            return false;
        }
    }
  }

  return S1[diff1] === S2[diff2] && S1[diff2] === S2[diff1]; 
}

console.log(metaStrings("geeks", "geske"));
