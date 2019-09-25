// /**
//  * @param {number[]} candidates
//  * @param {number} target
//  * @return {number[][]}
//  */
// var combinationSum = function(candidates, target) {
//     let combinSumWithState = function(state, candidates, target) {
//         if (target < 0) {}
//         else if (target = 0) {return state;}
//         else {
//             for (let num of state) {
//                 return combinSumWithState(state.push(num),candidates,target - num);
//             }
//         }
//     }
// };


// //Factory function
// function createCircle(radius, location) {
//     return {
//       radius,
//       location,
//       draw: function() {
//         console.log(`This is a circle with radius ${radius}`);
//       }
//     }
//   }
  
//   let circle = createCircle(2.5,{x:1,y:1});
  
//   // Constructor Function
//   class Circle{
//     constructor(radius){
//       this.radius = radius
//     }
//     draw() {
//       console.log(`This is a circle with radius ${this.radius}`);
//     }
//   }
  
//   let circle2 = new Circle(5);
//   circle.draw()
//   circle2.draw()


// let toLearn = ["SQL", "MySQL", "JavaScript", "MongoDB", "Vue", "React"];

// let test1 = toLearn.some(function(item, index){
//     console.log(index, item, item.indexOf('D'));
//     return item.indexOf('D')>-1;
// })
// console.log('test1 for some is:', test1);

const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
  ];

  //Try to build the road to object function by you own
