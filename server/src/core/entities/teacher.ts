import { IUser } from './user'
import { IStudent } from './student'

export interface ITeacher extends IUser {
  students: Array<IStudent>;
}
