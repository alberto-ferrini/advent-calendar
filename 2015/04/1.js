import { readInput, checkRightAnswer } from "../../utils.js";
import { MD5 } from "../../md5.js";

const input = readInput();
let i = 0;
while (!MD5(input + i).startsWith("00000")) {
  i++;
}

checkRightAnswer(i, 346386);
