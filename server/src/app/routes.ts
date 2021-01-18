import { Router } from "express"
import { getCustomRepository } from "typeorm"
import { createStudentController } from "../adapters/createStudentController"
import { StudentRepository } from "../external/repositories/studentRepository"

const routes = Router()

routes.post('/student', (req, res) => {
  const studentRepository = getCustomRepository(StudentRepository)
  new createStudentController(studentRepository).execute(req, res)
}) 

export default routes