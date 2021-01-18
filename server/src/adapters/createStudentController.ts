import { IStudentRepositorie } from '../core/repositories/StudentRepositorie'
import createStudentCase from '../useCases/CreateStudent'
import { request, response } from './http'

export class createStudentController {
  private StudentRepository: IStudentRepositorie

  constructor (StudentRepository: IStudentRepositorie) {
    this.StudentRepository = StudentRepository
  }

  async execute (request: request, response: response) {
    const { username, name, email, password } = request.body

    try {
      await new createStudentCase(this.StudentRepository)
      .execute({ username, name, password, email })
      
      return response
        .status(201)
        .json({ message: "cadastro realizado" })
    } catch (err) {
      console.log(`Internal Error: ${err.message}`)
      return response
        .status(400)
        .json({ message: 'Erro Interno Cadastro Recusado' })
    }

  }
}