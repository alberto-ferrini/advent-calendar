import { readInput, checkRightAnswer } from "../../utils.js";

const input = readInput();
const lines = input.split("\n");
let niceWords = 0;
lines.forEach((line) => {
  const chars = line.split("");
  let found = false;
  for (let i = 0; i < chars.length - 2; i++) {
    if (chars[i] === chars[i + 2]) {
      found = true;
      break;
    }
  }
  if (!found) {
    return;
  }
  found = false;
  for (let i = 0; i < chars.length - 3; i++) {
    const firstPair = chars[i] + chars[i + 1];
    for (let j = i + 2; j < chars.length - 1; j++) {
      const secondPair = chars[j] + chars[j + 1];
      if (firstPair === secondPair) {
        found = true;
        break;
      }
    }
  }
  if (!found) {
    return;
  }
  niceWords++;
});

checkRightAnswer(niceWords, 53);
