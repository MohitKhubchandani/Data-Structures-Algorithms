function insertInterval(intervals, newInterval){

    let res = [];
    let i = 0;

    while(i < intervals.length && intervals[i][1] < newInterval[0]){
        res.push(intervals[i]);
        i++;
    };

    while(i < intervals.length && intervals[i][0] <= newInterval[1]){
        newInterval[0] = Math.min(newInterval[0],intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1],intervals[i][1]);
        i++;
    }
    res.push(newInterval);

    while (i < intervals.length) {
        res.push(intervals[i]);   
        i++;
    }

    return res;
};

const intervals =[[1,2],[3,4],[7,7],[8,10],[12,16]]
const newInterval = [5,6];
const Output = insertInterval(intervals, newInterval);
console.log(Output) // Output :- [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 7 ], [ 8, 10 ], [ 12, 16 ] ]

