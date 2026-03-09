import { Context } from 'hono'
import * as StudentService from '../services'
import {studentServices} from '../services'

// The controller ONLY knows about HTTP. It calls the service and
// decides what status code / shape to return.

export const listStudents = (c: Context) => {
//   const student = StudentService.studentServices.getAllStudents()
    const students = studentServices.getAllStudents();
    return c.json(students, 200)
}

export const getStudent = (c: Context) => {
  const id = Number(c.req.param('id'))
  const student = StudentService.getStudentById(id)

  if (!student) {
    return c.json({ message: `Student ${id} not found` }, 404)
  }
  return c.json(student, 200)
}

export const enrollStudent = async (c: Context) => {
  const body = await c.req.json()
  const student = StudentService.enrollStudent(body)
  return c.json(student, 201)
}

export const updateStudent = async (c: Context) => {
  const id = Number(c.req.param('id'))
  const body = await c.req.json()
  const updated = StudentService.updateStudent(id, body)

  if (!updated) {
    return c.json({ message: 'Student not found' }, 404)
  }
  return c.json(updated, 200)
}

export const expelStudent = (c: Context) => {
  const id = Number(c.req.param('id'))
  const removed = StudentService.expelStudent(id)

  if (!removed) {
    return c.json({ message: 'Student not found' }, 404)
  }
  return c.json({ message: `Student ${id} expelled` }, 200)
}