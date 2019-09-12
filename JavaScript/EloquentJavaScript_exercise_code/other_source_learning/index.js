console.log('Hello World');

const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
];

function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
      if (graph[from] == null) {
        graph[from] = [to];
      } else {
        graph[from].push(to);
      }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
      addEdge(from, to);
      addEdge(to, from);
    }
    return graph;
}
  
const roadGraph = buildGraph(roads);

class VillageState {
    constructor(place, parcels) {
      this.place = place;
      this.parcels = parcels;
    }
  
    move(destination) {
      if (!roadGraph[this.place].includes(destination)) {
        return this;
      } else {
        let parcels = this.parcels.map(p => {
          if (p.place != this.place) return p;
          return {place: destination, address: p.address};
        }).filter(p => p.place != p.address);
        return new VillageState(destination, parcels);
      }
    }
}

let step1 = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
);

let step2 = step1.move("Alice's House");

function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({place, address});
  }
  return new VillageState("Post Office", parcels);
};

/*
runRobotAnimation(VillageState.random(), randomRobot);
*/


// The mail truck’s route
const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return {direction: memory[0], memory: memory.slice(1)};
}

//Path Finding
function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}

function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}

// runRobotAnimation(VillageState.random(1), goalOrientedRobot, []);

function compareRobots(robot1, memory1, robot2, memory2) {
  // Your code here
  function runRobotTest(state, robot, memory) {
    for (let turn = 0;; turn++) {
      if (state.parcels.length == 0) {
        // console.log(`Done in ${turn} turns`);
        // break;
        return turn;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
      // console.log(`Moved to ${action.direction}`);
    }
  }
  // Test for TOTAL rounds
  let TOTAL = 100;
  let sumRoundsSteps1 = 0;
  let sumRoundsSteps2 = 0;
  for (i=0;i<TOTAL;i++){
    let testVilliageState = VillageState.random(5);
    sumRoundsSteps1 += runRobotTest(testVilliageState,robot1,memory1);
    sumRoundsSteps2 += runRobotTest(testVilliageState,robot2,memory2);
  }
  let robot1Turns = sumRoundsSteps1/TOTAL;
  let robot2Turns = sumRoundsSteps2/TOTAL;
  
  console.log(robot1Turns, robot2Turns); 
}

compareRobots(routeRobot, [], goalOrientedRobot, []);

// // Ex2, yourRobot
function yourRobot({place, parcels}, route) {
  /*
  Overall:
  1. Robot collect all parcels
  2. Robot deliver all parcels
  */
  let remainingParcels = parcels.filter(p => p.place != place);
  console.log(remainingParcels);
  let TargetParcel;
  if (remainingParcels.length >0) {
    TargetParcel = remainingParcels[0];
    route = findRoute(roadGraph, place, TargetParcel.place);
  }  
  else {
    TargetParcel = parcels[0];
    route = findRoute(roadGraph, place, TargetParcel.address);
  }
  
  return {direction: route[0], memory: route.slice(1)};
}

//runRobot(VillageState.random(1),yourRobot, [])
compareRobots(yourRobot, [], goalOrientedRobot, []);
// 13.6, 14.68 //Yes!!

// // Ex2 prepare
// // Write a state.filter() to filter out all current parcels based on place.
// let testParcels = [
//   {place: "Farm", address: "Bob's House"},
//   {place: "Daria's House", address: "Shop"},
//   {place: "Alice's House", address: "Ernie's House"},
//   {place: "Alice's House", address: "Post Office"},
//   {place: "Town Hall", address: "Daria's House"}
// ]

// function filterParcelsByPlace(parcels, place){
//   //return the parcels that not at current place
//   return parcels.filter((a)=>a.place != place)
// }


//Ex 3