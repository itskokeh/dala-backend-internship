import {Hono} from 'hono'

const app = new Hono<{ Bindings: CloudflareBindings }>();

// '/health' because it's the path to health
// asynchronous and synchronous
// localhost:8787 + /health + /
app.get("/", async (c) => {
    return c.html("<div>All systems operational</div><hr><a href='/message'>Go to message</a>")
})

app.get("/:slug", async (c) => {
    const slug = c.req.param('slug')
    // database operation
    // const post = await getSlug.fromDB(slug)        'pending', 'awaiting'
    // return c.text(`${post}`)
    return c.text(`The Health is ON!!`)
})

app.post("/create", async (c) => {
    const profile = await c.req.json();
    const responseObject = {
        ...profile,
        status: 'Creation was successful'
    }
    return c.json({responseObject}, 201)
})
// app.put("/edit", (c) => {})
// app.delete("/delete", (c) => {})

export {app as healthRoute}