// console.log(/a{2,}/.test("3a&aaa"));
// let a = new Date();
// console.log(a.getTime(),Date.now());

// let stock = "1 lemon, 2 cabbages, and 101 eggs";
// function minusOne(match, amount, unit) {
//   let newUnit;  
//   let newAmount = Number(amount) - 1;
//   if (newAmount==1) {
//     newUnit = unit.slice(0,unit.length-1);
//   }
//   else {
//     newUnit = unit;
//   }

//   return newAmount + ' ' + newUnit;
// }

// console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

// let input = "A string with 3 numbers in it... 42 and 88.";
// let regExp = /\b[a-zA-Z]+\b/g;
// let match;
// while (match = regExp.exec(input)) {
//   console.log('Find:', match[0], '  Index:', match.index,'  regExp.lastIndex:',regExp.lastIndex);
// }


// // Fill in this regular expression.
// let number = /(^[+\-\.]?\d+$)|(^\d+[\.]?$)|(^\d+\.\d+$)|(^\d+[eE][+\-]\d)|(^\d+\.\d+[eE]\d+$)/;

// // Tests:
// for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
//                  "1.3e2", "1E-4", "1e+12"]) {
//   if (!number.test(str)) {
//     console.log(`Failed to match '${str}'`);
//   }
// }
// for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
//                  ".5.", "1f5", "."]) {
//   if (number.test(str)) {
//     console.log(`Incorrectly accepted '${str}'`);
//   }
// }

const testFunction = function() {
    return {
        a(b){console.log(`I'm a(b)`);},
        b(a){console.log(`And I'm b(a)`);}
    }
}();