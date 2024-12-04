import { assert } from "node:console";
import fs from "node:fs";

export const checkRightAnswer = (answer, rightAnswer) => {
  console.log({ answer });
  assert(answer === rightAnswer, `Answer must equals ${rightAnswer}`);
};

export const readInput = () => {
  return fs.readFileSync("./input.txt", "utf8");
};
