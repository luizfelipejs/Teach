import { IBcryptProvider } from '../core/providers/bcryptProvider'
import { IStudentRepositorie } from '../core/repositories/StudentRepositorie'
import createStudentCase from '../useCases/CreateStudent'
import { request, response } from './http'

export class createStudentController {
  private StudentRepository: IStudentRepositorie
  private BcryptProvider: IBcryptProvider

  constructor (StudentRepository: IStudentRepositorie, BcryptProvider: IBcryptProvider) {
    this.StudentRepository = StudentRepository
    this.BcryptProvider = BcryptProvider
  }

  async execute (request: request, response: response) {
    const { username, name, email, password } = request.body

    try {
      await new createStudentCase(this.StudentRepository, this.BcryptProvider)
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