import {Hono} from 'hono'

const app = new Hono();

let medic: string = "50";
let drugs: number = 87;
let counsel = { number: 42 };

interface Ship {
  name: string;
  type: string;
  health: number;
}

const Destroyer: Ship = {
  name: "USS Enterprise",
  type: "Destroyer",
  health: 100,
  // canonPower: 75,
}

app.get("/", (c) => {
  return c.json({medic, drugs, counsel, Destroyer})
})

export {app as rootRoute}