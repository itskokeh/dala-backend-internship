export type Student = {
  id: number
  firstName: string
  lastName: string
  email: string
  age: number
  grade: string
  isActive: boolean
}

const students: Student[] = Array.from({ length: 1000 }, (_, i) => {
  const id = i + 1

  return {
    id,
    firstName: `Student${id}`,
    lastName: `LastName${id}`,
    email: `student${id}@example.com`,
    age: 18 + (id % 5),
    grade: ["A", "B", "C", "D"][id % 4],
    isActive: id % 2 === 0
  }
})

export default students
