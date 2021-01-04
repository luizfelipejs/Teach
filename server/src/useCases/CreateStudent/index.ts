import { IStudentRepositorie } from '../../core/repositories/StudentRepositorie'
import { IStudent } from '../../core/entities/student'

class CreateStudentCase {
  private studentRepositorie: IStudentRepositorie

  constructor (IStudentRepositorie: IStudentRepositorie) {
    this.studentRepositorie = IStudentRepositorie
  }

  async execute (data: IStudent) {
    await this.studentRepositorie.create(data)
  }
}

export default CreateStudentCase
