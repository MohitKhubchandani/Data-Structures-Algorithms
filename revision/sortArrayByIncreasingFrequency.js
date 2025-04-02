function sortArrayByIncreasingFrequency(nums){
    let mp = new Map();

    for (let i = 0; i < nums.length; i++) {
        // Frequency Map
        if(!mp.has(nums[i])){
            mp.set(nums[i], 1);
        }else{
            mp.set(nums[i], mp.get(nums[i])+1);
        }
    }

    let obj = [];

    for (let [key, value] of mp) {
        obj.push({
            "key" : key,
            "value" : value 
        })
    }

    // sorting 
    obj.sort((a,b) => {
        if (a["value"] == b["value"]) {
            return b["key"]-a["key"]
        }
        return a["value"]-b["value"]
    });

    let ans = [];
    for (let i = 0; i < obj.length; i++) {
        for (let j = 0; j < obj[i]["value"]; j++) {
            ans.push(obj[i]["key"]);
        }
    }

    return ans;
}

let nums = [1,1,2,2,2,3];
let Output = sortArrayByIncreasingFrequency(nums);
console.log(Output) // Output :- [ 3, 1, 1, 2, 2, 2 ]
