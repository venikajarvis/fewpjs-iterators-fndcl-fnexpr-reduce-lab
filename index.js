const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let totalBatteries = batteryBatches.reduce(
    (accumulator, currentValue ) => accumulator + currentValue,
    0
  )


// Example from Lesson
// const hogwartsHouses = {
//     "Slytherin": [],
//     "Gryffindor": [],
//     "Hufflepuff": [],
//     "Ravenclaw": []
//   }
// incomingStudents.reduce(function(houses, student) {
//     houses[sortingHat.assign(student)].push(student)}, hogwartsHouses) 