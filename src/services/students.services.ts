import students from '../utils/studentsGenerator'

// The service ONLY knows about data. No `c`, no HTTP status codes.

export const studentServices = {
  getAllStudents: () => {
    return students
  },

  getStudentById: (id: number) => {
    return students.find(student => student.id === id) ?? null
  }
}

export const getAllStudents = () => {
  return students
}

export const getStudentById = (id: number) => {
  return students.find(student => student.id === id) ?? null
}

export const enrollStudent = (profile: Record<string, unknown>) => {
  const newStudent = {
    id: crypto.randomUUID(),
    ...profile,
    enrolledAt: new Date().toDateString(),
  }
  students.push(newStudent as any)
  return newStudent
}

export const updateStudent = (id: number, data: Record<string, unknown>) => {
  const index = students.findIndex(student => student.id === id)
  if (index === -1) return null

  students[index] = { ...data, id } as any
  return students[index]
}

export const expelStudent = (id: number) => {
  const index = students.findIndex(student => student.id === id)
  if (index === -1) return false

  students.splice(index, 1)
  return true
}