function findContentChildren(g, s){
    let n = g.length, m = s.length;
    let left = 0, right = 0;
    g = g.sort((a,b) => a-b);
    s = s.sort((a,b) => a-b);
    
    while(right < n && left < m){
        if (g[right] <= s[left]) {
            right++
        };
        left++
    };
    return right;
};

const g = [1,2,3];
const s = [1,1];
const Output = findContentChildren(g, s);
console.log(Output) // Output :- 1 

