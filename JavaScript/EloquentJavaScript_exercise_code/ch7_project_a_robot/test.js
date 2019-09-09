/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let combinSumWithState = function(state, candidates, target) {
        if (target < 0) {}
        else if (target = 0) {return state;}
        else {
            for (let num of state) {
                return combinSumWithState(state.push(num),candidates,target - num);
            }
        }
    }
};