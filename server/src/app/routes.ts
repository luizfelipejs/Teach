import { Router } from "express"
import { getCustomRepository } from "typeorm"
import { createStudentController } from "../adapters/createStudentController"
import { StudentRepository } from "../external/repositories/studentRepository"
import Bcrypt from 'bcrypt'
import { createTeacherController } from "../adapters/createTeacherController"
import { TeacherRepository } from "../external/repositories/teacherRepository"

const routes = Router()

routes.post('/student', (req, res) => {
  const studentRepository = getCustomRepository(StudentRepository)
  new createStudentController(studentRepository, Bcrypt).execute(req, res)
}) 

routes.post('/teacher', (req, res) => {
  const teacherRepository = getCustomRepository(TeacherRepository)
  new createTeacherController(teacherRepository, Bcrypt).execute(req, res)
})

export default routes