function nonOverLappingIntervals(intervals){
    intervals.sort((a,b) => a[1]-b[1]);
    let count = 1;
    lastEndTime = intervals[0][1];

    for (let i = 1 ; i < intervals.length; i++) {
        if (intervals[i][0] >= lastEndTime) {
            count++;
            lastEndTime = intervals[i][1];
        }
    }
    return intervals.length - count;
}

const intervals = [[1,100],[11,22],[1,11],[2,12]]
const Output = nonOverLappingIntervals(intervals);
console.log(Output) // Output :- 2
