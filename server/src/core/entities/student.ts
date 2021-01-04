import { ITeacher } from './teacher'
import { IUser } from './user'

export interface IStudent extends IUser {
 teachers: Array<ITeacher>
}
