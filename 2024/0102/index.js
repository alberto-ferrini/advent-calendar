import { readInput, checkRightAnswer } from "../../utils.js";

const input = readInput();
const lines = input.split("\n");
const firstLocations = [];
const secondLocations = [];
lines.forEach((line) => {
  const locations = line.split("   ");
  firstLocations.push(+locations[0]);
  secondLocations.push(+locations[1]);
});
let similarity = 0;
firstLocations.forEach((firstElement) => {
  let count = 0;
  secondLocations.forEach((secondeElement) => {
    if (firstElement === secondeElement) {
      count++;
    }
  });
  similarity += firstElement * count;
});

checkRightAnswer(similarity, 26407426);
