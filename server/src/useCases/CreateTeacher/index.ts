import { ITeacherRepositorie } from '../../core/repositories/TeacherRepositorie'
import { ITeacher } from '../../core/entities/teacher'
import { IBcryptProvider } from '../../core/providers/bcryptProvider'

class CreateStudentCase {
  private teacherRepositorie: ITeacherRepositorie
  private bcryptProvider: IBcryptProvider

  constructor (teacherRepositorie: ITeacherRepositorie, bcryptProvider: IBcryptProvider) {
    this.teacherRepositorie = teacherRepositorie
    this.bcryptProvider = bcryptProvider
  }

  async execute (data: ITeacher) {
    const passwordHashed = await this.bcryptProvider.hash(data.password, 10)
    await this.teacherRepositorie.createTeacher({ ...data, password: passwordHashed })
  }
}

export default CreateStudentCase
