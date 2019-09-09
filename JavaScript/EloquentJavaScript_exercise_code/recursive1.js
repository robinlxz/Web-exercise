function findSolution_me(target) {
    function buildHistory(current, history) {
        if (current === target) {
            return history;
        }
        else if (current > target) {return null}
        else {
            return buildHistory(current*3, '('+history+'*3)') ||
                   buildHistory(current+5, '('+history+'+5)');
        }
    }

    return buildHistory(1,'1');
}


function findSolution(target) {
    function find(current, history) {
      if (current == target) {
        return history;
      } else if (current > target) {
        return null;
      } else {
        return find(current + 5, `(${history} + 5)`) ||
               find(current * 3, `(${history} * 3)`);

        // return find(current * 3, `(${history} * 3)`) ||
        //        find(current + 5, `(${history} + 5)`);

        // return find(current + 5, '('+history+'+5)') ||
        //        find(current * 3, '('+history+'*3)');
      }
    }
    return find(1, "1");
  }

// console.log(findSolution(26));
// console.log(findSolution_me(26));

const buildTimesFunction = function(x) {
    return (num) => num*x;
}

let timesFive = buildTimesFunction(5);
console.log(timesFive(120));