import { readInput, checkRightAnswer } from "../../utils.js";

const input = readInput();
const lines = input.split("\n");
const lights = new Array();
for (let x = 0; x < 1000; x++) {
  lights[x] = new Array();
  for (let y = 0; y < 1000; y++) {
    lights[x][y] = 0;
  }
}
lines.forEach((line) => {
  const elements = line.replace("turn ", "").split(" ");
  let [x1, y1] = elements[1].split(",");
  let [x2, y2] = elements[3].split(",");
  x1 = Number(x1);
  y1 = Number(y1);
  x2 = Number(x2);
  y2 = Number(y2);
  for (let x = x1; x <= x2; x++) {
    for (let y = y1; y <= y2; y++) {
      switch (elements[0]) {
        case "on":
          lights[x][y]++;
          break;
        case "off":
          if (lights[x][y] > 0) {
            lights[x][y]--;
          }
          break;
        case "toggle":
          lights[x][y] = lights[x][y] + 2;
          break;
      }
    }
  }
});
let totalBrightness = 0;
for (let x = 0; x < 1000; x++) {
  for (let y = 0; y < 1000; y++) {
    totalBrightness += lights[x][y];
  }
}

checkRightAnswer(totalBrightness, 17836115);
