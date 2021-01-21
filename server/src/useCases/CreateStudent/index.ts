import { IStudentRepositorie } from '../../core/repositories/StudentRepositorie'
import { IStudent } from '../../core/entities/student'
import { IBcryptProvider } from '../../core/providers/bcryptProvider'

class CreateStudentCase {
  private studentRepositorie: IStudentRepositorie
  private BcryptProvider: IBcryptProvider

  constructor (IStudentRepositorie: IStudentRepositorie, IBcryptProvider: IBcryptProvider) {
    this.studentRepositorie = IStudentRepositorie
    this.BcryptProvider = IBcryptProvider
  }

  async execute (data: IStudent) {
    const passwordHashed = await this.BcryptProvider.hash(data.password, 10)

    await this.studentRepositorie.createStudent({ ...data, password: passwordHashed })
  }
}

export default CreateStudentCase
