import { IStudent } from '../entities/student'

export interface IStudentRepositorie {
  create: (data: IStudent) => Promise<void>;
  find: (id: number) => Promise<IStudent>;
}
