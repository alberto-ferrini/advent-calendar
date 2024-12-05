import { readInput, checkRightAnswer } from "../../utils.js";

const addDelivery = (deliveries, x, y) => {
  let houses = deliveries.get(x);
  if (!houses) {
    houses = new Map();
    deliveries.set(x, houses);
  }
  const presents = houses.get(y);
  if (!presents) {
    houses.set(y, 1);
    return 1;
  } else {
    houses.set(y, presents + 1);
    return 0;
  }
};

const input = readInput();
const moves = input.split("");
const deliveries = new Map();
let x = 0;
let y = 0;
let houses = addDelivery(deliveries, x, y);
for (let i = 0; i < moves.length; i++) {
  const move = moves[i];
  switch (move) {
    case "^":
      y++;
      break;
    case "v":
      y--;
      break;
    case ">":
      x++;
      break;
    case "<":
      x--;
      break;
  }
  houses += addDelivery(deliveries, x, y);
}

checkRightAnswer(houses, 2081);
