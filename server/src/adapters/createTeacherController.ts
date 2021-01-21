import { request, response } from './http'
import { ITeacherRepositorie } from '../core/repositories/TeacherRepositorie'
import { IBcryptProvider } from '../core/providers/bcryptProvider'
import createTeacherCase from '../useCases/CreateTeacher'

export class createTeacherController {
  private teacherRepositorie: ITeacherRepositorie
  private bcryptProvider: IBcryptProvider

  constructor (
    teacherRepositorie: ITeacherRepositorie, 
    bcryptProvider: IBcryptProvider) 
  {
    this.bcryptProvider = bcryptProvider
    this.teacherRepositorie = teacherRepositorie
  }

  async execute (request: request, response: response) {
    const { username, name, email, password } = request.body
    
    try { 
      await new createTeacherCase(this.teacherRepositorie, this.bcryptProvider)
        .execute({ username, name, email, password })
      
      return response.status(201).json({ message: "Usuario criado" })
    } catch (err) { 
      console.log(`Internal Error: ${err.message}`)
      return response
        .status(400)
        .json({ message: 'Erro Interno Cadastro Recusado' })
    }

  }
}