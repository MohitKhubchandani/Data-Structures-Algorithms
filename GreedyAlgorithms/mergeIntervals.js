function mergeIntervals(intervals) {

    intervals.sort((a,b) => a[0]-b[0])
    
    if (intervals.length <= 1) return intervals;

    let result = [];
    let newInterval = intervals[0];
    result.push(newInterval);
    
    for(let interval of intervals){
        if (interval[0] <= newInterval[1]) {
        newInterval[1] = Math.max(interval[1], newInterval[1]);
    }else{
        newInterval = interval;
        result.push(newInterval);
    }}    

    return result;
};

const intervals = [[1,3],[2,6],[8,10],[15,18]]
const Output = mergeIntervals(intervals);
console.log(Output) // Output :- [ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]

