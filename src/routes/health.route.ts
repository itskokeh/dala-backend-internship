import {Hono} from 'hono'
import students from '../utils/studentsGenerator'

const app = new Hono<{ Bindings: CloudflareBindings }>();

// '/health' because it's the path to health
// asynchronous and synchronous
// localhost:8787 + /health + /
app.get("/", async (c) => {
    const allStudents = students

    return c.json(allStudents, 200)
    // return c.html("<div>All systems operational</div><hr><a href='/message'>Go to message</a>")
})

app.get("/:slug", async (c) => {
    const slug = c.req.param('slug')
    // database operation
    // const post = await getSlug.fromDB(slug)        'pending', 'awaiting'
    // return c.text(`${post}`)
    return c.text(`The Health is ON!!`)
})

// idempotency
// null or undefined
// 201 created
app.post("/create", async (c) => {
    const profile = await c.req.json();
    const responseObject = {
        id: crypto.randomUUID(),
        ...profile,
        status: 'Creation was successful',
        time: new Date().toDateString()
    }
    return c.json({responseObject}, 201)
})

app.put('/students/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const updatedStudent = await c.req.json()

  const index = students.findIndex(student => student.id === id)

  if (index === -1) {
    return c.json({ message: 'Student not found' }, 404)
  }

  // PUT replaces the entire resource
  students[index] = { ...updatedStudent, id }

  return c.json(students[index], 200)
})
// 204

// app.delete("/delete", (c) => {})

export {app as healthRoute}