function insetIntervals(interval, newInterval){
    let res = [];
    let i = 0;
    let n = interval.length;

    while(i < n && interval[i][1] < newInterval[0]){
        res.push(interval[i]);
        i++
    }

    while(i < n && interval[i][0] <= newInterval[1]){
        newInterval[0] = Math.min(interval[i][0] , newInterval[0])
        newInterval[1] = Math.max(interval[i][1] , newInterval[1])
        i++
    }
    res.push(newInterval);

    while(i < n){
        res.push(interval[i]);
        i++
    }

    return res;
}

let intervals = [[1,3],[6,9]]
let newInterval = [2,5]
let Output = insetIntervals(intervals, newInterval);
console.log(Output)// Output :- [[1,5],[6,9]]