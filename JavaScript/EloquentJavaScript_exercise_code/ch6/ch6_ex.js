/* 0601-Vector*/
// // // Your code here.
// class Vec{
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//     }

//     plus(anotherVec){
//         return new Vec(this.x+anotherVec.x, this.y+anotherVec.y)
//     }

//     minus(anotherVec){
//         return new Vec(this.x-anotherVec.x, this.y-anotherVec.y)
//     }

//     get length(){
//         return (this.x**2 + this.y**2)**0.5
//     }
// }

// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// // → Vec{x: 3, y: 5}
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// // // → Vec{x: -1, y: -1}
// console.log(new Vec(3, 4).length);
// // → 5


// /* 0602-group */
// class Group{
//     constructor(){
//         this.members = [];
//     }

//     has(item){
//         return (this.members.includes(item));
//     }

//     add(item){
//         if (!this.has(item)){
//             this.members = this.members.concat(item);
//         }
//     }

//     delete(item){
//         if(this.has(item)){
//             this.members = this.members.filter(x=>x!=item);
//         }
//     }

//     static from(arr){
//         let newGroup = new Group();
//         for (let elem of arr){
//             newGroup.add(elem);
//         }
//         return newGroup;
//     }
// }

// let group = Group.from([10, 20]);
// console.log(group.has(10));
// // → true
// console.log(group.has(30));
// // → false
// group.add(10);
// console.log(group);
// group.delete(10);
// console.log(group);
// console.log(group.has(10));


// /* Iteration */ //robinlxz: not get it from the begining. Skip first 20190906
// // Your code here (and the code from the previous exercise)

// for (let value of Group.from(["a", "b", "c"])) {
//     console.log(value);
//   }
//   // → a
//   // → b
//   // → c

/* borrowing a method*/
let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
// console.log(map.hasOwnProperty("one"));
console.log(Object.hasOwnProperty.call(map, "onee"));
// → true