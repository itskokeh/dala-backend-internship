import { Hono } from 'hono'
import * as StudentController from '../controller/students.controller'

const app = new Hono<{ Bindings: CloudflareBindings }>()

app.get('/',           StudentController.listStudents)
app.get('/:id',        StudentController.getStudent)
app.post('/enroll',    StudentController.enrollStudent)
app.put('/:id',        StudentController.updateStudent)
app.delete('/:id',     StudentController.expelStudent)

export { app as studentRoute }