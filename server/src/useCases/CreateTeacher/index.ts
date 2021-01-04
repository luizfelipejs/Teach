import { ITeacherRepositorie } from '../../core/repositories/TeacherRepositorie'
import { ITeacher } from '../../core/entities/teacher'

class CreateStudentCase {
  private teacherRepositorie: ITeacherRepositorie

  constructor (teacherRepositorie: ITeacherRepositorie) {
    this.teacherRepositorie = teacherRepositorie
  }

  async execute (data: ITeacher) {
    await this.teacherRepositorie.create(data)
  }
}

export default CreateStudentCase
