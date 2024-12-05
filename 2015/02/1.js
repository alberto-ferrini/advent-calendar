import { readInput, checkRightAnswer } from "../../utils.js";

const input = readInput();
const presentsDimensions = input.split("\n");
let paperSquareFeet = 0;
presentsDimensions.forEach((presentDimensions) => {
  const [l, w, h] = presentDimensions.split("x");
  const smallestArea = [l * w, w * h, h * l].sort((a, b) => a - b)[0];
  paperSquareFeet += 2 * l * w + 2 * w * h + 2 * h * l + smallestArea;
});

checkRightAnswer(paperSquareFeet, 1586300);
