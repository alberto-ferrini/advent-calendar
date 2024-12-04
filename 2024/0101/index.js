import { readInput, checkRightAnswer } from "../../utils.js";

const input = readInput();
const line = input.split("\n");
const firstLocations = [];
const secondLocations = [];
line.forEach((line) => {
  const locations = line.split("   ");
  firstLocations.push(+locations[0]);
  secondLocations.push(+locations[1]);
});
firstLocations.sort();
secondLocations.sort();
let distance = 0;
for (let i = 0; i < firstLocations.length; i++) {
  distance += Math.abs(firstLocations[i] - secondLocations[i]);
}

checkRightAnswer(distance, 3569916);
