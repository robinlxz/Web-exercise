/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  result = [];
  let combinSumWithState = function(state, candidates, target) {
    // console.log(`state and target is ${state}, ${target}`)
    if (target < 0) {}
    else if (target === 0) {result.push(state);}
    else {
      // console.log(`recursive happening`)
      for (let num of candidates.filter(x => x >= Math.max(...state))) {
        // console.log("num is:", num)
        combinSumWithState(state.concat(num),candidates,target - num);
      }
    }
  }
  combinSumWithState([], candidates,target)
  return result;
};
