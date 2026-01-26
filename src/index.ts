import { Hono } from "hono";

const app = new Hono<{ Bindings: CloudflareBindings }>();

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

const site = 'http://localhost:8787/message'

app.get("/", (c) => {
  return c.json({medic, drugs, counsel, Destroyer})
})

app.get("/health", (c) => {
  return c.html("<div>All systems operational</div><hr><a href='/message'>Go to message</a>")
})

app.get("/site", (c) => {
  return c.text(site)
})

app.get("/message", (c) => {
  return c.text("Hello Hono!");
});

export default app;
