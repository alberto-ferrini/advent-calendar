import { checkRightAnswer, readInput } from "../../utils.js";

const input = readInput();
const floors = input.split("");
let firstBasement = 0;
let position = 1;
for (; position - 1 < floors.length; position++) {
  const floor = floors[position - 1];
  if (floor === "(") {
    firstBasement++;
  } else if (floor === ")") {
    firstBasement--;
  }
  if (firstBasement === -1) {
    break;
  }
}

checkRightAnswer(position, 1783);
