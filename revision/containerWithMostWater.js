var maxArea = function(height) {
    let i = 0, j = height.length - 1;
    let ans = 0;

    while(i < j){
        let w = j-i;
        let h = Math.min(height[i], height[j]);
        let area = w*h
        ans = Math.max(ans, area)

        if(height[i] < height[j])i++
        else j--
    }
    return ans
};

const height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height)); // Output :- 49