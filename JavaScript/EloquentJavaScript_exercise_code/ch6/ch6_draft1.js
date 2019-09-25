// class People {
//     constructor(name="no name", type="normal", attack=5, hp=10,[weapon="empty",armor="empty"]=[]) {
//         this.name = name;
//         this.type = type;
//         this.attack = attack;
//         this.hp = hp;
//         // this.weapon = weapon;
//         this.equipment = {
//             "weapon": weapon,
//             "armor": armor
//         };
//     }
//     showhp(){
//         console.log(`The HP for "${this.name}" is ${this.hp}`);
//     }
//     speak(words){
//         console.log(`"${this.name}" says "${words}"`);
//     }
//     get color(){
//         let allColors = ["red", "blue", "green", "orange"];
//         return allColors[Math.floor(Math.random() * allColors.length)]
//     }
    
// }
  
// let guiHua = new People("Gui Hua", "helper", "5", "20");
// let suYe = new People("Su Ye", "Magician", "20", "15");
// let qingLuan = new People("Qing Luan", "Warrior", "15", "30")

// // suYe.speak("I'm invisible.");
// // suYe.showhp();
// // console.log(guiHua.color);

// qingLuan.equipment.weapon = "needle";
// // console.log(qingLuan.equipment.weapon);
// console.log(qingLuan);






// class PGroup {
//     constructor(members) {
//       this.members = members;
//     }
  
//     add(value) {
//       if (this.has(value)) return this;
//       return new PGroup(this.members.concat([value]));
//     }
  
//     delete(value) {
//       if (!this.has(value)) return this;
//       return new PGroup(this.members.filter(m => m !== value));
//     }
  
//     has(value) {
//       return this.members.includes(value);
//     }
//   }

//   PGroup.empty = new PGroup([]);


// function twoBusArrivalTime(rounds){
//   let SIMULATE_ROUND = rounds;

//   let overallTime = 0;
//   for (i=0;i<SIMULATE_ROUND;i++){
//     overallTime += Math.min(Math.random()*10, Math.random()*10);
//   }
//   console.log(overallTime/SIMULATE_ROUND)
// }

// function fourBusArrivalTime(rounds){
//     let SIMULATE_ROUND = rounds;
  
//     let overallTime = 0;
//     for (i=0;i<SIMULATE_ROUND;i++){
//       overallTime += Math.min(Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10);
//     }
//     console.log(overallTime/SIMULATE_ROUND)
//   }



// class PGroup {
//     // Your code here
//     constructor(arr){
//         this.members = arr;
//     }
//     has(item){
//         return this.members.includes(item);
//     }
//     add(item){
//         if (this.has(item)){
//             return new PGroup(this.members);
//         }
//         else {
//             return new PGroup(this.members.concat(item))
//         }
//     }
//     delete(item){
//         if (this.has(item)){
//             return new PGroup(this.members.filter(x=>x!=item));
//         }
//         else {
//             return this;
//         }
//     }
// }
// PGroup.empty = new PGroup([]);

// let a = PGroup.empty.add("a");
// let ab = a.add("b");
// let b = ab.delete("a");

// console.log(b.has("b"));
// // → true
// console.log(a.has("b"));
// // → false
// console.log(b.has("a"));
// // → false



// //Chapter 8 Errors and Debug
// try {
//     let a = prompt("give me a string with length 3"); 
//     if (a.length != 3) {
//         throw new Error("Invalid input for number:" + a)
//     }
//     else {
//         console.log (`the string input is ${a}`)
//     }
// } catch (error) {
//     console.log("Something is wrong:", error);
// }


// class MultiplicatorUnitFailure extends Error {}

// function primitiveMultiply(a, b) {
//   if (Math.random() < 0.2) {
//     return a * b;
//   } else {
//     throw new MultiplicatorUnitFailure("Klunk");
//   }
// }

// function reliableMultiply(a, b) {
//     // Your code here.
//     for(;;){
//       try {
//         return primitiveMultiply(a,b)
//       } catch (e) {
//         if (e instanceof MultiplicatorUnitFailure) {
//           console.log("primitiveMultiply not works this time");
//         } else {
//             throw e;
//         }
//       }     
//     }
//   }

// console.log(reliableMultiply(8, 8));
// // → 64



// const box = {
//     locked: true,
//     unlock() { this.locked = false; },
//     lock() { this.locked = true;  },
//     _content: [],
//     get content() {
//         if (this.locked) throw new Error("Locked!");
//         return this._content;
//     }
// };

// function withBoxUnlocked(body) {
//     // Your code here.
//     try {
//         box.unlock();
//         body;
//     } finally {
//         box.lock();
//     }
// }

