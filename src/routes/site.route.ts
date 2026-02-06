import {Hono} from 'hono'

const app = new Hono();

const site = 'http://localhost:8787/message'

app.get("/", (c) => {
  return c.text(site)
})

export {app as siteRoute}