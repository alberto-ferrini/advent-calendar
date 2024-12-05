import { readInput, checkRightAnswer } from "../../utils.js";

const input = readInput();
const presentsDimensions = input.split("\n");
let ribbonFeet = 0;
presentsDimensions.forEach((presentDimensions) => {
  const [l, w, h] = presentDimensions.split("x");
  const sortedDimensions = [l, w, h].sort((a, b) => a - b);
  ribbonFeet += 2 * sortedDimensions[0] + 2 * sortedDimensions[1] + l * w * h;
});

checkRightAnswer(ribbonFeet, 3737498);
