import { readInput, checkRightAnswer } from "../../utils.js";

const input = readInput();
const lines = input.split("\n");
let niceWords = 0;
lines.forEach((line) => {
  if (
    line.indexOf("ab") >= 0 ||
    line.indexOf("cd") >= 0 ||
    line.indexOf("pq") >= 0 ||
    line.indexOf("xy") >= 0
  ) {
    return;
  }
  const charMap = new Map();
  const chars = line.split("");
  let previousChar = "-";
  let double = false;
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    if (char === previousChar) {
      double = true;
    }
    previousChar = char;
    let occurrences = charMap.get(char);
    if (!occurrences) {
      occurrences = 0;
    }
    charMap.set(char, occurrences + 1);
  }
  if (double === false) {
    return;
  }
  const sum =
    Number(charMap.get("a") ?? 0) +
    Number(charMap.get("e") ?? 0) +
    Number(charMap.get("i") ?? 0) +
    Number(charMap.get("o") ?? 0) +
    Number(charMap.get("u") ?? 0);
  if (sum < 3) {
    return;
  }
  niceWords++;
});

checkRightAnswer(niceWords, 258);
