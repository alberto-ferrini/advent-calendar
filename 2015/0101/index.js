import { checkRightAnswer, readInput } from "../../utils.js";

const input = readInput();
const floors = input.split("");
let rightFloor = 0;
floors.forEach((floor) => {
  if (floor === "(") {
    rightFloor++;
  } else if (floor === ")") {
    rightFloor--;
  }
});

checkRightAnswer(rightFloor, 232);
