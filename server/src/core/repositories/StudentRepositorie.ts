import { IStudent } from '../entities/student'

export interface IStudentRepositorie {
  createStudent: (data: IStudent) => Promise<IStudent>;
  findStudent: (id: number) => Promise<IStudent>;
}
