import { readInput, checkRightAnswer } from "../../utils.js";

const addDelivery = (deliveries, courier, move) => {
  switch (move) {
    case "^":
      courier.y++;
      break;
    case "v":
      courier.y--;
      break;
    case ">":
      courier.x++;
      break;
    case "<":
      courier.x--;
      break;
  }
  let houses = deliveries.get(courier.x);
  if (!houses) {
    houses = new Map();
    deliveries.set(courier.x, houses);
  }
  const presents = houses.get(courier.y);
  if (!presents) {
    houses.set(courier.y, 1);
    return 1;
  } else {
    houses.set(courier.y, presents + 1);
    return 0;
  }
};

const input = readInput();
const moves = input.split("");
const santa = { x: 0, y: 0 };
const robotSanta = { x: 0, y: 0 };
const deliveries = new Map();
let houses = addDelivery(deliveries, santa);
houses += addDelivery(deliveries, robotSanta);
for (let i = 0; i < moves.length; i = i + 2) {
  houses += addDelivery(deliveries, santa, moves[i]);
  houses += addDelivery(deliveries, robotSanta, moves[i + 1]);
}

checkRightAnswer(houses, 2341);
