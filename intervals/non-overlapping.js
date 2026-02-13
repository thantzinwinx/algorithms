const intervals = [
  [4, 6],
  [11, 17],
  [2, 18],
  [7, 10],
];

function nonOverlappingIntervals(intervals) {
  if (intervals.length === 0) return 0;

  intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1];
  let count = 1;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= end) {
      end = intervals[i][1];
      count++;
    }
  }
  return intervals.length - count;
}

console.log("NON overlapping", nonOverlappingIntervals(intervals));
