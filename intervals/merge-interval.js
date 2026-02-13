const intervals = [
  [1, 5],
  [3, 6],
  [8, 10],
  [15, 18],
];

function mergeIntervals(intervals) {
  //sort the intervals
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

  //create state for the final merged intervals
  const mergedIntervals = [];

  //iterate the intervals
  for (const interval of sortedIntervals) {
    if (
      mergedIntervals.length === 0 ||
      interval[0] > mergedIntervals[mergedIntervals.length - 1][1]
    ) {
      mergedIntervals.push(interval);
    }
    mergedIntervals[mergedIntervals.length - 1][1] = Math.max(
      interval[1],
      mergedIntervals[mergedIntervals.length - 1][1],
    );
  }
  return mergedIntervals;
}

console.log("Merged Interval", mergeIntervals(intervals));
