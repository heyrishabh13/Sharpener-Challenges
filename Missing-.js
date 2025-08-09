findMissing(arr) {
        // code here
        let map = new Map();
        
        for(let i = arr.length - 1; i >= 1; i--){
            let r = arr[i] - arr[i - 1];
            map.set(r, (map.get(r) || 0) + 1);
        }
        
        let maxR = -Infinity;
        
        for(let value of map.values()){
            if(value > maxR){
                maxR = value;
            }
        }
        
        for(let i = 1; i < arr.length; i++){
            let ans = arr[i -1] + maxR;
            if(arr[i] !== ans){
                return ans;
            }
        }
        
        return arr[arr.length -1] + maxR;
    }

    console.log(findMissing([e1 ,6 ,11, 16, 21, 31]))